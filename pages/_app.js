import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      blue: {
        50: "#d9f7ff",
        100: "#ace1ff",
        200: "#7cccff",
        300: "#49b8ff",
        400: "#1aa3ff",
        500: "#008ae6", // the color
        600: "#006bb4",
        700: "#004c82",
        800: "#002e51",
        900: "#001021",
      },
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
      yellow: {
        50: "#ffffda",
        100: "#fffbad",
        200: "#fff97d",
        300: "#fff64b",
        400: "#fff31a",
        500: "#e6da00", // the color
        600: "#b3a900",
        700: "#807900",
        800: "#4d4900",
        900: "#1b1800",
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
