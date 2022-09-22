import { useParams } from "react-router-dom";
import { IconPencil, IconPlus } from "@tabler/icons";

import ServiceYear from "@/components/pages/preacher/service-year";
import Fulltable from "@/components/pages/preacher/full-table";
import PreacherCard from "@/components/preacher-card";
import Button from "@/components/button";

import useStyles from "./style";
import EditReport from "@/components/pages/preacher/edit-report";
import { useEffect, useState } from "react";

const PreacherPage = () => {
  const { id } = useParams();
  const classes = useStyles();
  const [returned, setReturned] = useState(false);
  const [showEditReport, setShowEditReport] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.mainContainer}>
        <ServiceYear id={parseInt(id || "0")} />
        <Fulltable id={parseInt(id || "0")} />
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
          />
        </div>
      </div>
      <div>
        <PreacherCard id={parseInt(id || "0")} />
      </div>
    </div>
  );
};

export default PreacherPage;
