import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { navMenu } from "../utils";

const useStyles = makeStyles((theme) => ({
  nav: {},
  lists: {
    display: "flex",
    marginLeft: "2.0075rem",
  },
  list: {
    marginLeft: "2rem",
    "&:first-child": {
      marginLeft: 0,
    },
    fontWeight: 700,
    lineHeight: 2,
    fontSize: "0.875rem",
  },
}));

const Nav = () => {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <ul className={classes.lists}>
        {Object.keys(navMenu).map((m) => (
          <li key={m} style={{ listStyle: "none" }} className={classes.list}>
            <Link
              to={navMenu[m]}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {m}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
