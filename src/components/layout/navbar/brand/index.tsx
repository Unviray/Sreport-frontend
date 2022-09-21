import { Link } from "react-router-dom";
import WorkingMonth from "./working-month";
import useStyles from "./style";

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
