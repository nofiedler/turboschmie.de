'use client';

import type { Transition } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useImperativeHandle, useRef, useEffect } from 'react';

export interface ChevronsUpDownIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

const defaultTransition: Transition = {
  type: 'spring',
  stiffness: 250,
  damping: 25,
  repeat: Infinity, // Loop the animation
  repeatType: 'reverse', // Reverse the animation on repeat
};

const ChevronsUpDownIcon = forwardRef<
  ChevronsUpDownIconHandle,
  HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  const controls = useAnimation();
  const isControlledRef = useRef(false);

  useImperativeHandle(ref, () => {
    isControlledRef.current = true;

    return {
      startAnimation: () => controls.start('animate'),
      stopAnimation: () => controls.start('normal'),
    };
  });

  useEffect(() => {
    // Start animation immediately after component mounts
    controls.start('animate');
  }, [controls]);

  return (
    <div
      className="select-none p-2 rounded-md flex items-center justify-center"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          variants={{
            normal: { translateY: '0%' },
            animate: { translateY: '2px' },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          d="m7 15 5 5 5-5"
        />
        <motion.path
          variants={{
            normal: { translateY: '0%' },
            animate: { translateY: '-2px' },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          d="m7 9 5-5 5 5"
        />
      </svg>
    </div>
  );
});

ChevronsUpDownIcon.displayName = 'ChevronsUpDownIcon';

export { ChevronsUpDownIcon };
