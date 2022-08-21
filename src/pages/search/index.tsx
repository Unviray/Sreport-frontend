import PreacherCard from "@/components/preacher-card";
import FilterTags from "@/components/filter-tags";
import useStyles from "./style";

const preacherMockData = [
  {
    id: 13,
    group: 3,
    returned: true,
    name: "Jonatana Rabemananjara",
    tags: [
      {
        id: 1,
        name: "Mpisavalalana Maharitra",
        color: "#FF858D",
      },
      {
        id: 2,
        name: "Mpikarakara fiangonana",
        color: "#EEC643",
      },
    ],
  },
  {
    id: 14,
    group: 3,
    returned: false,
    name: "Mikaia Rabemananjara",
    tags: [
      {
        id: 4,
        name: "Rahalahy vita batisa",
        color: "#4B6858",
      },
    ],
  },
  {
    id: 15,
    group: 3,
    returned: false,
    name: "Manampy Rabemananjara",
    tags: [
      {
        id: 3,
        name: "Anti-panahy",
        color: "#B5BA72",
      },
    ],
  },
  {
    id: 16,
    group: 3,
    returned: true,
    name: "Hanta Rabemananjara",
    tags: [
      {
        id: 1,
        name: "Mpisavalalana Maharitra",
        color: "#FF858D",
      },
    ],
  },
];

const SearchPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.mainContainer}>
        {preacherMockData.map((preacher) => (
          <PreacherCard
            key={preacher.id}
            id={preacher.id}
            group={preacher.group}
            returned={preacher.returned}
            name={preacher.name}
            tags={preacher.tags}
          />
        ))}
      </div>
      <FilterTags />
    </div>
  );
};

export default SearchPage;
