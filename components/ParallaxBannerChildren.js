import React from "react";
import { Box } from "@chakra-ui/react";

function ParallaxBannerChildren({ children }) {
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      display="flex"
      flexFlow="row wrap"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  );
}

ParallaxBannerChildren.propTypes = {};

export default ParallaxBannerChildren;
