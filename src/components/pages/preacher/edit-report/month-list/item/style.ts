import { createUseStyles } from "react-jss";

import Props from "./type";

const useStyles = createUseStyles((theme) => ({
  container: {
    display: "flex",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: ({ returned }: Props) =>
      returned ? theme.colors.primary : theme.colors.secondary,
    borderRadius: ({ current }: Props) => (current ? 8 : 4),
    padding: {
      right: 8,
      left: 8,
    },
    width: ({ current }: Props) => (current ? 104 : null),
    transition: "all 0.1s ease-in-out",
    //boxShadow: ({ current }: Props) =>
    //current ? `0 0 0 3px ${theme.colors.primary}` : null,
  },

  label: {
    fontSize: ({ current }: Props) => (current ? 12 : 10),
    textAlign: "center",
    color: ({ returned }: Props) =>
      returned ? theme.colors.onPrimary : theme.colors.onSecondary,
    margin: {
      top: 8,
      bottom: 8,
    },
  },
}));

export default useStyles;
