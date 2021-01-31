import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#FFFDF9",
    color: "#000000",
    height: "100vh",
  },
}));

export default function AboutPage () {
  const classes = useStyles();
  return <div className={classes.root}>
      about
  </div>;
};
