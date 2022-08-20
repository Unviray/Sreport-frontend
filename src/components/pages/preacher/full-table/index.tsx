import Surface from "@/components/surface";
import Table from "@/components/table";
import useStyles from "./style";

interface Data {
  month: string;
  publication: number;
  video: number;
  hour: number;
  visit: number;
  study: number;
}

const mockData: Data[] = [
  {
    month: "Sept 2022",
    publication: 5,
    video: 1,
    hour: 66,
    visit: 20,
    study: 5,
  },
  {
    month: "Okt 2022",
    publication: 50,
    video: 16,
    hour: 660,
    visit: 230,
    study: 56,
  },
  {
    month: "Nov 2022",
    publication: 16,
    video: 8,
    hour: 567,
    visit: 54,
    study: 72,
  },
  {
    month: "Des 2022",
    publication: 56,
    video: 32,
    hour: 967,
    visit: 356,
    study: 104,
  },
  {
    month: "Jan 2023",
    publication: 32,
    video: 16,
    hour: 567,
    visit: 54,
    study: 72,
  },
  {
    month: "Feb 2023",
    publication: 56,
    video: 32,
    hour: 967,
    visit: 356,
    study: 104,
  },
  {
    month: "Mar 2023",
    publication: 16,
    video: 8,
    hour: 567,
    visit: 54,
    study: 72,
  },
  {
    month: "Apr 2023",
    publication: 56,
    video: 32,
    hour: 967,
    visit: 356,
    study: 104,
  },
  {
    month: "Mey 2023",
    publication: 0,
    video: 0,
    hour: 0,
    visit: 0,
    study: 0,
  },
  {
    month: "Jon 2023",
    publication: 0,
    video: 0,
    hour: 0,
    visit: 0,
    study: 0,
  },
  {
    month: "Jol 2023",
    publication: 0,
    video: 0,
    hour: 0,
    visit: 0,
    study: 0,
  },
  {
    month: "Aog 2023",
    publication: 0,
    video: 0,
    hour: 0,
    visit: 0,
    study: 0,
  },
];

const Fulltable = () => {
  const classes = useStyles();

  return (
    <Surface>
      <Table
        columns={[
          { id: "month", label: "", className: classes.rowSpan },
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

export default Fulltable;
