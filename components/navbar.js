import React from "react";
import { Flex, Link, Stack } from "@chakra-ui/react";
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import { socialMediaLinks } from "global-vars";

const button = {
  rest: { scale: 1 },
  hover: { scale: 0.9 },
  pressed: { scale: 0.95 },
};

const NavMotionLink = ({ href = "#", children }) => (
  <motion.div
    variants={button}
    initial="rest"
    whileHover="hover"
    whileTap="pressed"
  >
    <Link href={href} isExternal colorScheme="brand.yellow">
      {children}
    </Link>
  </motion.div>
);

const Navbar = (props) => {
  const handleContactClick = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact-splash");
    window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
  };
  return (
    <Flex
      as="nav"
      alignItems="center"
      position="fixed"
      h="50px"
      bg="black"
      w="100%"
      zIndex={2}
      textTransform="uppercase"
    >
      <Stack
        ml={5}
        spacing={5}
        direction="row"
        fontSize="3xl"
        //color="brand.yellow.500"
      >
        <NavMotionLink href={socialMediaLinks.facebook}>
          <FaFacebook />
        </NavMotionLink>

        <NavMotionLink href={socialMediaLinks.instagram}>
          <FaInstagramSquare />
        </NavMotionLink>
        <NavMotionLink href={socialMediaLinks.twitter}>
          <FaTwitterSquare />
        </NavMotionLink>
      </Stack>
      <Link
        ml={5}
        href="#contact-splash"
        fontFamily="Gotham-Bold"
        onClick={handleContactClick}
      >
        Contact
      </Link>
    </Flex>
  );
};

export default Navbar;
