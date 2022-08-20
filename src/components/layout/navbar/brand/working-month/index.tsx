import useStyles from "./style"

const WorkingMonth = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.text}>Août 2022</h1>
    </div>
  )
}

export default WorkingMonth
