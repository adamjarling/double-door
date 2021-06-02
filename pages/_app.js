import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      pink: {
        50: "#ffe2f9",
        100: "#ffb1e2",
        200: "#ff7ecc",
        300: "#ff4cb6",
        400: "#ff1aa2",
        500: "#e60088",
        600: "#b4006a",
        700: "#82004c",
        800: "#50002e",
        900: "#200012",
      },
    },
  },
  fonts: {
    body: "Gotham-Book",
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "black",
        color: "white",
      },
      // styles for the `a`
      a: {
        color: "brand.pink.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
