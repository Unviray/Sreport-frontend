import { useEffect, useState } from "react";

import {
  getUnprettifyWorkingMonth,
  getWorkingMonthPrettie,
} from "@/services/working-month";
import { TWorkingMonth } from "@/types/month";
import { apiReturnedService } from "@/services/report";
import MonthItem from "./item";
import useStyles from "./style";

interface Props {
  id: number;
  onChange: (month: TWorkingMonth) => void;
  registerUpdate?: (update: () => void) => void;
}

const MonthList = (props: Props) => {
  const { id, onChange, registerUpdate } = props;
  const classes = useStyles();
  const [current, setCurrent] = useState("");
  const [data, setData] = useState<{ label: string; returned: boolean }[]>([]);

  const update = () => {
    apiReturnedService(id).then(setData);
  };

  useEffect(() => {
    apiReturnedService(id).then(setData);
    getWorkingMonthPrettie("short").then(setCurrent);
    registerUpdate?.(update);
  }, []);

  useEffect(() => {
    getUnprettifyWorkingMonth(current).then(onChange);
  }, [current]);

  return (
    <div className={classes.container}>
      {data.map((month) => (
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
