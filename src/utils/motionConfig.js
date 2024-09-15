export const pageVariants = {
    initial: {
      opacity: 0,
      y: -100,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      x: 100,
    },
  };
  
 export const pageTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    duration: 0.5,
  };