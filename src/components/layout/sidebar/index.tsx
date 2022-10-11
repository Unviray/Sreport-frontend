import { apiTags } from "@/services/report";
import { IconHome, IconTag } from "@tabler/icons";
import { useEffect, useState } from "react";

import SidebarItem from "./item";

const Sidebar = () => {
  const [data, setData] = useState<
    { id: number; name: string; color: string }[]
  >([]);

  useEffect(() => {
    apiTags().then(setData);
  }, []);

  return (
    <div>
      <SidebarItem icon={IconHome} label="Fandraisana" target="/" />
      {data.map((tag) => (
        <SidebarItem
          key={tag.id}
          icon={IconTag}
          color={tag.color}
          label={tag.name}
          target={`/marika/${tag.id}`}
        />
      ))}
    </div>
  );
};

export default Sidebar;
