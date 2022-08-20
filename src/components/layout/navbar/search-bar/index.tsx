import { useNavigate } from "react-router-dom";
import useStyles from "./style";

const SearchBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <input
        className={classes.input}
        placeholder="Recherche"
        onFocus={() => {
          navigate(`/hitady`);
        }}
      />
    </div>
  );
};

export default SearchBar;
