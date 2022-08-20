import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    // With navbar
    height: "100%",
  },

  bodyContainer: {
    // Without navbar
    height: "calc(100% - 56px)",
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))", // grig-cols-4
    gap: 8,
    padding: {
      left: 8,
      right: 8,
    },
  },

  content: {
    overflowY: "auto",
    gridColumn: "span 3 / span 3", // col-span-3
  }
});

export default useStyles;
