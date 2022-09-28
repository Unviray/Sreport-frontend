import Item from "./item";
import useStyles from "./style";

interface Props {
  errors: { prefix: string; message?: string }[];
}

const ErrorContainer = (props: Props) => {
  const { errors } = props;
  const classes = useStyles();

  const hasError = errors.find((error) => error.message !== undefined);

  if (!hasError) {
    return null;
  }

  return (
    <div className={classes.errorContainer}>
      {errors.map((error) => (
        <Item prefix={error.prefix} value={error.message} />
      ))}
    </div>
  );
};

export default ErrorContainer;
