import useStyles from "./style";

interface Props {
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  error?: string;
}

const Date = (props: Props) => {
  const { id, value, onChange, label, error } = props;
  const classes = useStyles();

  return (
    <div className={classes.fieldContainer}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type="date"
        value={value}
        onChange={onChange}
        className={`${classes.input} ${error ? classes.inputError : ""}`}
      />
    </div>
  );
};

export default Date;
