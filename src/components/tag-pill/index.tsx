import { IconArrowNarrowLeft, IconClock } from "@tabler/icons";
import { useTheme } from "react-jss";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import useStyles from "./style";
import { Props } from "./type";

const TagPill = (props: Props) => {
  const { id, preacherId, name, soon, color, current, onClick } = props;
  const theme = useTheme<Jss.Theme>();
  const classes = useStyles({ ...props, theme });

  const temp = current || soon;

  const tooltipContent = temp
    ? `${temp.start.month}/${temp.start.year} - ${temp.end.month}/${temp.end.year}`
    : "";

  return (
    <>
      <button
        type="button"
        className={classes.container}
        onClick={() => onClick?.(id)}
        id={`tag-${preacherId}-${id}`}
      >
        <div className={classes.dot}>
          {current && <IconClock size={12} color={color} />}
          {soon && <IconArrowNarrowLeft size={12} color={color} />}
        </div>
        {name}
      </button>
      {temp && (
        <Tooltip
          anchorId={`tag-${preacherId}-${id}`}
          content={tooltipContent}
          place="bottom"
          variant="info"
        />
      )}
    </>
  );
};

export default TagPill;
