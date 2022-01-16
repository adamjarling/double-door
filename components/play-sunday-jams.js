import React from "react";
import Obfuscate from "react-obfuscate";
import { Box } from "@chakra-ui/react";

export default function PlaySundayJams() {
  return (
    <Box textAlign="center">
      Hey bands, want to play Sunday Jams at the Double Door? <br />
      Email{" "}
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
  );
}
