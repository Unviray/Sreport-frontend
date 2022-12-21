import { useTheme } from "react-jss";
import Button from "../button";
import useStyles from "./style";
import { Props } from "./type";

const Surface = (props: Props) => {
  const { title, children, onClick, className = "", actions } = props;

  const theme = useTheme<Jss.Theme>();
  const classes = useStyles({ ...props, theme });

  return (
    <div className={`${classes.container} ${className}`} onClick={onClick}>
      <div className={classes.header}>
        <h2 className={classes.title}>{title}</h2>
        <div className={classes.actionContainer}>
          {actions?.map((action, index) => (
            <Button
              key={index}
              icon={action.icon}
              variant={action.variant}
              size="small"
              onClick={action.onClick}
            />
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Surface;
