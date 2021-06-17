import React from "react";
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { socialMediaLinks } from "global-vars";
import TwitterIcon from "public/images/social-icons_TW.svg";
import FBIcon from "public/images/social-icons_FB.svg";
import InstagramIcon from "public/images/social-icons_IG.svg";

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
    <Link href={href} isExternal>
      {children}
    </Link>
  </motion.div>
);

export default function InstagramSplash() {
  const iconSize = useBreakpointValue({
    base: "70px",
    sm: "80px",
    md: "90px",
  });

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
            padding={4}
            mt={2}
            fontSize="6xl"
            color="black"
            spacing="24px"
          >
            <NavMotionLink href={socialMediaLinks.facebook}>
              <FBIcon width={iconSize} />
            </NavMotionLink>
            <NavMotionLink href={socialMediaLinks.instagram}>
              <InstagramIcon width={iconSize} />
            </NavMotionLink>
            <NavMotionLink href={socialMediaLinks.twitter}>
              <TwitterIcon width={iconSize} />
            </NavMotionLink>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
