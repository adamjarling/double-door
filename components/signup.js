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
  Input,
} from "@chakra-ui/react";

function Signup(props) {
  return (
    <Container py="5rem">
      <Flex>
        <FormControl id="email">
          <FormLabel>Sign up for our email list</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
      </Flex>
    </Container>
  );
}

Signup.propTypes = {};

export default Signup;
