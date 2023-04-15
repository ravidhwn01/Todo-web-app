import { Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Flex justifyContent="space-between" m="4">
      <Flex alignContent="center">
        <Link to={"/"}>
          <Image
            height="10px"
            borderRadius="full"
            boxSize="40px"
            src="todo.png "
            alt="Loading..."
          />
        </Link>
        <Link to="/">
          <Heading mt="12px" size="md">
            TODO-WEB-APP
          </Heading>
        </Link>
      </Flex>
      <Flex gap="6" wrap="wrap" alignItems="center">
        <Link to="/">
          <Heading size="sm">Home</Heading>
        </Link>
        <Link to="/new-todo">
          <Heading size="sm">Create Todo's</Heading>
        </Link>
        <Link to="/sign-up">
          <Heading size="sm">Sign Up</Heading>
        </Link>
        <Link to="/login">
          <Heading size="sm">Login</Heading>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Navbar;
