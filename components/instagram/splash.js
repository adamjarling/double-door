import React from "react";
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import { socialMediaLinks } from "global-vars";

const button = {
  rest: { scale: 1 },
  hover: { scale: 0.9 },
  pressed: { scale: 0.95 },
};

const NavMotionLink = ({ href = "#", children }) => (
  <motion.div
    variants={button}
    initial="rest"
    whileHover="hover"
    whileTap="pressed"
  >
    <Link href={href} isExternal colorScheme="brand.yellow">
      {children}
    </Link>
  </motion.div>
);

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
            <NavMotionLink href={socialMediaLinks.facebook}>
              <FaFacebook />
            </NavMotionLink>
            <NavMotionLink href={socialMediaLinks.instagram}>
              <FaInstagramSquare />
            </NavMotionLink>
            <NavMotionLink href={socialMediaLinks.twitter}>
              <FaTwitterSquare />
            </NavMotionLink>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
