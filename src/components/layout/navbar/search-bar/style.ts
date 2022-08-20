import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    gridColumn: "span 2 / span 2", // col-span-2
    margin: {
      top: 4,
      bottom: 4,
    },
    borderRadius: 8,
    backgroundColor: theme.colors.surface,
  },

  input: {
    width: "100%",
    height: "100%",
    border: "none",
    outline: "none",
    padding: {
      left: 8,
      right: 8,
    },
    fontSize: 16,
    color: theme.colors.onSurface,
    backgroundColor: "transparent",
  },
}));

export default useStyles;
