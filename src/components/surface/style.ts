import Color from "color";
import { createUseStyles } from "react-jss";
import { Props } from "./type";

const useStyles = createUseStyles((theme) => ({
  container: {
    backgroundColor: (props: Props) => props.color || theme.colors.surface,
    color: (props: Props) =>
      props.color
        ? Color(props.color).isDark()
          ? theme.colors.onSurface
          : theme.colors.onPrimary
        : theme.colors.onSurface,
    cursor: ({ onClick }: Props) =>
      onClick !== undefined ? "pointer" : "auto",
    borderRadius: 8,
    padding: {
      left: 8,
      right: 8,
      top: 16,
      bottom: 16,
    },
    marginBottom: 8,
  },

  header: {
    display: "flex",
  },

  title: {
    fontWeight: "bold",
    flexGrow: 1,
    fontSize: 16,
    margin: {
      top: 0,
      bottom: 0,
    },
  },
}));

export default useStyles;
