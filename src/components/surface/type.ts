import { TablerIcon } from "@tabler/icons";

export interface Props {
  title?: string;
  children: React.ReactNode;
  color?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  actions?: {
    icon: TablerIcon;
    variant?: "danger" | "default";
    onClick: () => void;
  }[];
}
