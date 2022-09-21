import type { TablerIcon } from "@tabler/icons";
import useStyles from "./style";

interface Props {
  icon?: TablerIcon;
  label?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "default";
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button = (props: Props) => {
  const {
    icon: Icon,
    label,
    onClick,
    type = "button",
    variant = "default",
    className,
  } = props;
  const classes = useStyles();

  const variantClass = {
    default: classes.variantDefault,
    primary: classes.variantPrimary,
    secondary: classes.variantSecondary,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${classes.container} ${variantClass[variant]} ${className}`}
    >
      {Icon && <Icon size={24} />}
      {label && <p className={classes.label}>{label}</p>}
    </button>
  );
};

export default Button;
