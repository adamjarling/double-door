import React from "react";
import { Link } from "@chakra-ui/react";
import classNames from "classnames";

export default function BigButton({ children, isPink, isBlue, ...restProps }) {
  return (
    <Link
      textTransform="uppercase"
      textDecoration="none"
      border="none"
      _hover={{
        textDecoration: "none",
      }}
      textAlign="center"
      padding="5"
      fontWeight="bold"
      fontSize={{ base: "md", md: "2xl" }}
      background={classNames({
        "brand.yellow.500": !isBlue && !isPink,
        "brand.blue.500": isBlue,
        "brand.pink.500": isPink,
      })}
      textColor={classNames("black", {
        white: isBlue,
      })}
      {...restProps}
    >
      {children}
    </Link>
  );
}
