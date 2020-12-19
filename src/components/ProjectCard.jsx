import React from "react";
import { Typography } from "@material-ui/core";
import { Grid, Card, CardContent, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  card: { height: "100%" },
  project: {
    textAlign: "center",
    color: "#ff9300",
    fontFamily: "Poppins",
    fontWeight: 700,

    textTransform: "uppercase",
  },
  stack: { textAlign: "center", color: "#86deb7", fontFamily: "Poppins" },
  details: { textAlign: "center", color: "#d4d4d4", fontFamily: "Poppins" },
  picture: {
    width: "auto",
    height: "290px",
    objectFit: "cover",
  },
  desc: { textAlign: "justify" },
});

const ProjectCard = ({ project, stack, details, description, imgSrc }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
      <Card className={classes.card}>
        <CardContent>
          <Grid container spacing={3} alignContent="center">
            <Grid item xs={12}>
              <Typography className={classes.project} variant="h5">
                {project}
              </Typography>
              <Typography className={classes.stack} variant="h6">
                {stack}
              </Typography>
              <Typography className={classes.details} variant="body1">
                {details}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <CardMedia
                className={classes.picture}
                image={imgSrc}
                title={`picture of ${project}`}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.desc} variant="body1">
                {description}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProjectCard;
