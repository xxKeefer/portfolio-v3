import React, { useState } from "react";
import clsx from "clsx";
import { Grid, Typography, IconButton } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Collapse,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((style) => ({
  card: { height: "auto" },
  project: {
    textAlign: "center",
    color: "#86deb7",
    fontFamily: "Poppins",
    fontWeight: 700,
    textTransform: "uppercase",
  },
  stack: { textAlign: "center", color: "#ff9300", fontFamily: "Poppins" },
  details: { textAlign: "center", color: "#d4d4d4", fontFamily: "Poppins" },
  picture: {
    width: "auto",
    height: "290px",
    objectFit: "cover",
  },
  icon: { color: "#d4d4d4" },
  desc: { textAlign: "justify" },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: style.transitions.create("transform", {
      duration: style.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const ProjectCard = ({
  project,
  stack,
  details,
  description,
  imgSrc,
  links,
}) => {
  const { www, github } = links;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  return (
    <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.project} variant="h5">
            {project}
          </Typography>
          <Typography className={classes.stack} variant="h6">
            {stack}
          </Typography>
          <Typography className={classes.details} variant="body1">
            {details}
          </Typography>
          <CardActions disableSpacing>
            <IconButton
              color="primary"
              aria-label="view on github"
              disabled={!github}
              onClick={() => {
                github && window.open(github, "_blank");
              }}
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="view on the web"
              disabled={!www}
              onClick={() => {
                www && window.open(www, "_blank");
              }}
            >
              <FontAwesomeIcon icon={["fas", "globe"]} />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={() => {
                setExpanded(!expanded);
              }}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <FontAwesomeIcon
                className={classes.icon}
                icon={["fas", "caret-square-down"]}
              />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography className={classes.desc} variant="body1">
                {description}
              </Typography>
            </CardContent>
          </Collapse>
          <CardMedia
            className={classes.picture}
            image={imgSrc}
            title={`picture of ${project}`}
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProjectCard;
