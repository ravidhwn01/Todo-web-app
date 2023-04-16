import React, { useContext } from "react";
import { UserContext } from "../context/usercontext";
import { Flex, Heading } from "@chakra-ui/react";
import Navbar from "../navbar";
import { UserProfile } from "../components/mock/user profile";
import { UpdateUserProfile } from "../components/mock/user profile/updateProfile";

function Profile() {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <Navbar />
      <Flex gap="4" justifyContent="flex-end">
        <UserProfile />
        <UpdateUserProfile />
      </Flex>
      {/* <Flex
        direction="column"
        w="100vw"
        h="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Heading> {user?.username} </Heading>
        <Heading> {user?.email} </Heading>
      </Flex> */}
    </>
  );
}

export default Profile;
