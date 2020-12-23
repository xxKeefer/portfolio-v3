import React from "react";
import clsx from "clsx";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  title: {
    fontFamily: "Lobster",
    fontSize: 32,
    marginBlock: 0,
    display: "inline-block",
    marginRight: 6,
  },
  accent: { color: "#ff9300" },
  subtitle: {
    fontSize: 14,
    marginBlock: 10,
  },
});

const ModalHeader = ({ title, subtitle }) => {
  // const { pre, accent, etc } = title;
  const classes = useStyles();
  return (
    <>
      {title.pre && (
        <Typography className={classes.title} variant="h1" gutterBottom>
          {title.pre}
        </Typography>
      )}
      <Typography
        className={clsx(classes.title, classes.accent)}
        variant="h1"
        gutterBottom
      >
        {title.accent}
      </Typography>
      <Typography className={classes.title} variant="h1" gutterBottom>
        {title.etc}
      </Typography>
      <Typography className={classes.subtitle} variant="h2" gutterBottom>
        {subtitle}
      </Typography>
    </>
  );
};

export default ModalHeader;
