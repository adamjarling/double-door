import { Box } from "@chakra-ui/react";
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

        <Splash2 />



        <MiddleText>
          It has been a long road. We want to share an update, albeit a painful
          one for our artists and supporters. The opening of Double Door in the
          Uptown Wilson Theatre location as previously announced is not moving
          forward. Staying true to what made Double Door Double Door matters.{" "}
          <Box as="span" color="brand.pink.500" fontFamily="Gotham-bold">
            This isn&apos;t an ending &mdash; it&apos;s a pivot.
          </Box>{" "}
          We&apos;re actively exploring other locations and opportunities that
          better align with our vision. This is all in an effort to keep the
          heart and soul of music and the Double Door moving forward.
        </MiddleText>

        <Splash3 />
        <MiddleText>
          In the meantime, we&apos;re keeping the brand alive through pop-ups,
          collaborations, and special moments. Our first step is a collaboration
          with{" "}
          <Box as="span" color="brand.pink.500" fontFamily="Gotham-bold">
            Gallery Cabaret in Bucktown.
          </Box>{" "}
          For almost 40 years Gallery Cabaret has been a haven for artists and
          musicians looking to showcase their craft in an eclectic neighborhood
          setting. We are updating the sound, the music calendar, and the
          overall vibe that made Double Door the best place to see music &mdash;
          but more importantly, to be part of what makes Chicago&apos;s scene
          the best in the country. We will be reopening the bar on March 1st.
          Come and see us at 2020 N. Oakley starting at 5 pm. We&apos;ll have
          music, booze, laughs, and good times! We hope you&apos;ll stay with
          us, follow along, and be part of what comes next.{" "}
          <Box as="span" color="brand.pink.500" fontFamily="Gotham-bold">
            Double Door Rocks!
          </Box>
        </MiddleText>
        <FollowUs />
        <ContactSplash />
      </Layout>
    </ParallaxProvider>
  );
}
