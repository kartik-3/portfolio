import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#FFFDF9",
    color: "#000000",
    height: "100vh",
  },
}));

export default function ProjectsPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={5}></Grid>
        <Grid item xs={7}></Grid>
      </Grid>
    </div>
  );
}
