export const navVariants = (delay: number) => ({
  hidden: {
    opacity: 0,
    marginTop: "-10px",
    y: -50,
    transition: {
      type: "tween",
    },
  },
  show: {
    opacity: 1,
    marginTop: "0px",
    y: 0,
    transition: {
      type: "tween",
      delay: delay,
    },
  },
});
