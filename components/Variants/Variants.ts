import { Variants } from 'framer-motion'

export const fadeIn = (direction = "up"): Variants => {
    return {
        initial: {
            y: direction === "up" ? 40 : -60,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
    };
};



export const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            delayChildren: 0.7,
            staggerChildren: 0.5,
        },
    },
};


export const loopdown: Variants = {
    initial: {
      y: 0,
    },
    animate: {
      y: [30, 0, 30],
      transition: {
        duration: 1.6,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };