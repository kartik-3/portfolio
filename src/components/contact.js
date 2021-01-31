import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#FFFDF9",
    color: "#000000",
    height: "100vh",
  },
  title: {
    fontSize: 60,
    fontWeight: 600,
    paddingLeft: 0,
    textAlign: "center",
    paddingBottom: 8,
    color: "#403d52",
  },
  parentView: {
    borderBottomWidth: 6,
    borderBottomColor: "#1988ff",
    borderBottomStyle: "solid",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginLeft: 150,
    marginRight: 150,
  },
  form: {
    marginLeft: 100,
    marginRight: 100,
  },
  btn: {
    position: "relative",
    left: "25%",
    width: "50%",
    // marginLeft: 175,
    // marginRight: 175,
    // margin: "0 auto",
    // maxWidth: 500,
    // minWidth: 150
  },
}));

export default function ContactPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <div className={classes.parentView}>
            <p className={classes.title}>Contact Me</p>
          </div>
          <form className={classes.form}>
            <TextField
              id="contact-name"
              label="Name"
              name="contact-name"
              variant="outlined"
              fullWidth
              placeholder="Full Name"
              style={{ marginTop: 40 }}
            />
            <TextField
              id="contact-email"
              name="contact-email"
              label="Email"
              variant="outlined"
              fullWidth
              placeholder="Email ID"
              style={{ marginTop: 40 }}
            />
            <TextField
              id="contact-message"
              name="contact-message"
              label="Message"
              variant="outlined"
              fullWidth
              placeholder="Feel free to say anything!"
              multiline
              rows={6}
              style={{ marginTop: 40 }}
            />
            <Button
              variant="contained"
              color="secondary"
              className={classes.btn}
              style={{ marginTop: 40 }}
              size="large"
            >
              Submit
            </Button>
          </form>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
}
