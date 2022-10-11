import type { TablerIcon } from "@tabler/icons";

export interface Props {
  label: string;
  icon: TablerIcon;
  onClick?: () => void;
  color?: string;
  target: string;
}
