import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Gotham-Book';
        font-style: normal;
        font-weight: 300;
        src: url('fonts/Gotham-Book.otf') format('opentype');
      }
      /* latin */
      @font-face {
        font-family: 'Gotham-Medium';
        font-style: normal;
        font-weight: 600;
        src: url('fonts/Gotham-Medium.otf') format('opentype');
      }
      /* latin */
      @font-face {
        font-family: 'Gotham-Bold';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url('fonts/Gotham-Bold.otf') format('opentype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* latin */
      @font-face {
        font-family: 'Phosphate';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('fonts/Phosphate.ttc') format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
  />
);

export default Fonts;
