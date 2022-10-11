import { useTheme } from "react-jss";
import { useNavigate } from "react-router-dom";
import useStyles from "./style";
import { Props } from "./type";

const SidebarItem = (props: Props) => {
  const { label, icon: Icon, target, onClick } = props;
  const navigate = useNavigate();
  const theme = useTheme<Jss.Theme>();
  const classes = useStyles({ ...props, theme });

  const handleClick = () => {
    navigate(target);
  };

  return (
    <div className={classes.container} onClick={handleClick}>
      <div className={classes.iconContainer}>
        <Icon />
      </div>
      <span>{label}</span>
    </div>
  );
};

export default SidebarItem;
