import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

import developerImage from "./../../static/images/developer.png";
import githubImage from "./../../static/images/github.png";
import linkedinImage from "./../../static/images/linkedin.png";
import twitterImage from "./../../static/images/twitter.png";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#FFFDF9",
    color: "#000000",
    height: "100vh",
  },
  center: {
    marginTop: "35%",
  },
  centerImage: {
    marginTop: "15%",
  },
  social: {
    marginTop: "70%",
  },
  greeting: {
    fontSize: 60,
    fontWeight: 600,
    paddingLeft: 150,
    color: "#403d52",
  },
  subGreeting: {
    paddingLeft: 150,
  },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <div className={classes.center}>
            <p className={classes.greeting}>Hi!</p>
            <p className={classes.greeting}>I'm Kartik.</p>
            <p className={classes.subGreeting}>
              I am an aspiring full-stack web developer.
            </p>
          </div>
        </Grid>
        <Grid item xs={5}>
          <img
            src={developerImage}
            width={500}
            className={classes.centerImage}
          ></img>
        </Grid>
        <Grid item xs={2}>
          <Grid container className={classes.social}>
            <Grid item xs={12}>
              <a href="//www.github.com/kartik-3" target="_blank">
                <IconButton aria-label="github">
                  <img src={githubImage} width={50}></img>
                </IconButton>
              </a>
            </Grid>
            <Grid item xs={12}>
              <a
                href="//www.linkedin.com/in/kartik-sehgal-852272122/"
                target="_blank"
              >
                <IconButton aria-label="linkedin">
                  <img src={linkedinImage} width={50}></img>
                </IconButton>
              </a>
            </Grid>
            <Grid item xs={12}>
              <a href="//twitter.com/Kartik_s3" target="_blank">
                <IconButton aria-label="twitter">
                  <img src={twitterImage} width={50}></img>
                </IconButton>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
