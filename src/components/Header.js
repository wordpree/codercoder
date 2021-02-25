import React from "react";
import { makeStyles } from "@material-ui/core";
import Logo from "./Logo";
import Nav from "./Nav";
import Store from "./Store";
import MoreBtn from "./MoreBtn";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    minHeight: 72,
    alignItems: "center",
    padding: "1.625em 2em",
  },

  btn: {
    display: "none",
    [theme.breakpoints.up("laptopSm")]: {
      color: "#52319B",
      fontSize: "0.75rem",
      fontWeight: "bold",
      border: "1px solid #8550FC",
      borderRadius: 25,
      minWidth: 108,
      borderWidth: 3,
      display: "inherit",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Logo />
      <Nav />
      <MoreBtn />
      <Store />
    </header>
  );
};

export default Header;
