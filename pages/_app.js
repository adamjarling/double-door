import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          blue: {
            50: { value: "#d9f7ff" },
            100: { value: "#ace1ff" },
            200: { value: "#7cccff" },
            300: { value: "#49b8ff" },
            400: { value: "#1aa3ff" },
            500: { value: "#008ae6" },
            600: { value: "#006bb4" },
            700: { value: "#004c82" },
            800: { value: "#002e51" },
            900: { value: "#001021" },
          },
          pink: {
            50: { value: "#ffe2f9" },
            100: { value: "#ffb1e2" },
            200: { value: "#ff7ecc" },
            300: { value: "#ff4cb6" },
            400: { value: "#ff1aa2" },
            500: { value: "#e60088" },
            600: { value: "#b4006a" },
            700: { value: "#82004c" },
            800: { value: "#50002e" },
            900: { value: "#200012" },
          },
          yellow: {
            50: { value: "#ffffda" },
            100: { value: "#fffbad" },
            200: { value: "#fff97d" },
            300: { value: "#fff64b" },
            400: { value: "#fff31a" },
            500: { value: "#e6da00" },
            600: { value: "#b3a900" },
            700: { value: "#807900" },
            800: { value: "#4d4900" },
            900: { value: "#1b1800" },
          },
        },
      },
      fonts: {
        body: { value: "Gotham-Book" },
      },
    },
  },
  globalCss: {
    body: {
      bg: "black",
      color: "white",
      fontSize: "1.2rem",
    },
    a: {
      opacity: "100%",
      borderBottom: "1px dashed",
      _hover: {
        opacity: "70%",
        transition: "opacity 0.5s",
        textDecoration: "none",
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider value={system}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
