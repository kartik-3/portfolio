import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./home";
import AboutPage from "./about";
import ProjectsPage from "./projects";
import ContactPage from "./contact";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bg: {
    background: "#FFE0B2",
    color: "#000000",
  },
  title: {
    flexGrow: 1,
    marginLeft: 50,
    fontSize: 27,
    fontWeight: 700,
  },
  navigation: {
    marginRight: 50,
  },
  btn: {
    fontSize: 17,
  },
  link: {
      color: "#000000",
      textDecoration: "none"
  }
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.bg}>
        <Router>
          <Toolbar>
            <p className={classes.title}>
              <Link className={classes.link} to="/">Kartik Sehgal</Link>
            </p>
            <div className={classes.navigation}>
              {/* <Button className={classes.btn}>
                <Link className={classes.link} to="/about">About</Link>
              </Button> */}
              <Button className={classes.btn}>
                <Link className={classes.link} to="/projects">Projects</Link>
              </Button>
              <Button className={classes.btn}>
                <Link className={classes.link} to="/contact">Contact</Link>
              </Button>
            </div>
          </Toolbar>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            {/* <Route exact path="/about" component={AboutPage}></Route> */}
            <Route exact path="/projects" component={ProjectsPage}></Route>
            <Route exact path="/contact" component={ContactPage}></Route>
          </Switch>
        </Router>
      </AppBar>
    </div>
  );
};

export default NavBar;
