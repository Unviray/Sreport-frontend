import { useEffect, useState } from "react";
import { IconMinus, IconPlus } from "@tabler/icons";

import Button from "@/components/button";

import useStyles from "./style";

interface Props {
  label: string;
  initialValue: string[];
  error?: boolean;
  onChange: (value: string[]) => void;
}

const Phone = (props: Props) => {
  const { label, initialValue, error, onChange } = props;
  const classes = useStyles();
  const [values, setValues] = useState<{ id: number; value: string }[]>([]);

  const handleAdd = () => {
    setValues((oldValues) => {
      return [...oldValues, { id: Math.random(), value: "" }];
    });
  };

  const handleRemove = (id: number) => {
    setValues((oldValues) => {
      return oldValues.filter((oldValue) => oldValue.id !== id);
    });
  };

  const handleChange = (id: number, value: string) => {
    setValues((oldValues) => {
      const newValue: { id: number; value: string }[] = [];

      oldValues.forEach((oldValue) => {
        newValue.push(oldValue.id === id ? { ...oldValue, value } : oldValue);
      });
      return newValue;
    });
  };

  useEffect(() => {
    if (values.length === 0) {
      setValues(
        initialValue.map((value) => {
          return { id: Math.random(), value };
        })
      );
    }
  }, [initialValue]);

  useEffect(() => {
    onChange(values.map((value) => value.value));
  }, [values]);

  return (
    <>
      <div className={classes.fieldContainer}>
        <label>{label}</label>
        {values.map((value) => (
          <div key={value.id} className={classes.phoneContainer}>
            <input
              id={value.id.toString()}
              name={value.id.toString()}
              type="text"
              onChange={(event) => {
                handleChange(value.id, event.currentTarget.value);
              }}
              className={`${classes.input} ${error ? classes.inputError : ""}`}
              value={value.value}
            />

            <Button icon={IconMinus} onClick={() => handleRemove(value.id)} />
          </div>
        ))}
      </div>
      <Button
        icon={IconPlus}
        onClick={handleAdd}
        label="Hanampy laharana finday"
      />
    </>
  );
};

export default Phone;
