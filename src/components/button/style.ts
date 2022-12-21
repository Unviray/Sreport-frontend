import Color from "color";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: {
      width: 0,
      radius: 8,
    },

    "&:hover": {
      border: {
        radius: 12,
      },
    },

    transition: "border-radius 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  },

  variantDefault: {
    backgroundColor: "#00000000",
    color: theme.colors.primary,

    "&:hover": {
      backgroundColor: theme.colors.primary,
      color: theme.colors.onPrimary,
    },
  },
  variantPrimary: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.onPrimary,

    "&:hover": {
      backgroundColor: Color(theme.colors.primary).lighten(0.2).string(),
    },
  },
  variantSecondary: {
    backgroundColor: theme.colors.secondary,
    color: theme.colors.onSecondary,

    "&:hover": {
      backgroundColor: Color(theme.colors.secondary).darken(0.1).string(),
    },
  },
  variantDanger: {
    backgroundColor: "#00000000",
    color: theme.colors.error,

    "&:hover": {
      backgroundColor: theme.colors.error,
      color: theme.colors.onError,
    },
  },

  sizeDefault: {
    height: 44,
    minWidth: 44,
  },

  sizeSmall: {
    height: 22,
    minWidth: 22,
  },

  label: {
    marginLeft: 4,
    marginRight: 4,
  },

  loadingIcon: {
    animation: "spin 1s linear infinite",
  },
}));

export default useStyles;
