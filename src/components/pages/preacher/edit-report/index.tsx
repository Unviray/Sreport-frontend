import { useEffect, useState } from "react";

import type { TWorkingMonth } from "@/types/month";
import { getWorkingMonth } from "@/services/working-month";
import PreacherCard from "@/components/preacher-card";
import Modal from "@/components/modal";
import MonthList from "./month-list";
import Form from "./form";

interface Props {
  id: number;
  open?: boolean;
  onClose?: () => void;
  getUpdate: (updateFunc: () => void) => void;
  handleUpdate: () => void;
}

const EditReport = (props: Props) => {
  const { id, open, onClose, getUpdate, handleUpdate } = props;
  const [workingMonth, setWorkingMonth] = useState<TWorkingMonth>();

  useEffect(() => {
    getWorkingMonth().then(setWorkingMonth);
  }, []);

  return (
    <Modal open={open} onClose={onClose}>
      <div>
        <PreacherCard id={id} registerUpdate={getUpdate} />
        <MonthList
          id={id}
          onChange={setWorkingMonth}
          registerUpdate={getUpdate}
        />
        {workingMonth && (
          <Form
            id={id}
            onClose={onClose}
            workingMonth={workingMonth}
            update={handleUpdate}
          />
        )}
      </div>
    </Modal>
  );
};

export default EditReport;
