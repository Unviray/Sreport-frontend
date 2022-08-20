import { createUseStyles } from "react-jss";

const hFull = {
  height: "100%",
};

const useStyles = createUseStyles((theme) => ({
  "@global": {
    html: hFull,
    body: {
      ...hFull,
      margin: 0,
      color: theme.colors.onSurface,
    },
    "#root": hFull,
  },
}));

export default useStyles;
