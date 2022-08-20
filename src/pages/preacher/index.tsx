import { useParams } from "react-router-dom";
import { IconPencil, IconPlus } from "@tabler/icons";

import PreacherCard from "@/components/preacher-card";
import Button from "@/components/button";
import ServiceYear from "@/components/pages/preacher/service-year";
import Fulltable from "@/components/pages/preacher/full-table";

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
        <ServiceYear />
        <Fulltable />
        <div className={classes.footerContainer}>
          <Button
            variant={returned ? "secondary" : "primary"}
            icon={returned ? IconPencil : IconPlus}
            label={returned ? "Anavao tatitra" : "Ampiditra tatitra"}
            onClick={() => setShowEditReport(true)}
          />
          <EditReport
            open={showEditReport}
            onClose={() => {
              setShowEditReport((s) => !s);
            }}
          />
        </div>
      </div>
      <div>
        <PreacherCard
          id={parseInt(id || "0")}
          group={3}
          returned
          name="Jonatana Rabemananjara"
          tags={[
            {
              id: 1,
              name: "Mpisavalalana Maharitra",
              color: "#FF858D",
            },
            {
              id: 2,
              name: "Mpikarakara fiangonana",
              color: "#EEC643",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default PreacherPage;
