import useStyles from "./style";

interface Props {
  id: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
  options: {
    value: string;
    label: string;
  }[];
  value?: Props["options"][0]["value"];
}

const Choice = (props: Props) => {
  const { id, onChange, label, options, value } = props;
  const classes = useStyles();

  return (
    <div className={classes.fieldContainer}>
      <label htmlFor={id}>{label}</label>
      <div className={classes.optionContainer}>
        <select name={id} id={id} className={classes.input} onChange={onChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Choice;
