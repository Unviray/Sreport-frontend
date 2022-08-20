import React from "react";
import { useTheme } from "react-jss";

import useStyles from "./style";
import Props from "./type";

const MonthItem = (props: Props) => {
  const { children, onClick } = props;
  const theme = useTheme<Jss.Theme>();
  const classes = useStyles({ ...props, theme });

  return (
    <div className={classes.container} onClick={onClick}>
      <p className={classes.label}>{children}</p>
    </div>
  );
};

export default MonthItem;
