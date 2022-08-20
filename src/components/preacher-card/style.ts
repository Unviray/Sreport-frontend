import { createUseStyles } from "react-jss";
import { Props } from "./type";

const useStyles = createUseStyles((theme) => ({
  container: {
    display: "flex",
  },

  idsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    backgroundColor: ({ returned }: Props) =>
      returned ? theme.colors.primary : theme.colors.secondary,
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
    color: ({ returned }: Props) =>
      returned ? theme.colors.onPrimary : theme.colors.onSecondary,
    borderRadius: 4,
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
