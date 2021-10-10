import React from "react";
import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import BigButton from "./big-button";
import Obfuscate from "react-obfuscate";
import { AspectRatio } from "@chakra-ui/react";

function SundayJams(props) {
  return (
    <Container pt="8" pb="12">
      <VStack spacing="8">
        <Box position="relative" paddingBottom="56.25%" h="0" width="100%">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/k8b5ZhP4-3U"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
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
          <BigButton href="https://forms.gle/yoN4NAZfZzkHSe7Y8" isExternal>
            RSVP to attend Sunday Jams
          </BigButton>
        </Box>
        <Box>
          <iframe
            title="Libsyn Player"
            style={{ border: "none" }}
            src="//html5-player.libsyn.com/embed/episode/id/20470658/height/90/theme/custom/thumbnail/yes/direction/forward/render-playlist/no/custom-color/000000/"
            height="90"
            width="100%"
            scrolling="no"
            allowFullScreen
          ></iframe>
        </Box>
      </VStack>
    </Container>
  );
}

SundayJams.propTypes = {};

export default SundayJams;