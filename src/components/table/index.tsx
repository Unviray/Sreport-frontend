import useStyles from "./style";

interface Props<T> {
  columns: {
    id: keyof T;
    label: string | number;
    className?: string;
  }[];
  data: T[];
}

const Table = <T,>(props: Props<T>) => {
  const classes = useStyles();
  const { columns, data } = props;

  return (
    <table className={classes.table}>
      <thead className={classes.tHead}>
        <tr>
          {columns.map((column) => (
            <th key={column.id as string} className={column.className}>
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className={classes.rowContainer}>
            {columns.map((column) => (
              <td
                key={column.id as string | number}
                className={column.className}
              >
                {typeof row[column.id] === "number" ? (
                  <pre className={classes.number}>
                    {row[column.id] as string | number}
                  </pre>
                ) : (
                  (row[column.id] as string | number)
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
