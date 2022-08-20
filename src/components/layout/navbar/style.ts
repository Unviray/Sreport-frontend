import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    height: 56,
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))", // grig-cols-4
    gap: 8,
    padding: {
      left: 8,
      right: 8,
    }
  },
});

export default useStyles;
