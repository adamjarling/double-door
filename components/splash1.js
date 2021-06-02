import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Image } from "@chakra-ui/react";
import Hero from "components/hero";

function Splash1(props) {
  return (
    <Hero bgImage={"images/pumpkins-2400px.jpg"}>
      <Container
        //maxW="container.md"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Image
          boxSize={{ base: "220px", sm: "110px", md: "130px", lg: "150px" }}
          src="images/doubledoor_logo_red.png"
          alt="Double Door logo"
        />
        <Box pt={{ base: 3, lg: 5 }}>
          <Image src="images/movin-uptown.png" alt="Moving on Uptown" />
        </Box>
      </Container>
    </Hero>
  );
}

Splash1.propTypes = {};

export default Splash1;
