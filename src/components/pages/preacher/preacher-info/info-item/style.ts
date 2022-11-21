import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    display: "flex",
    marginBottom: 8,
  },

  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 36,
    height: 36,
  },

  listContainer: {
    display: "flex",
    flexDirection: "column",
  },

  itemContainer: {
    display: "flex",
    alignItems: "center",
    height: 36,
    marginBottom: -8,
    textDecorationLine: "none",
    color: theme.colors.onSurface
  },
}));

export default useStyles;
