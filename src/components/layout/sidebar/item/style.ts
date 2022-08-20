import { createUseStyles } from "react-jss";
import { Props } from "./type";
import Color from "color";

const useStyles = createUseStyles((theme) => ({
  container: {
    display: "flex",
    marginBottom: 8,
    alignItems: "center",
  },

  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,

    backgroundColor: (props: Props) =>
      props.color ? Color(props.color).alpha(0.1).hexa() : theme.colors.surface,
    color: (props: Props) => props.color || theme.colors.primary,

    borderRadius: 8,

    marginRight: 8,
  },
}));

export default useStyles;
