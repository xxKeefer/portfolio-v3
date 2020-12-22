import React from "react";
import { Slide, useScrollTrigger } from "@material-ui/core";

const ScrollHide = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default ScrollHide;
