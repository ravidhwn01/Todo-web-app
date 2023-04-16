import { Button, Flex, Heading, Image } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/usercontext";

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

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
        <Link to={!!user && user.username ? "/user-profile" : "/sign-up"}>
          <Heading size="sm">
            {!!user && user.username ? "Profile" : "Sign Up"}
          </Heading>
        </Link>

        <Link to={!!user && user.username ? "/todo-list" : "/login"}>
          <Heading size="sm">
            {!!user && user.username ? "All TodoList" : "Login"}
          </Heading>
        </Link>
        {!!user && (
          <Link to="/login">
            <Heading
              onClick={() => {
                localStorage.removeItem("access_token");
                setUser(undefined);
                navigate("/todo-list");
              }}
              size="sm"
            >
              Logout
            </Heading>
          </Link>
        )}
      </Flex>
    </Flex>
  );
}

export default Navbar;
