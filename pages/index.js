import { Box, Center, Container, Image, Link } from "@chakra-ui/react";

import ContactSplash from "components/contact/splash";
import FollowUs from "components/follow-us";
import Fonts from "components/fonts";
import Head from "next/head";
import Layout from "components/layout";
import MiddleText from "components/middle-text";
import { ParallaxProvider } from "react-scroll-parallax";
import Splash1 from "components/splash1";
import Splash2 from "components/splash2";
import Splash3 from "components/splash3";
import SplashHistory from "components/splash-history";
import SundayJams from "components/sunday-jams";

export default function Home() {
  return (
    <ParallaxProvider>
      <Layout>
        <Fonts />
        <Head>
          <title>Double Door</title>
        </Head>
        <Splash1 />

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

        <Container mb={12}>
          <Center>
            <Link
              href="https://www.cbsnews.com/chicago/news/double-door-new-home-uptown-wilson-theater/"
              isExternal
            >
              <Image src="/images/cbs-news-promo.png" alt="CBS News promo" />
            </Link>
          </Center>
        </Container>

        <SplashHistory />
        <MiddleText>
          <Box as="span" color="brand.pink.500" fontFamily="Gotham-bold">
            The Double Door will soon reopen in the Uptown neighborhood of
            Chicago.
          </Box>{" "}
          Joining the city’s original entertainment district, Double Door brings
          new life to an over 100-year-old vaudeville theater as a place for
          fans to meet and watch some of the city’s best live music.{" "}
        </MiddleText>
        <FollowUs />
        <ContactSplash />
      </Layout>
    </ParallaxProvider>
  );
}
