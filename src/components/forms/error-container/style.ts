import Color from "color";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
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
}));

export default useStyles;
