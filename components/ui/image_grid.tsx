"use client";
import { InView } from "@/components/ui/in-view";
import { motion } from "motion/react";

export function InViewImagesGrid() {
  return (
    <div className="h-full md:w-10/12 w-full overflow-auto mx-auto">
      <div className="flex pt-12 items-end justify-center pb-12">
        <InView
          viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
        >
          <div className="columns-2 gap-4 px-8 sm:columns-3">
            {[
              "/Turboschmiede (1).jpg",
              "/Turboschmiede (2).jpg",
              "/Turboschmiede (6).jpeg",
              "/Turboschmiede (4).jpg",
              "/Turboschmiede.jpg",
            ].map((imgSrc, index) => {
              return (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      filter: "blur(0px)",
                    },
                  }}
                  key={index}
                  className="mb-4"
                >
                  <img
                    src={imgSrc}
                    alt={`Image placeholder from cosmos.so, index:${index}`}
                    className="size-full rounded-lg object-contain"
                  />
                </motion.div>
              );
            })}
          </div>
        </InView>
      </div>
    </div>
  );
}
