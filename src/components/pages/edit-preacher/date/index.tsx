import useStyles from "./style";

interface Props {
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  error?: string;
}

const Date = (props: Props) => {
  const { id, onChange, label, error } = props;
  const classes = useStyles();

  return (
    <div className={classes.fieldContainer}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type="date"
        onChange={onChange}
        className={`${classes.input} ${error ? classes.inputError : ""}`}
      />
    </div>
  );
};

export default Date;
