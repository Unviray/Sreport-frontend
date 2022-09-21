import useStyles from "./style";

interface Props {
  id: string;
  number?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  error?: string;
  value: string;
}

const Field = (props: Props) => {
  const { id, number, onChange, label, error, value } = props;
  const classes = useStyles();

  return (
    <div className={classes.fieldContainer}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={number ? "number" : "text"}
        onChange={onChange}
        className={`${classes.input} ${error ? classes.inputError : ""}`}
        value={value}
      />
    </div>
  );
};

export default Field;
