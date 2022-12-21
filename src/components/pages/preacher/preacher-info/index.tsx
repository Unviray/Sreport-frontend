import { useEffect, useState } from "react";
import {
  IconArchive,
  IconCalendar,
  IconMap2,
  IconPencil,
  IconPhone,
  TablerIcon,
} from "@tabler/icons";
import moment from "moment";

import Surface from "@/components/surface";
import { updatePreacher, getPreacher } from "@/services/preacher";
import InfoItem from "./info-item";
import useStyles from "./style";
import { useNavigate } from "react-router-dom";
import ArchiveConfirm from "./archive-confirm";

interface Props {
  id: number;
}

const PreacherInfo = (props: Props) => {
  const { id } = props;
  const navigate = useNavigate();
  const classes = useStyles();
  const [showArchiveConfirm, setShowArchiveConfirm] = useState(false);
  const [data, setData] = useState<{
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
  }>();

  useEffect(() => {
    getPreacher(id).then(setData);
  }, [id]);

  const doArchive = () => {
    updatePreacher(id, { archived: true }).then(() => navigate("/"));
  };

  if (!data) {
    return null;
  }

  const actions: {
    icon: TablerIcon;
    variant?: "danger" | "default" | undefined;
    onClick: () => void;
  }[] = [
    {
      icon: IconPencil,
      onClick: () => {
        navigate(`/mpitory/${id}/hanavao`);
      },
    },
    {
      icon: IconArchive,
      variant: "danger",
      onClick: () => {
        setShowArchiveConfirm(true);
      },
    },
  ];

  return (
    <>
      <Surface title="Mombamomba azy" actions={actions}>
        <InfoItem
          icon={IconPhone}
          showIf={data.phones.length > 0}
          list={data.phones.map((phone) => {
            return (
              <a href={`tel:${phone}`} className={classes.phone}>
                {phone}
              </a>
            );
          })}
        />
        <InfoItem icon={IconMap2} showIf={data.address !== ""} list={[<span>{data.address}</span>]} />
        <InfoItem
          icon={IconCalendar}
          showIf={data.birth !== null}
          list={[
            <span>
              Teraka: {moment.utc(data.birth).format("DD MMMM YYYY")}
            </span>,
          ]}
        />
        <InfoItem
          icon={IconCalendar}
          showIf={data.baptism !== null}
          list={[
            <span>
              Batisa: {moment.utc(data.baptism).format("DD MMMM YYYY")}
            </span>,
          ]}
        />
      </Surface>
      <ArchiveConfirm
        open={showArchiveConfirm}
        confirm={doArchive}
        onClose={() => {
          setShowArchiveConfirm((s) => !s);
        }}
      />
    </>
  );
};

export default PreacherInfo;
