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
      </Box>

      <SimpleGrid columns={[1, 2, 2, 2, 3]} spacing={10}>
        <Box>
          <iframe
            src="https://open.spotify.com/embed/episode/3zK7DMGWYEQ66UFgrktzIJ?utm_source=generator"
            width="100%"
            height="232"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Box>
        <Box>
          <iframe
            src="https://open.spotify.com/embed/episode/4xfmqse6oEhkiB8dAMeFyz?utm_source=generator"
            width="100%"
            height="232"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Box>
        <Box>
          <iframe
            src="https://open.spotify.com/embed/episode/4gLvG2MKpyfw68Rd3d6IEl?utm_source=generator"
            width="100%"
            height="232"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Box>
        <AspectRatio ratio={16 / 9}>
          <iframe
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; fullscreen"
            src="https://w3.mp.lura.live/player/prod/v3/anvload.html?key=eyJtIjoiTElOIiwidiI6Ijc0OTMwNzAiLCJhbnZhY2siOiJ2THJvQkE5WkJHM0p3VHZhT2xpYmJ0b1BiNkw0anFKbCIsInNoYXJlTGluayI6Imh0dHBzOi8vd2dudHYuY29tL21vcm5pbmctbmV3cy9jaGljYWdvLXNjZW5lL2Etc25lYWstcGVlay1pbnNpZGUtdGhlLXNvb24tdG8tb3Blbi1kb3VibGUtZG9vci1pbi11cHRvd24vIiwicGx1Z2lucyI6eyJjb21zY29yZSI6eyJjbGllbnRJZCI6IjYwMzY0MzkiLCJjMyI6IndnbnR2LmNvbSIsInNjcmlwdCI6Ii8vdzMubXAubHVyYS5saXZlL3BsYXllci9wcm9kL3YzL3BsdWdpbnMvY29tc2NvcmUvY29tc2NvcmVwbHVnaW4ubWluLmpzIiwidXNlRGVyaXZlZE1ldGFkYXRhIjp0cnVlLCJtYXBwaW5nIjp7InZpZGVvIjp7ImMzIjoid2dudHYuY29tIiwibnNfc3Rfc3QiOiJ3Z24iLCJuc19zdF9wdSI6Ik5leHN0YXIiLCJuc19zdF9nZSI6Ik1vcm5pbmcgTmV3cyIsImNzX3VjZnIiOiIifSwiYWQiOnsiYzMiOiJ3Z250di5jb20iLCJuc19zdF9zdCI6IndnbiIsIm5zX3N0X3B1IjoiTmV4c3RhciIsIm5zX3N0X2dlIjoiTW9ybmluZyBOZXdzIiwiY3NfdWNmciI6IiJ9fX0sImRmcCI6eyJjbGllbnRTaWRlIjp7ImFkVGFnVXJsIjoiaHR0cHM6Ly9wdWJhZHMuZy5kb3VibGVjbGljay5uZXQvZ2FtcGFkL2Fkcz9zej0xeDEwMDAmaXU9JTJGNTY3OCUyRm54LndnbnR2JTJGbW9ybmluZ19uZXdzJTJGY2hpY2Fnb19zY2VuZSZpbXBsPXMmZ2RmcF9yZXE9MSZlbnY9dnAmb3V0cHV0PXZtYXAmdW52aWV3ZWRfcG9zaXRpb25fc3RhcnQ9MSZhZF9ydWxlPTEmZGVzY3JpcHRpb25fdXJsPWh0dHBzJTNBJTJGJTJGd2dudHYuY29tJTJGbW9ybmluZy1uZXdzJTJGY2hpY2Fnby1zY2VuZSUyRmEtc25lYWstcGVlay1pbnNpZGUtdGhlLXNvb24tdG8tb3Blbi1kb3VibGUtZG9vci1pbi11cHRvd24lMkYmdmNvbnA9MiZjdXN0X3BhcmFtcz12aWQlM0Q3NDkzMDcwJTI2Y21zaWQlM0QxOTQ1MjA3JTI2cGlkJTNEMTk0NTIwNyUyNnBlcnNfY2lkJTNEbnhzdHJpYi01LWFydGljbGUtMTk0NTIwNyUyNnZpZGNhdCUzRCUyRm1vcm5pbmdfbmV3cyUyRmNoaWNhZ29fc2NlbmUlMjZib2JfY2slM0QlNUJib2JfY2tfdmFsJTVEJTI2ZF9jb2RlJTNEMSUyNnBhZ2V0eXBlJTNEc3RvcnklMjZwbGF5ZXJ3aWR0aCUzRDgwOSUyNnBsYXllcmhlaWdodCUzRDQ1NSUyNnVwaWQlM0Q1MDkzMjE2Yi00YmYzLTQ3YWYtOTYxNS0zMTg3OTZkMDgwMmUmcHBpZD1mMjAxZmExZS0zZTA3LTRjZWMtYWU2NC00NmEyNTZiYzg2M2YiLCJ2cGFpZE1vZGUiOiJlbmFibGVkIn19LCJuaWVsc2VuIjp7ImFwaWQiOiJQRDJFQzcwNzItMjczMC00QzMyLUIyQTMtQzlBRUU3NzgyNEY0Iiwic2Zjb2RlIjoiZGNyIiwidHlwZSI6ImRjciIsImFwbiI6IkFudmF0byIsImVudmlyb25tZW50IjoicHJvZHVjdGlvbiIsInVzZURlcml2ZWRNZXRhZGF0YSI6dHJ1ZSwibWFwcGluZyI6eyJhZGxvYWR0eXBlIjoyLCJhZE1vZGVsIjoyfSwib3B0T3V0IjpmYWxzZX0sInNlZ21lbnRDdXN0b20iOnsic2NyaXB0IjoiaHR0cHM6Ly9zZWdtZW50LnBzZy5uZXhzdGFyZGlnaXRhbC5uZXQvYW52YXRvLmpzIiwid3JpdGVLZXkiOiJZeG5pM0kxN09LazlLVFVmMVJtbXN5WWVxeEZrRVRvMiIsInBsdWdpbnNMb2FkaW5nVGltZW91dCI6MTJ9LCJnb29nbGVBbmFseXRpY3MiOnsidHJhY2tpbmdJZCI6IlVBLTM0MTMzODg0LTEzIiwiZXZlbnRzIjp7IkFEX1NUQVJURUQiOnsiYWxpYXMiOiJWaWRlby1BZCIsImNhdGVnb3J5IjoiVmlkZW8iLCJsYWJlbCI6IltbVElUTEVdXSJ9LCJWSURFT19TVEFSVEVEIjp7ImFsaWFzIjoiVmlkZW8tUGxheSIsImNhdGVnb3J5IjoiVmlkZW8iLCJsYWJlbCI6IltbVElUTEVdXSJ9LCJWSURFT19GSVJTVF9RVUFSVElMRSI6eyJhbGlhcyI6IlZpZGVvLTI1JSIsImNhdGVnb3J5IjoiVmlkZW8iLCJsYWJlbCI6IltbVElUTEVdXSJ9LCJWSURFT19NSURfUE9JTlQiOnsiYWxpYXMiOiJWaWRlby01MCUiLCJjYXRlZ29yeSI6IlZpZGVvIiwibGFiZWwiOiJbW1RJVExFXV0ifSwiVklERU9fVEhJUkRfUVVBUlRJTEUiOnsiYWxpYXMiOiJWaWRlby03NSUiLCJjYXRlZ29yeSI6IlZpZGVvIiwibGFiZWwiOiJbW1RJVExFXV0ifSwiVklERU9fQ09NUExFVEVEIjp7ImFsaWFzIjoiVmlkZW8tMTAwJSIsImNhdGVnb3J5IjoiVmlkZW8iLCJsYWJlbCI6IltbVElUTEVdXSJ9LCJVU0VSX1BBVVNFIjp7ImFsaWFzIjoiUGF1c2UiLCJjYXRlZ29yeSI6IlZpZGVvIiwibGFiZWwiOiJbW1RJVExFXV0ifSwiVVNFUl9SRVNVTUUiOnsiYWxpYXMiOiJSZXN1bWUiLCJjYXRlZ29yeSI6IlZpZGVvIiwibGFiZWwiOiJbW1RJVExFXV0ifX19fSwiaHRtbDUiOnRydWUsInRva2VuIjoiZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SjJhV1FpT2lJM05Ea3pNRGN3SWl3aWFYTnpJam9pZGt4eWIwSkJPVnBDUnpOS2QxUjJZVTlzYVdKaWRHOVFZalpNTkdweFNtd2lMQ0psZUhBaU9qRTJORFkzTlRnNE1qRjkuY3NFaDNrOGdxbkpQMW1EWno3d0ZTYkh0dWQzVzZyS3lGU0pVVGhnc2x2ayJ9"
            width="640"
            height="360"
          ></iframe>
        </AspectRatio>
        <Box>
          <iframe
            src="https://open.spotify.com/embed/episode/4tQalYCdavGe9GTexF47i9?utm_source=generator"
            width="100%"
            height="232"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Box>
        <Box>
          <iframe
            src="https://open.spotify.com/embed/episode/0LnE0NQABFcl2iZddx1n5q?utm_source=generator"
            width="100%"
            height="232"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Box>
        <AspectRatio ratio={16 / 9}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/46WPV30o5Ng"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
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
