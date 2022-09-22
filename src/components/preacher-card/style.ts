import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    display: "flex",
  },

  idsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    padding: {
      left: 12,
      right: 12,
      top: 16,
      bottom: 16,
    },
    margin: {
      top: -16,
      bottom: -16,
      left: -8,
      right: 8,
    },
    borderRadius: 4,
  },

  idsContainerNotReturned: {
    backgroundColor: theme.colors.secondary,
    color: theme.colors.onSecondary,
  },

  idsContainerReturned: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.onPrimary,
  },

  tagsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },

  id: {
    margin: {
      top: 0,
      bottom: 8,
    },
  },
  name: {
    margin: {
      top: 0,
      bottom: 8,
    },
  },
}));

export default useStyles;
