import { useState } from "react";
import MonthItem from "./item";
import useStyles from "./style";

const mockData = [
  { label: "Sep 2021", returned: true },
  { label: "Okt 2021", returned: true },
  { label: "Nov 2021", returned: true },
  { label: "Des 2021", returned: true },
  { label: "Jan 2022", returned: true },
  { label: "Feb 2022", returned: true },
  { label: "Mar 2022", returned: true },
  { label: "Apr 2022", returned: false },
  { label: "Mey 2022", returned: false },
  { label: "Jon 2022", returned: false },
  { label: "Jol 2022", returned: false },
  { label: "Aog 2022", returned: false },
];
const MonthList = () => {
  const classes = useStyles();
  const [current, setCurrent] = useState("Apr 2022");

  return (
    <div className={classes.container}>
      {mockData.map((month) => (
        <MonthItem
          key={month.label}
          current={month.label === current}
          returned={month.returned}
          onClick={() => setCurrent(month.label)}
        >
          {month.label}
        </MonthItem>
      ))}
    </div>
  );
};

export default MonthList;
