import React from "react";
import { Box, HStack, Link, VStack, SimpleGrid } from "@chakra-ui/react";
import BigButton from "./big-button";
import { AspectRatio } from "@chakra-ui/react";
import { FaAmazon, FaApple, FaYoutube, FaSpotify } from "react-icons/fa";
import PlaySundayJams from "./play-sunday-jams";

function SundayJams(props) {
  const btnRef = React.useRef();

  return (
    <>
      <Box textAlign="center">
        <Box paddingTop={16} fontSize="2xl">
          Subscribe to the Double Door podcast:
        </Box>
        <HStack
          spacing="6"
          marginTop="2"
          marginBottom="8"
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
        {/* <PodCastWrapper src={podcasts[0]} /> */}
      </Box>

      <SimpleGrid columns={[1, 2, 2, 2, 3]} spacing={10}>
        <AspectRatio ratio={16 / 9}>
          <iframe
            src="https://open.spotify.com/embed/episode/4ypUFChQGMfKkGWiCdAqIu?utm_source=generator"
            width="100%"
            height="232"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </AspectRatio>
        <AspectRatio ratio={16 / 9}>
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fcarconcarne%2Fvideos%2F599699664437626%2F&show_text=false&width=560&t=0"
            scrolling="no"
            frameBorder={0}
            allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </AspectRatio>
        <Box>
          <iframe
            src="https://open.spotify.com/embed/episode/4dVHNJK0Aiso3MgspQoWEd?utm_source=generator&theme=0"
            width="100%"
            height="232"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Box>
        <Box>
          <iframe
            src="https://open.spotify.com/embed/episode/1uSJv3KdaucAwqPwJNf5MP?utm_source=generator"
            width="100%"
            height="232"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Box>
        <Box>
          <iframe
            src="https://open.spotify.com/embed/episode/4P9zvgUGqHOytFGgEDUN9K?utm_source=generator&theme=0"
            width="100%"
            height="232"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Box>
        <Box>
          <iframe
            src="https://open.spotify.com/embed/episode/4z4V36odRhvcTj3DeXEjE6?utm_source=generator"
            width="100%"
            height="232"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Box>
        <Box>
          <iframe
            src="https://open.spotify.com/embed/episode/3YaiSfOfOFRHcgY4cDR9og?utm_source=generator"
            width="100%"
            height="232"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Box>
        <Box>
          <iframe
            src="https://open.spotify.com/embed/episode/7llxK8XH9j5KSFXYD0cO8k?utm_source=generator"
            width="100%"
            height="232"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Box>
        <Box>
          <iframe
            src="https://open.spotify.com/embed/episode/0SLcnLzQNM5FVVNyKUeZc4?utm_source=generator"
            width="100%"
            height="232"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Box>
        <AspectRatio ratio={16 / 9}>
          <iframe
            src="https://www.youtube.com/embed/k8b5ZhP4-3U"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </AspectRatio>
        <Box>
          <iframe
            src="https://open.spotify.com/embed/episode/6fRmczspYsezAUCcHkCoiG?utm_source=generator"
            width="100%"
            height="232"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Box>
      </SimpleGrid>

      <VStack spacing="10" py={24}>
        <PlaySundayJams />
        <Box marginBottom={12}>
          <BigButton
            ref={btnRef}
            href="https://forms.gle/yoN4NAZfZzkHSe7Y8"
            isExternal
          >
            RSVP to attend Sunday Jams
          </BigButton>
        </Box>
      </VStack>
    </>
  );
}

SundayJams.propTypes = {};

export default SundayJams;
