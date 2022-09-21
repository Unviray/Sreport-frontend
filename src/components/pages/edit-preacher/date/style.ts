import Color from "color";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  fieldContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 8,
  },

  input: {
    fontSize: "1.2rem",
    backgroundColor: "white",
    border: `1px solid ${Color(theme.colors.primary).fade(0.75).string()}`,
    borderRadius: 4,
    padding: {
      top: 4,
      bottom: 4,
      right: 8,
      left: 8,
    },
    margin: {
      top: 4,
      bottom: 4,
    },

    "&:focus": {
      outline: "none",
      borderWidth: 2,
      backgroundColor: Color(theme.colors.secondary).lighten(0.2).string(),
    },
  },

  inputError: {
    border: `1px solid ${theme.colors.error}`,
    backgroundColor: Color(theme.colors.error).lighten(0.35).string(),

    "&:focus": {
      outline: "none",
      backgroundColor: Color(theme.colors.error).lighten(0.2).string(),
    },
  },
}));

export default useStyles;
