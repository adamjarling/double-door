import React from "react";
import PropTypes from "prop-types";
import Navbar from "components/navbar";
import { Box } from "@chakra-ui/react";
import logo from "public/images/doubledoor_logo_red.png";
import Head from "next/head";

// Vercel specific
const getAbsoluteURL = (path) => {
  const baseURL = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
  return baseURL + path;
};

function Layout({ children }) {
  // Open Graph & Twitter images need a full URL including domain
  const fullImageURL = getAbsoluteURL(logo.src);

  return (
    <Box>
      <Head>
        <link rel="icon" href="/images/doubledoor_logo_red.png" />
        <meta property="og:image" content={fullImageURL} />
        <meta property="og:url" content="https://doubledoor.com" />
        <meta property="og:title" content="Double Door Music Venue Chicago" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Double Door has been bringing the best in live music to Chicago since 1994. This isn’t an ending — it’s a pivot. We’re keeping the brand alive through pop-ups and collaborations. Our first step is a collaboration with Gallery Cabaret in Bucktown."
        />
        <meta name="twitter:image" content={fullImageURL} />
      </Head>
      {/* <Navbar /> */}
      <main>{children}</main>
    </Box>
  );
}

Layout.propTypes = {};

export default Layout;
