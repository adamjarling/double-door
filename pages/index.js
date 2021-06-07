import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Layout from "components/layout";
import Splash1 from "components/splash1";
import Splash2 from "components/splash2";
import Splash3 from "components/splash3";
import SplashHistory from "components/splash-history";
import Signup from "components/signup";
import MiddleText from "components/middle-text";
import Fonts from "components/fonts";
import InstagramSplash from "components/instagram/splash";
import { ParallaxProvider } from "react-scroll-parallax";
import ContactSplash from "components/contact/splash";

export default function Home() {
  return (
    <ParallaxProvider>
      <Layout>
        <Fonts />
        <Head>
          <title>Double Door</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Splash1 />
        <Signup />
        <Splash2 />
        <Splash3 />
        <MiddleText>
          <Box as="span" color="brand.pink.500" fontFamily="Gotham-bold">
            Double Door has been bringing the best in live music to Chicago
            since 1994.
          </Box>{" "}
          For over two decades, Double Door called Chicago’s Wicker Park
          neighborhood home as a hub for progressive culture and music.
          Providing the community a place to gather while setting the stage for
          some of music’s most notable artists, including Liz Phair, The
          Smashing Pumpkins, Andrew Bird, Chance The Rapper, The Rolling Stones,
          The Killers, Kanye West, Kings of Leon, John Legend, Sonic Youth, and
          many others.
        </MiddleText>
        <SplashHistory />
        <MiddleText>
          <Box as="span" color="brand.pink.500" fontFamily="Gotham-bold">
            In 2021, the Double Door will reopen in the Uptown neighborhood of
            Chicago.
          </Box>{" "}
          Joining the city’s original entertainment district, Double Door brings
          new life to an over 100-year-old vaudeville theater as a place for
          fans to meet and watch some of the city’s best live music.{" "}
        </MiddleText>
        <InstagramSplash />
        <ContactSplash />
      </Layout>
    </ParallaxProvider>
  );
}
