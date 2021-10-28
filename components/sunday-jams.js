import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Link,
  Text,
  VStack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import BigButton from "./big-button";
import Obfuscate from "react-obfuscate";
import { AspectRatio } from "@chakra-ui/react";
import { FaAmazon, FaApple, FaYoutube, FaSpotify } from "react-icons/fa";

const podcasts = [
  "//html5-player.libsyn.com/embed/episode/id/20772377/height/90/theme/custom/thumbnail/yes/direction/forward/render-playlist/no/custom-color/000000/",
  "//html5-player.libsyn.com/embed/episode/id/20606324/height/90/theme/custom/thumbnail/yes/direction/forward/render-playlist/no/custom-color/000000/",
  "//html5-player.libsyn.com/embed/episode/id/20470658/height/90/theme/custom/thumbnail/yes/direction/forward/render-playlist/no/custom-color/000000/",
];

function PodCastWrapper({ src }) {
  return (
    <iframe
      title="Libsyn Player"
      style={{ border: "none" }}
      src={src}
      height="90"
      width="100%"
      scrolling="no"
      allowFullScreen
    ></iframe>
  );
}

function SundayJams(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Container pt="8" pb="12">
        <VStack spacing="10">
          <Box position="relative" paddingBottom="56.25%" h="0" width="100%">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/k8b5ZhP4-3U"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </Box>
          <Box textAlign="center">
            Hey bands, want to play Sunday Jams at the Double Door? Email{" "}
            <Obfuscate
              email="sean@doubledoor.com"
              headers={{
                bcc: "furbabyferguson@gmail.com",
                subject: "Sunday Jams band submit",
              }}
            >
              Double Door
            </Obfuscate>{" "}
            w/ links to your website, social media, and music/videos.
          </Box>
          <Box marginBottom={12}>
            <BigButton
              ref={btnRef}
              href="https://forms.gle/yoN4NAZfZzkHSe7Y8"
              isExternal
            >
              RSVP to attend Sunday Jams
            </BigButton>
          </Box>
          <Box textAlign="center">
            <Text paddingBottom="2">Podcast Episode #{podcasts.length}</Text>
            <PodCastWrapper src={podcasts[0]} />
            <Box paddingTop="3">Subscribe to the Double Door podcast:</Box>
            <HStack
              spacing="6"
              marginTop="2"
              align="center"
              justify="center"
              fontSize="4xl"
            >
              <Link
                isExternal
                href="https://open.spotify.com/show/3lsLrUeZLIA0kc3F9UlSE8"
              >
                <FaSpotify />
              </Link>
              <Link
                isExternal
                href="https://music.amazon.com/podcasts/2efbf27e-6264-49f9-8f85-240e3e8ffeb6/doubledoor's-podcast"
              >
                <FaAmazon />
              </Link>
              <Link
                isExternal
                href="https://podcasts.apple.com/us/podcast/doubledoors-podcast/id1585848176"
              >
                <FaApple />
              </Link>
              <Link
                isExternal
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9kb3VibGVkb29yLmxpYnN5bi5jb20vcnNz"
              >
                <FaYoutube />
              </Link>
            </HStack>
          </Box>
          <BigButton isBlue onClick={onOpen}>
            View All Podcasts
          </BigButton>
        </VStack>
      </Container>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent bg="black">
          <DrawerCloseButton />
          <DrawerHeader>All Double Door Podcasts</DrawerHeader>

          <DrawerBody>
            <VStack spacing="4">
              {podcasts.map((podcast) => (
                <PodCastWrapper src={podcast} />
              ))}
            </VStack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

SundayJams.propTypes = {};

export default SundayJams;
