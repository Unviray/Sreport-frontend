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
    "@keyframes spin": {
      from: {
        transform: "rotate(0deg)",
      },
      to: {
        transform: "rotate(360deg)",
      },
    },
  },
}));

export default useStyles;
