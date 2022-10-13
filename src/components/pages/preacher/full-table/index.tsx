import { useEffect, useState } from "react";

import Surface from "@/components/surface";
import Table from "@/components/table";
import { getServiceYear } from "@/services/home";
import useStyles from "./style";
import useWorkingMonth from "@/hooks/working-month";

interface Props {
  id: number;
  registerUpdate?: (update: () => void) => void;
}

const Fulltable = (props: Props) => {
  const { id, registerUpdate } = props;
  const classes = useStyles();
  const { workingMonth } = useWorkingMonth();
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

  const update = () => {
    getServiceYear(id).then(setData);
  };

  useEffect(() => {
    registerUpdate?.(update);
  }, []);

  useEffect(() => {
    update();
  }, [workingMonth]);

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
