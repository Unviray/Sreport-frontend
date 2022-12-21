import { IconLoader2, TablerIcon } from "@tabler/icons";
import useStyles from "./style";

interface Props {
  icon?: TablerIcon;
  label?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "default";
  size?: "small" | "default";
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
    size = "default",
    className,
    loading,
  } = props;
  const classes = useStyles();

  const variantClass = {
    default: classes.variantDefault,
    primary: classes.variantPrimary,
    secondary: classes.variantSecondary,
    danger: classes.variantDanger,
  };

  const sizeClass = {
    default: classes.sizeDefault,
    small: classes.sizeSmall,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${classes.container} ${variantClass[variant]} ${sizeClass[size]} ${className}`}
      disabled={loading}
    >
      {Icon ? (
        loading ? (
          <IconLoader2
            size={size === "default" ? 24 : 20}
            className={classes.loadingIcon}
          />
        ) : (
          <Icon size={size === "default" ? 24 : 20} />
        )
      ) : (
        loading && (
          <IconLoader2
            size={size === "default" ? 24 : 20}
            className={classes.loadingIcon}
          />
        )
      )}
      {label && <p className={classes.label}>{label}</p>}
    </button>
  );
};

export default Button;
