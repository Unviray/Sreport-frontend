import { IconHome, IconTag } from "@tabler/icons";

import SidebarItem from "./item"

const Sidebar = () => {
  return <div>
    <SidebarItem icon={IconHome} label="Fandraisana" />
    <SidebarItem icon={IconTag} color="#FF858D" label="Mpisavalalana Maharitra" />
    <SidebarItem icon={IconTag} color="#F17300" label="Mpisavalalana Mpanampy" />
    <SidebarItem icon={IconTag} color="#B5BA72" label="Anti-panahy" />
    <SidebarItem icon={IconTag} color="#EEC643" label="Mpikarakara fiangonana" />
    <SidebarItem icon={IconTag} color="#4B6858" label="Rahalahy vita batisa" />
  </div>;
};

export default Sidebar;
