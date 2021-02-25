import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import logo from "../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  logoWrapper: {
    marginLeft: "6%",
  },
  logo: {
    minWidth: 42,
    [theme.breakpoints.up("lg")]: {
      minWidth: 62,
    },
  },
}));

const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.logoWrapper}>
      <Link to="/">
        <img src={logo} className={classes.logo} alt="brand logo" />
      </Link>
    </div>
  );
};

export default Logo;
