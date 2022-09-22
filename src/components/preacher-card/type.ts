export interface Props {
  id: number;
}

export interface Data {
  id: number;
  group: number;
  returned: boolean;
  displayName: string;
  fullName: string;
  lastName: string;
  firstName: string;
  phones: string[];
  address: string;
  birth: string;
  baptism: string;
  tags: {
    id: number;
    name: string;
    color: string;
  }[];
}
