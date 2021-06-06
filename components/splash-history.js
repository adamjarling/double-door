import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Image } from "@chakra-ui/react";
import Hero from "components/hero";
import { ParallaxBanner } from "react-scroll-parallax";
import ParallaxBannerChildren from "components/ParallaxBannerChildren";

function SplashHistory(props) {
  return (
    <ParallaxBanner
      layers={[
        {
          amount: 0.2,
          image: "images/Theater_new_IMG_1810.jpg",
        },
      ]}
      style={{ height: "100vh" }}
    >
      <ParallaxBannerChildren>
        <Container>
          <Image src="images/making-history.png" alt="Making history" />
        </Container>
      </ParallaxBannerChildren>
    </ParallaxBanner>
  );
}

SplashHistory.propTypes = {};

export default SplashHistory;
