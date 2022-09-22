import { useEffect, useState } from "react";

import Surface from "@/components/surface";
import Table from "@/components/table";
import { getServiceYear } from "@/services/home";
import useStyles from "./style";

interface Props {
  id: number;
}

const Fulltable = (props: Props) => {
  const { id } = props;
  const classes = useStyles();
  const [data, setData] = useState<
    {
      month: string;
      publication: number;
      video: number;
      hour: number;
      visit: number;
      study: number;
    }[]
  >([]);

  useEffect(() => {
    getServiceYear(id).then(setData);
  }, []);

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
        data={data}
      />
    </Surface>
  );
};

export default Fulltable;
