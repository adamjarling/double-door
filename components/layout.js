import React from "react";
import PropTypes from "prop-types";
import Navbar from "components/navbar";
import { Box } from "@chakra-ui/react";

function Layout({ children }) {
  return (
    <Box>
      <Navbar />
      <main>{children}</main>
    </Box>
  );
}

Layout.propTypes = {};

export default Layout;
