import { useTheme } from "react-jss";
import useStyles from "./style";
import { Props } from "./type";

const Surface = (props: Props) => {
  const { title, children, onClick, className = "" } = props;
  const theme = useTheme<Jss.Theme>();
  const classes = useStyles({ ...props, theme });

  return (
    <div className={`${classes.container} ${className}`} onClick={onClick}>
      <h2 className={classes.title}>{title}</h2>
      {children}
    </div>
  );
};

export default Surface;
