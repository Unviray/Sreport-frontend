import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  error: {
    fontSize: 12,
    color: theme.colors.error,
    marginBottom: 4,
  },
}));

export default useStyles;
