import { useEffect, useState } from "react";

import { getPreacherList } from "@/services/preacher";
import PreacherCard from "@/components/preacher-card";
import FilterTags from "@/components/filter-tags";
import useStyles from "./style";

const SearchPage = () => {
  const classes = useStyles();
  const [preacherList, setPreacherList] = useState<number[]>([]);

  useEffect(() => {
    getPreacherList().then(setPreacherList);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.mainContainer}>
        {preacherList.map((id) => (
          <PreacherCard key={id} id={id} />
        ))}
      </div>
      <FilterTags />
    </div>
  );
};

export default SearchPage;
