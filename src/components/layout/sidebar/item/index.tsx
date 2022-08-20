import { useTheme } from "react-jss";
import useStyles from "./style";
import { Props } from "./type"

const SidebarItem = (props: Props) => {
  const { label, icon: Icon, onClick } = props;
  const theme = useTheme<Jss.Theme>();
  const classes = useStyles({ ...props, theme });

  return (
    <div className={classes.container}>
      <div className={classes.iconContainer}>
        <Icon />
      </div>
      <span>{label}</span>
    </div>
  );
};

export default SidebarItem;
