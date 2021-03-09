import React from "react";
import { ChevronDown } from "mdi-material-ui";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  btn: {
    fontWeight: 700,
    lineHeight: 2,
    fontSize: "0.875rem",
    textTransform: "capitalize",
    marginLeft: 26,
  },
}));

const MoreBtn = () => {
  const classes = useStyles();
  return (
    <Button className={classes.btn} endIcon={<ChevronDown />} size="large">
      More
    </Button>
  );
};

export default MoreBtn;
