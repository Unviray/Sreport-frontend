import { useEffect, useState } from "react";
import {
  getWorkingMonth,
  getWorkingMonthPrettie,
  setWorkingMonth,
} from "@/services/working-month";
import { TWorkingMonth } from "@/types/month";

const useWorkingMonth = () => {
  const [value, setValue] = useState<TWorkingMonth>();
  const [prettieValue, setPrettieValue] = useState("");

  useEffect(() => {
    getWorkingMonth().then(setValue);
    getWorkingMonthPrettie().then(setPrettieValue);
  }, []);

  const handleChange = (wm: TWorkingMonth) => {
    setWorkingMonth(wm).then(setValue);
    getWorkingMonthPrettie().then(setPrettieValue);
  };

  return {
    workingMonth: value,
    workingMonthPrettie: prettieValue,
    setWorkingMonth: handleChange,
  };
};

export default useWorkingMonth;
