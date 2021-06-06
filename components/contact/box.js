import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";

function box({ children }) {
  return <Box textTransform="uppercase">{children}</Box>;
}

box.propTypes = {};

export default box;
