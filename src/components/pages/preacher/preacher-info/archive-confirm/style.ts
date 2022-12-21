import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    padding: {
      right: 8,
      left: 8,
    }
  },
  title: {
    fontSize: 24,
  },
  actionContainer: {
    display: "flex",
    justifyContent: "end",
  },
}));

export default useStyles;
