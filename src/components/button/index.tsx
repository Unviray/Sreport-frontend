import { IconLoader2, TablerIcon } from "@tabler/icons";
import useStyles from "./style";

interface Props {
  icon?: TablerIcon;
  label?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "default";
  type?: "button" | "submit" | "reset";
  className?: string;
  loading?: boolean;
}

const Button = (props: Props) => {
  const {
    icon: Icon,
    label,
    onClick,
    type = "button",
    variant = "default",
    className,
    loading,
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
      disabled={loading}
    >
      {Icon ? (
        loading ? (
          <IconLoader2 size={24} className={classes.loadingIcon} />
        ) : (
          <Icon size={24} />
        )
      ) : (
        loading && <IconLoader2 size={24} className={classes.loadingIcon} />
      )}
      {label && <p className={classes.label}>{label}</p>}
    </button>
  );
};

export default Button;
