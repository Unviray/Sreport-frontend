import { useTheme } from "react-jss";
import Button from "../button";
import useStyles from "./style";
import { Props } from "./type";

const Surface = (props: Props) => {
  const {
    title,
    children,
    onClick,
    className = "",
    actionIcon: ActionIcon,
    actionOnClick,
  } = props;

  const theme = useTheme<Jss.Theme>();
  const classes = useStyles({ ...props, theme });

  return (
    <div className={`${classes.container} ${className}`} onClick={onClick}>
      <div className={classes.header}>
        <h2 className={classes.title}>{title}</h2>
        {ActionIcon && <Button icon={ActionIcon} size="small" onClick={actionOnClick} />}
      </div>
      {children}
    </div>
  );
};

export default Surface;
