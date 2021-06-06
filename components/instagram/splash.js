import React from "react";
import { Box, Center, Container, Flex, Heading, Stack } from "@chakra-ui/react";
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function InstagramSplash() {
  return (
    <Box as="section" py={20} bg="gray.300">
      <Container>
        <Flex direction="column" alignItems="center">
          <Center>
            <Heading as="h2" size="2xl" fontFamily="Phosphate">
              Follow{" "}
              <Box display="inline-block" color="brand.blue.500">
                Us
              </Box>
            </Heading>
          </Center>
          <Stack
            direction="row"
            alignItems="center"
            bg="brand.pink.500"
            padding={4}
            mt={2}
            fontSize="6xl"
            color="black"
          >
            <FaFacebook />
            <FaInstagramSquare />
            <FaTwitterSquare />
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
