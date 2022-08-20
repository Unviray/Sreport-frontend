import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    height: 56 - 12,
    padding: {
      left: 16,
      right: 16,
    },
    display: "flex",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: theme.colors.surface,
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
    margin: {
      top: 0,
      bottom: 0,
    }
  },
}));

export default useStyles;
