import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  current: {
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 64,
    margin: {
      top: 0,
      bottom: 0,
    },
  },

  percent: {
    fontSize: 24,
    opacity: 0.5,
    marginRight: 8,
  }
});

export default useStyles;
