export const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
      scale: 0.98, // Subtle zoom-in effect for depth
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring", // More natural movement
        stiffness: 80, // Balanced bounce effect
        damping: 15,
        duration: 1, // Smooth speed
        delay: delay,
        ease: [0.4, 0.0, 0.2, 1], // Smooth in-out motion
      },
    },
  };
};
