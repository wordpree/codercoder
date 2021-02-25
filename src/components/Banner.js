import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import phone from "../assets/iPhoneX.png";

const useStyles = makeStyles((theme) => ({
  banner: {
    display: "flex",
    marginTop: "6rem",
    position: "relative",
    paddingLeft: "8.5%",
    justifyContent: "space-around",
  },
  article: {
    flex: "1 1 auto",
    paddingTop: "4rem",
  },
  title: {
    fontWeight: 800,
    lineHeight: "98px",
    fontSize: "4.5rem",
    margin: 0,
  },
  phone: {
    background: `center / cover no-repeat url(${phone})`,
    width: "17.441875rem",
    height: "37.7675rem",
    position: "absolute",
    right: "8%",
  },
  btn: {
    fontSize: "1.25rem",
    lineHeight: "30px",
    fontWeight: 700,
    textTransform: "capitalize",
    marginTop: "2rem",
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <section className={classes.banner}>
      <article className={classes.article}>
        <h1 className={classes.title}>
          Organise projects.
          <br />
          Get more done.
        </h1>
        <Button variant="contained" color="primary" className={classes.btn}>
          Get Started
        </Button>
      </article>
      <div className={classes.phone} />
    </section>
  );
};

export default Banner;
