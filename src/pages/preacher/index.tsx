import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IconPencil, IconPlus } from "@tabler/icons";

import ServiceYear from "@/components/pages/preacher/service-year";
import EditReport from "@/components/pages/preacher/edit-report";
import Fulltable from "@/components/pages/preacher/full-table";
import PreacherCard from "@/components/preacher-card";
import Button from "@/components/button";
import useWorkingMonth from "@/hooks/working-month";
import { getPreacher } from "@/services/preacher";

import useStyles from "./style";
import PreacherInfo from "@/components/pages/preacher/preacher-info"

const PreacherPage = () => {
  const { id } = useParams();
  const classes = useStyles();
  const [returned, setReturned] = useState(false);
  const [showEditReport, setShowEditReport] = useState(false);
  const { workingMonth } = useWorkingMonth();
  const [updates, setUpdates] = useState<(() => void)[]>([]);

  const getUpdate = (updateFunc: () => void) => {
    setUpdates((oldUpdate) => [...oldUpdate, updateFunc]);
  };

  const handleUpdate = () => {
    getPreacher(parseInt(id || "0")).then((preacher) => {
      setReturned(preacher.returned);
    });

    updates.forEach((update) => update());
  };

  useEffect(() => {
    getPreacher(parseInt(id || "0")).then((preacher) => {
      setReturned(preacher.returned);
    });
  }, [id, workingMonth]);

  return (
    <div className={classes.container}>
      <div className={classes.mainContainer}>
        <ServiceYear id={parseInt(id || "0")} registerUpdate={getUpdate} />
        <Fulltable id={parseInt(id || "0")} registerUpdate={getUpdate} />
        <div className={classes.footerContainer}>
          <Button
            variant={returned ? "secondary" : "primary"}
            icon={returned ? IconPencil : IconPlus}
            label={returned ? "Anavao tatitra" : "Ampiditra tatitra"}
            onClick={() => setShowEditReport(true)}
          />
          <EditReport
            id={parseInt(id || "0")}
            open={showEditReport}
            onClose={() => {
              setShowEditReport((s) => !s);
            }}
            getUpdate={getUpdate}
            handleUpdate={handleUpdate}
          />
        </div>
      </div>
      <div>
        <PreacherCard id={parseInt(id || "0")} registerUpdate={getUpdate} />
        <PreacherInfo id={parseInt(id || "0")}  />
      </div>
    </div>
  );
};

export default PreacherPage;
