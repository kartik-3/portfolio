import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
  },
  appBar: {
    padding: 5,
    top: "auto",
    bottom: 0,
    background: "#FBC02D",
    color: "#000000",
  },
  name: {
    color: "#B71C1C",
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <p className={classes.title}>
        Made with{" "}
        <span role="img" aria-label="Heart Emoji">
          ❤️
        </span>{" "}
        by <span className={classes.name}>Kartik Sehgal</span>
      </p>
    </AppBar>
  );
}
