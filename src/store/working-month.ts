import create from "zustand";

import type { TWorkingMonth } from "@/types/month";
import {
  getWorkingMonth,
  getWorkingMonthPrettie,
  setWorkingMonth,
} from "@/services/working-month";

interface WorkingMonthStore {
  value: TWorkingMonth;
  prettieValue: string;
  setValue: (value?: TWorkingMonth) => void;
}

const useWorkingMonthStore = create<WorkingMonthStore>((set) => ({
  value: { month: 1, year: 2022 },
  prettieValue: "",
  setValue: async (value) => {
    if (value) {
      const newValue = await setWorkingMonth(value);
      set(() => ({ value: newValue }));
    } else {
      const newValue = await getWorkingMonth();
      set(() => ({ value: newValue }));
    }

    const newPrettieValue = await getWorkingMonthPrettie();
    set(() => ({ prettieValue: newPrettieValue }));
  },
}));

export default useWorkingMonthStore;
