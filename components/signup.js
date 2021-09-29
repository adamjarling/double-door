import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Link,
} from "@chakra-ui/react";

function Signup(props) {
  return (
    <Container py="5rem">
      <Flex alignItems="center" justifyContent="center">
        <Link
          href="http://eepurl.com/-kh_j"
          isExternal
          textTransform="uppercase"
          background={"brand.yellow.500"}
          padding="5"
          textColor="black"
          fontWeight="bold"
          fontSize={{ base: "md", md: "2xl" }}
        >
          Sign up for the Mailing List
        </Link>
      </Flex>
    </Container>
  );
}

Signup.propTypes = {};

export default Signup;
