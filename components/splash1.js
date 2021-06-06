import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Image } from "@chakra-ui/react";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import ParallaxBannerChildren from "components/ParallaxBannerChildren";

function Splash1(props) {
  return (
    <ParallaxBanner
      layers={[
        {
          amount: 0.2,
          image: "images/pumpkins-2400px.jpg",
        },
      ]}
      style={{ height: "100vh" }}
    >
      <ParallaxBannerChildren>
        <Container display="flex" flexDirection="column" alignItems="center">
          <Image
            boxSize={{ base: "150px", sm: "130px", lg: "150px" }}
            src="images/doubledoor_logo_red.png"
            alt="Double Door logo"
          />
          <Box pt={{ base: 5, lg: 5 }}>
            <Image src="images/movin-uptown.png" alt="Moving on Uptown" />
          </Box>
        </Container>
      </ParallaxBannerChildren>
    </ParallaxBanner>
  );
}

Splash1.propTypes = {};

export default Splash1;
