import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  brandText: {
    fontSize: "1.5rem",
    textDecoration: "none",
    color: theme.colors.primary,
    fontWeight: "bold",
    margin: {
      top: 0,
      bottom: 0,
    }
  },
}));

export default useStyles;
