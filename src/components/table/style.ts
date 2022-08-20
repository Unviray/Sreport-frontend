import Color from "color";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  tHead: {
    borderBottom: {
      width: 0.75,
      color: Color(theme.colors.primary).alpha(0.25).string(),
      style: "solid",
    },
  },

  table: {
    width: "100%",
    textAlign: "right",
    borderCollapse: "collapse",
  },

  rowContainer: {
    //backgroundColor: Color(theme.colors.primary).alpha(0.1).string(),
    borderBottom: {
      width: 0.5,
      color: Color(theme.colors.primary).alpha(0.2).string(),
      style: "solid",
    },
  },

  number: {
    margin: 0,
    fontSize: 16,
    padding: {
      top: 8,
      bottom: 8,
    },
  },
}));

export default useStyles;
