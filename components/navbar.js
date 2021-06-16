import React from "react";
import { Flex, Link, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { socialMediaLinks } from "global-vars";
import TwitterIcon from "public/images/social-icons_TW.svg";
import FBIcon from "public/images/social-icons_FB.svg";
import InstagramIcon from "public/images/social-icons_IG.svg";

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
    <Link href={href} isExternal>
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

  const iconSize = "30";

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
      <Stack ml={5} spacing={[4, 5]} direction="row">
        <NavMotionLink href={socialMediaLinks.facebook}>
          <FBIcon height={iconSize} width={iconSize} fill="#ccc" />
        </NavMotionLink>
        <NavMotionLink href={socialMediaLinks.instagram}>
          <InstagramIcon height={iconSize} width={iconSize} fill="#ccc" />
        </NavMotionLink>
        <NavMotionLink href={socialMediaLinks.twitter}>
          <TwitterIcon height={iconSize} width={iconSize} fill="#ccc" />
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
