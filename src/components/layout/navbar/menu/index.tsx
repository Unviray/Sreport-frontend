import Button from "@/components/button";
import { IconPlus } from "@tabler/icons";
import useStyles from "./style";

const Menu = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Button icon={IconPlus} label="Mpitory vaovao" />
    </div>
  );
};

export default Menu;
