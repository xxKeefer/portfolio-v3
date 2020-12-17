import React from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    fontFamily: "Lobster",
    fontSize: 64,
    marginBlock: 20,
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 15,
  },
  grid: { marginInline: "auto" },
  headline: {
    marginLeft: 10,
  },
});

const DisplaySection = ({ title, subtitle, children }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.headline}>
        <Typography className={classes.root} variant="h1" gutterBottom>
          {title}
        </Typography>
        <Typography className={classes.subtitle} variant="h2" gutterBottom>
          {subtitle}
        </Typography>
      </Box>
      <Grid
        className={classes.grid}
        container
        spacing={2}
        alignContent="space-around"
        alignItems="stretch"
      >
        {children}
      </Grid>
    </>
  );
};

export default DisplaySection;
