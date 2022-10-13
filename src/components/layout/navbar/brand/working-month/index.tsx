import useWorkingMonth from "@/hooks/working-month";
import type { TMonthNumbers } from "@/types/month";
import { useState } from "react";
import useStyles from "./style";

const WorkingMonth = () => {
  const classes = useStyles();
  const { workingMonth, setWorkingMonth } = useWorkingMonth();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.currentTarget.value.includes("-")) {
      return;
    }

    const [year, month] = event.currentTarget.value.split("-");
    setWorkingMonth({ year: +year, month: +month as TMonthNumbers });
  };

  return (
    <div className={classes.container}>
      {/* <h1 className={classes.text}>{workingMonthPrettie}</h1> */}
      <input
        className={classes.input}
        value={`${workingMonth.year}-${workingMonth.month
          .toString()
          .padStart(2, "0")}`}
        type="month"
        name="m"
        id="m"
        onChange={handleChange}
      />
    </div>
  );
};

export default WorkingMonth;
