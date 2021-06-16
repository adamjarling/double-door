import React from "react";
import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import ContactBox from "components/contact/box";
import EmailButton from "components/contact/email-button";
import { Parallax } from "react-scroll-parallax";
import DDLogo from "public/images/double-door-logo.svg";

export default function ContactSplash() {
  const logoSize = useBreakpointValue({ base: "200px", md: "220px" });

  return (
    <Box as="section" py={20} bg="brand.pink.500" id="contact-splash">
      <Container maxW="container.lg">
        <Flex direction="column" alignItems="center">
          <Parallax y={[-20, 20]} tagOuter="figure">
            <Box mb="40px">
              <DDLogo width={logoSize} />
            </Box>
          </Parallax>

          <ContactBox>
            <Box>
              <Link href="mailto:info@doubledoor.com">info@doubledoor.com</Link>
            </Box>

            <EmailButton mailTo="info@doubledoor.com" />
          </ContactBox>
          {/* <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing="20px">
            <ContactBox>
              <Heading as="h3" size="md">
                Sean Mulroney
              </Heading>
              <Text>Owner</Text>
              <Text>sean@doubledoor.com</Text>
              <Text>312-371-3197</Text>
              <EmailButton mailTo="sean@doubledoor.com" />
            </ContactBox>
            <ContactBox>
              <Heading as="h3" size="md">
                Pete Bruce
              </Heading>
              <Text>Owner</Text>
              <Text>pete@doubledoor.com</Text>
              <Text>312-203-2264</Text>
              <EmailButton mailTo="pete@doubledoor.com" />
            </ContactBox>
            <ContactBox>
              <Heading as="h3" size="md">
                Julie Darling
              </Heading>
              <Text>Marketing</Text>
              <Text>julie@doubledoor.com</Text>
              <Text>312-217-0380</Text>
              <EmailButton mailTo="julie@doubledoor.com" />
            </ContactBox>
            <ContactBox>
              <Heading as="h3" size="md">
                Joel Morales
              </Heading>
              <Text>Public Relations</Text>
              <Text>joel.morales@ext54.com</Text>
              <Text>312-834-4054</Text>
              <EmailButton mailTo="joel.morales@ext54.com" />
            </ContactBox>
          </SimpleGrid> */}
        </Flex>
      </Container>
    </Box>
  );
}
