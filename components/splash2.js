import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Image } from "@chakra-ui/react";
import Hero from "components/hero";

function Splash2(props) {
  return (
    <Hero bgImage={"images/pg2-2400px.jpg"}>
      <Container>
        <Image src="images/legendary-venue.png" />
      </Container>
    </Hero>
  );
}

Splash2.propTypes = {};

export default Splash2;
