import useStyles from "./style";

const ErrorMessage = (props: { prefix: string; value?: string }) => {
  const { prefix, value } = props;
  const classes = useStyles();

  if (!value) {
    return null;
  }

  return (
    <div className={classes.error}>
      <strong>{prefix}: </strong>
      {value}
    </div>
  );
};

export default ErrorMessage;
