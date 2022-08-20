export interface Props {
  id: number;
  group: number;
  returned?: boolean;
  name: string;
  tags: {
    id: number;
    name: string;
    color: string;
  }[];
}
