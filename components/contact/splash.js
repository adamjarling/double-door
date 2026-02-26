import React from "react";
import {
  Box,
  Container,
  Flex,
  Link,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Parallax } from "react-scroll-parallax";
import DDLogo from "public/images/double-door-logo.svg";
import BigButton from "components/big-button";
import Obfuscate from "react-obfuscate";

export default function ContactSplash() {
  const logoSize = useBreakpointValue({ base: "200px", md: "220px" });

  return (
    <Box as="section" py={20} bg="brand.pink.500" id="contact-splash">
      <Container maxW="container.lg">
        <Flex direction="column" alignItems="center">
          <VStack spacing="6">
            <Box>
              <DDLogo width={logoSize} />
            </Box>
            <Obfuscate
              email="sean@doubledoor.com"
              headers={{
                subject: "Website contact form",
              }}
            >
              Email the Double Door
            </Obfuscate>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
}
