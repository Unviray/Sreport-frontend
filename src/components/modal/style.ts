import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  mainDialog: {
    position: "relative",
    zIndex: 50,
  },

  backdrop: {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.25)",
  },

  fullContainer: {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },

  panel: {
    margin:{
      right: "auto",
      left: "auto",
    },
    maxWidth: 576,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
  }
});

export default useStyles;
