import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import useSearchStore from "@/store/search";
import useStyles from "./style";

const SearchBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const setSearch = useSearchStore((state) => state.setValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
    navigate(`/hitady`);
  };

  return (
    <div className={classes.container}>
      <input
        className={classes.input}
        placeholder="Recherche"
        onChange={handleChange}
        onFocus={() => {
          navigate(`/hitady`);
        }}
      />
    </div>
  );
};

export default SearchBar;
