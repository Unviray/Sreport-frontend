import { createUseStyles } from "react-jss";
import Color from "color";
import { Props } from "./type";

const useStyles = createUseStyles((theme) => ({
  container: {
    display: "inline-flex",
    alignItems: "center",
    padding: {
      right: 8,
    },
    backgroundColor: ({ active }: Props) =>
      active
        ? Color(theme.colors.secondary).alpha(0.25).string()
        : Color(theme.colors.surface).lighten(0.2).string(),
    color: theme.colors.onSurface,
    fontSize: 12,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: ({ active }: Props) =>
      active
        ? theme.colors.primary
        : Color(theme.colors.onSurface).alpha(0.1).string(),
    borderStyle: "solid",
  },

  dot: {
    width: 12,
    height: 12,
    margin: 4,
    display: "inline-block",
    borderRadius: "50%",
    backgroundColor: ({ color, current, soon }: Props) =>
      current || soon ? Color(color).alpha(0.25).hexa() : color,
  },
}));

export default useStyles;
