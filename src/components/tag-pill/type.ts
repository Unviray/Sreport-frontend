import type { TWorkingMonth } from "@/types/month";

export interface Props {
  id: number;
  preacherId?: number;
  name: string;
  color: string;
  soon?: {
    start: TWorkingMonth;
    end: TWorkingMonth;
  };
  current?: {
    start: TWorkingMonth;
    end: TWorkingMonth;
  };
  active?: boolean;
  onClick?: (id: number) => void;
}
