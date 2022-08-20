import { Link } from "react-router-dom";
import useStyles from "./style";
import WorkingMonth from "./working-month";

const Brand = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Link to="/" className={classes.brandText}>
        Sreport
      </Link>
      <WorkingMonth />
    </div>
  );
};

export default Brand;
