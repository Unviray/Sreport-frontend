import { useNavigate } from "react-router-dom";
import { IconPlus } from "@tabler/icons";

import Button from "@/components/button";
import useStyles from "./style";

const Menu = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <Button
        icon={IconPlus}
        label="Mpitory vaovao"
        onClick={() => {
          navigate(`/mpitory-vaovao`);
        }}
      />
    </div>
  );
};

export default Menu;
