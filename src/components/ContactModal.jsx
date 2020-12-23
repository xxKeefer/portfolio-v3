import React, { useState, forwardRef } from "react";
import { DialogTitle, Hidden } from "@material-ui/core";
import { Button, Slide, Dialog } from "@material-ui/core";
import { ModalHeader, DisplayHeader, SocialIcons } from "./index";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";

const Transition = forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ContactModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        size="large"
        endIcon={<FaIcon icon={["fas", "hand-sparkles"]} />}
        onClick={() => {
          setOpen(true);
        }}
      >
        Say Hi
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <Hidden xsDown>
            <DisplayHeader
              title={{
                pre: "Take these for when",
                accent: "you need me.",
                etc: "",
              }}
              subtitle="You never know when you're going to need a wizard."
            />
          </Hidden>
          <Hidden smUp>
            <ModalHeader
              title={{
                pre: "Take these for when",
                accent: "you need me.",
                etc: "",
              }}
              subtitle="You never know when you're going to need a wizard."
            />
          </Hidden>
          <SocialIcons />
        </DialogTitle>
      </Dialog>
    </>
  );
};

export default ContactModal;
