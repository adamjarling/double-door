import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Image } from "@chakra-ui/react";
import Hero from "components/hero";

function SplashHistory(props) {
  return (
    <Hero bgImage={"images/Theater_new_IMG_1810.jpg"}>
      <Container>
        <Image src="images/making-history.png" alt="Making history" />
      </Container>
    </Hero>
  );
}

SplashHistory.propTypes = {};

export default SplashHistory;
