import Surface from "@/components/surface";
import Table from "@/components/table";

import useStyles from "./style";

interface Data {
  title: string;
  number: number;
  publication: number;
  video: number;
  hour: number;
  visit: number;
  study: number;
}

const mockData: Data[] = [
  {
    title: "Mpisavalalana Mpanampy",
    number: 2,
    publication: 5,
    video: 1,
    hour: 66,
    visit: 20,
    study: 5,
  },
  {
    title: "Mpisavalalana Maharitra",
    number: 10,
    publication: 50,
    video: 16,
    hour: 660,
    visit: 230,
    study: 56,
  },
  {
    title: "Mpitory",
    number: 73,
    publication: 16,
    video: 8,
    hour: 567,
    visit: 54,
    study: 72,
  },
  {
    title: "Total",
    number: 87,
    publication: 56,
    video: 32,
    hour: 967,
    visit: 356,
    study: 104,
  },
];

const MainBoard = () => {
  const classes = useStyles();

  return (
    <Surface title="Août 2022">
      <Table
        columns={[
          { id: "title", label: "", className: classes.rowSpan },
          { id: "number", label: "ISA" },
          { id: "publication", label: "ZVN" },
          { id: "video", label: "VID" },
          { id: "hour", label: "ORA" },
          { id: "visit", label: "FIT" },
          { id: "study", label: "FAP" },
        ]}
        data={mockData}
      />
    </Surface>
  );
};

export default MainBoard;
