import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Layout from "components/layout";
import Splash1 from "components/splash1";
import Splash2 from "components/splash2";
import Splash3 from "components/splash3";
import SplashHistory from "components/splash-history";
import SundayJams from "components/sunday-jams";
import MiddleText from "components/middle-text";
import Fonts from "components/fonts";
import FollowUs from "components/follow-us";
import { ParallaxProvider } from "react-scroll-parallax";
import ContactSplash from "components/contact/splash";

export default function Home() {
  return (
    <Layout>
      <Fonts />
      <Head>
        <title>Double Door - Podcasts</title>
      </Head>
    </Layout>
  );
}
