import React from "react";
import { Box, Container, Image } from "@chakra-ui/react";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import ParallaxBannerChildren from "components/ParallaxBannerChildren";

function Splash2(props) {
  return (
    <ParallaxBanner
      layers={[
        {
          amount: 0.2,
          image: "images/pg2-2400px.jpg",
        },
      ]}
      style={{ height: "100vh" }}
    >
      <ParallaxBannerChildren>
        <Container display="flex" justifyContent="center">
          <Image src="images/legendary-venue.png" />
        </Container>
      </ParallaxBannerChildren>
    </ParallaxBanner>
  );
}

Splash2.propTypes = {};

export default Splash2;
