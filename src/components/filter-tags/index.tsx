import { useEffect, useState } from "react";

import { apiTags } from "@/services/report";
import TagPill from "@/components/tag-pill";
import useStyles from "./style";

const preacherMockData = [
  {
    id: 1,
    name: "Mpisavalalana Maharitra",
    color: "#FF858D",
    active: true,
  },
  {
    id: 2,
    name: "Mpisavalalana Mpanampy",
    color: "#F17300",
  },
  {
    id: 3,
    name: "Anti-panahy",
    color: "#B5BA72",
  },
  {
    id: 4,
    name: "Rahalahy vita batisa",
    color: "#4B6858",
  },
  {
    id: 5,
    name: "Mpikarakara fiangonana",
    color: "#EEC643",
  },
];

const FilterTags = () => {
  const classes = useStyles();
  const [active, setActive] = useState<number[]>([]);
  const [data, setData] = useState<
    { id: number; name: string; color: string }[]
  >([]);

  useEffect(() => {
    apiTags().then(setData);
  }, []);

  return (
    <div className={classes.container}>
      {data.map((tag) => (
        <TagPill
          key={tag.id}
          {...tag}
          active={active.includes(tag.id)}
          onClick={() => {
            setActive((a) => {
              if (a.includes(tag.id)) {
                return a.filter((t) => t !== tag.id);
              } else {
                return [...a, tag.id];
              }
            });
          }}
        />
      ))}
    </div>
  );
};

export default FilterTags;
