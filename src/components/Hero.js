import React from "react";
import Header from "./Header";
import Banner from "./Banner";

import { Container, makeStyles } from "@material-ui/core";
import bg from "../assets/BG.png";

const useStyles = makeStyles((theme) => ({
  hero: {
    minHeight: 866,
    background: `center / cover no-repeat url(${bg})`,
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <section className={classes.hero}>
      <Container>
        <Header />
        <Banner />
      </Container>
    </section>
  );
};

export default Hero;
