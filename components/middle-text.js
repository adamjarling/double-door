import React from "react";
import PropTypes from "prop-types";
import { Box, Container } from "@chakra-ui/react";

function MiddleText({ children }) {
  return (
    <Container textAlign="center">
      <Box py={20} textAlign="justify">
        {children}
      </Box>
    </Container>
  );
}

MiddleText.propTypes = {};

export default MiddleText;
