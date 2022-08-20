import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))", // grig-cols-3
    gap: 8,
  },

  mainContainer: {
    position: "relative",
    gridColumn: "span 2 / span 2", // col-span-2
  },

  footerContainer: {
    position: "sticky",
    display: "flex",
    justifyContent: "end",
    bottom: 0,
    padding: {
      bottom: 8,
    },
  },
});

export default useStyles;
