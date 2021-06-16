import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Image, useBreakpointValue } from "@chakra-ui/react";
import Hero from "components/hero";
import { ParallaxBanner } from "react-scroll-parallax";
import ParallaxBannerChildren from "components/ParallaxBannerChildren";

function SplashHistory(props) {
  const bgImageSize = useBreakpointValue({
    base: "50vh",
    md: "80vh",
    lg: "90vh",
    xl: "100vh",
  });
  return (
    <ParallaxBanner
      layers={[
        {
          amount: 0.2,
          image: "images/Theater_new_IMG_1810.jpg",
        },
      ]}
      style={{ height: bgImageSize }}
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
