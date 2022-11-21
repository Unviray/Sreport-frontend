import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  phone: {
    textDecorationLine: "none",
    color: theme.colors.onSurface
  },
}));

export default useStyles;
