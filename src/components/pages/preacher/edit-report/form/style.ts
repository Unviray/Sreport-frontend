import Color from "color";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  fieldContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  fieldContainerNote: {
    display: "flex",
    flexDirection: "column",
  },

  hr: {
    height: 2,
    backgroundColor: theme.colors.surface,
    outline: "none",
    border: "none",
  },

  input: {
    fontSize: "1.2rem",
    border: "none",
    backgroundColor: theme.colors.surface,
    width: 80,
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

  noteInput: {
    fontSize: "1.2rem",
    border: "none",
    backgroundColor: theme.colors.surface,
    resize: "vertical",
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
      backgroundColor: Color(theme.colors.secondary).lighten(0.2).string(),
    },
  },

  errorContainer: {
    borderRadius: 8,
    border: `1px solid ${theme.colors.error}`,
    backgroundColor: Color(theme.colors.error).lighten(0.35).string(),
    padding: {
      top: 4,
      right: 8,
      left: 8,
    },
    margin: {
      top: 8,
      bottom: 4,
    },
  },

  error: {
    fontSize: 12,
    color: theme.colors.error,
    marginBottom: 4,
  },

  bottomContainer: {
    display: "flex",
    justifyContent: "end",
    gap: 8,
    marginTop: 8,
  },
}));

export default useStyles;
