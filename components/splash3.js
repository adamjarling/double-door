import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Image } from "@chakra-ui/react";
import Hero from "components/hero";

function Splash3(props) {
  return (
    <Hero bgImage={"images/RollingStones_431.jpg"}>
      <Container>
        <Image src="images/will-be-reborn.png" alt="Will be reborn" />
      </Container>
    </Hero>
  );
}

Splash3.propTypes = {};

export default Splash3;
