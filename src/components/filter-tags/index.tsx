import { useEffect, useState } from "react";

import { apiTags } from "@/services/report";
import TagPill from "@/components/tag-pill";
import useStyles from "./style";

interface Props {
  active: number[];
  onChange: (value: number[]) => void;
}

const FilterTags = (props: Props) => {
  const { active, onChange } = props;
  const classes = useStyles();
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
            onChange(
              active.includes(tag.id)
                ? active.filter((t) => t !== tag.id)
                : [...active, tag.id]
            );
          }}
        />
      ))}
    </div>
  );
};

export default FilterTags;
