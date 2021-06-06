import PropTypes from "prop-types";
import { Button } from "@chakra-ui/react";

function emailButton({ label = "Email", mailTo }) {
  return (
    <Button as="a" colorScheme="blackAlpha" mt={3} href={`mailto: ${mailTo}`}>
      {label}
    </Button>
  );
}

emailButton.propTypes = {
  label: PropTypes.string,
  mailTo: PropTypes.string,
};

export default emailButton;
