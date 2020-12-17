import React from "react";
import { Typography } from "@material-ui/core";
import { Grid, Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  card: { width: "100%", height: "100%" },
  title: { textAlign: "center", color: "#ff9300" },
  subtitle: { textAlign: "center", color: "#86deb7", fontFamily: "Poppins" },
  picture: { width: "auto", height: "300px", objectFit: "cover" },
  desc: { textAlign: "justify" },
});

const ContentBanner = ({ title, stack, description, imgSrc }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Card className={classes.card}>
        <Grid container spacing={2} alignItems="stretch" alignContent="stretch">
          <Grid item xs={3}>
            <CardMedia
              className={classes.picture}
              image={imgSrc}
              title={`picture of ${title}`}
            />
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes.title} variant="h4">
              {title}
            </Typography>
            <Typography className={classes.subtitle} variant="h6">
              {stack}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.desc} variant="body1">
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default ContentBanner;
