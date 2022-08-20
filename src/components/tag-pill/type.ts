export interface Props {
  id: number;
  name: string;
  color: string;
  active?: boolean;
  onClick?: (id: number) => void;
}
