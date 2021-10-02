import React from "react";
import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import BigButton from "./big-button";
import Obfuscate from "react-obfuscate";

function SundayJams(props) {
  return (
    <Container pt="8" pb="12">
      <VStack spacing="8">
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
      </VStack>
    </Container>
  );
}

SundayJams.propTypes = {};

export default SundayJams;
