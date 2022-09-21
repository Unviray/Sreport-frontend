import { useEffect, useState } from "react";

import useWorkingMonth from "@/hooks/working-month";
import { getMainBoard } from "@/services/home";
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

const MainBoard = () => {
  const classes = useStyles();
  const { workingMonthPrettie } = useWorkingMonth();
  const [data, setData] = useState<
    {
      title: string;
      number: number;
      publication: number;
      video: number;
      hour: number;
      visit: number;
      study: number;
    }[]
  >([]);

  useEffect(() => {
    getMainBoard().then(setData);
  }, []);

  return (
    <Surface title={workingMonthPrettie}>
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
        data={data}
      />
    </Surface>
  );
};

export default MainBoard;
