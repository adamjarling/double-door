import React from "react";
import PropTypes from "prop-types";
import { Container, Image } from "@chakra-ui/react";
import { ParallaxBanner } from "react-scroll-parallax";
import ParallaxBannerChildren from "components/ParallaxBannerChildren";

function Splash3(props) {
  return (
    <ParallaxBanner
      layers={[
        {
          amount: 0.2,
          image: "images/RollingStones_431.jpg",
        },
      ]}
      style={{ height: "100vh" }}
    >
      <ParallaxBannerChildren>
        <Container display="flex" justifyContent="center">
          <Image src="images/will-be-reborn.png" alt="Will be reborn" />
        </Container>
      </ParallaxBannerChildren>
    </ParallaxBanner>
  );
}

Splash3.propTypes = {};

export default Splash3;
