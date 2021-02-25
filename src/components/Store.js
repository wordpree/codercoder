import React from "react";
import { makeStyles } from "@material-ui/core";
import google from "../assets/google.png";
import apple from "../assets/apple.png";

const useStyles = makeStyles((theme) => ({
  play: {
    marginLeft: "auto",
    marginRight: "4%",
    display: "flex",
    "&>div": {
      height: 40,
      width: 135,
      cursor: "pointer",
    },
  },
  google: {
    background: `center / cover no-repeat url(${google})`,
    marginRight: "0.804375rem",
  },
  apple: {
    background: `center / cover no-repeat url(${apple})`,
  },
}));

const Store = () => {
  const classes = useStyles();
  return (
    <div className={classes.play}>
      <div className={classes.google} />
      <div className={classes.apple} />
    </div>
  );
};

export default Store;
