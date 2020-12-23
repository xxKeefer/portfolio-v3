import React, { useState } from "react";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
import { IconButton, Grid, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const SocialIcons = () => {
  const [snack, setSnack] = useState(false);

  const closeSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnack(false);
  };

  return (
    <Grid container spacing={0} justify="space-evenly">
      <Grid item xs={"auto"}>
        <IconButton
          color="primary"
          size="medium"
          onClick={() => {
            window.open("https://www.linkedin.com/in/xxkeefer/", "_blank");
          }}
        >
          <FaIcon icon={["fab", "linkedin"]} />
        </IconButton>
      </Grid>
      <Grid item xs={"auto"}>
        <IconButton
          color="primary"
          size="medium"
          onClick={() => {
            window.open("https://github.com/xxKeefer", "_blank");
          }}
        >
          <FaIcon icon={["fab", "github"]} />
        </IconButton>
      </Grid>
      <Grid item xs={"auto"}>
        <IconButton
          color="primary"
          size="medium"
          onClick={() => {
            window.open("https://twitter.com/xxKeefer", "_blank");
          }}
        >
          <FaIcon icon={["fab", "twitter"]} />
        </IconButton>
      </Grid>
      <Grid item xs={"auto"}>
        <IconButton
          color="primary"
          size="medium"
          onClick={() => {
            window.open(
              "https://docs.google.com/document/d/1MEH7ZHBg43yKsd5umSbBkjGQe5qkw_lELj20Xgr5Qkg/edit?usp=sharing",
              "_blank"
            );
          }}
        >
          <FaIcon icon={["fas", "file-download"]} />
        </IconButton>
      </Grid>
      <Grid item xs={"auto"}>
        {" "}
        <IconButton
          color="primary"
          size="medium"
          onClick={() => {
            navigator.clipboard.writeText("xxkeefer.code@gmail.com");
            setSnack(true);
          }}
        >
          <FaIcon icon={["fas", "at"]} />
        </IconButton>
        <Snackbar open={snack} autoHideDuration={3000} onClose={closeSnack}>
          <MuiAlert onClose={closeSnack} severity="success">
            Email copied to clipboard!
          </MuiAlert>
        </Snackbar>
      </Grid>
    </Grid>
  );
};

export default SocialIcons;
