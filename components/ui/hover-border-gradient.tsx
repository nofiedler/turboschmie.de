"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<{
  as?: React.ElementType;
  containerClassName?: string;
  className?: string;
  duration?: number;
  clockwise?: boolean;
}>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  // Verbesserte Gradient-Maps mit höherem Kontrast
  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, rgba(50, 117, 248, 0.8) 0%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, rgba(50, 117, 248, 0.8) 0%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, rgba(50, 117, 248, 0.8) 0%, rgba(255, 255, 255, 0) 100%)",
    RIGHT: "radial-gradient(16.2% 41.2% at 100% 50%, rgba(50, 117, 248, 0.8) 0%, rgba(255, 255, 255, 0) 100%)",
  };

  // Verstärkter Highlight-Effekt
  const highlight = "radial-gradient(75% 181.16% at 50% 50%, #3275F8 0%, rgba(50, 117, 248, 0.4) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => {
          const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
          const currentIndex = directions.indexOf(prevState);
          return directions[
            clockwise
              ? (currentIndex - 1 + directions.length) % directions.length
              : (currentIndex + 1) % directions.length
          ];
        });
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, clockwise]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border border-white/20 content-center hover:bg-black/40 transition duration-500 bg-black/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto text-white z-10 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className="absolute inset-0 z-0 rounded-[inherit] overflow-hidden"
        style={{
          filter: "blur(8px)", // Verstärkter Blur-Effekt
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "easeInOut", duration }} // Geänderte Ease-Funktion
      />
      <div className="bg-black/90 absolute z-1 flex-none inset-[2px] rounded-[100px]" />
    </Tag>
  );
}