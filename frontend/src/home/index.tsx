import { Flex, Heading } from "@chakra-ui/react";
import Navbar from "../navbar";
import TodoListBox from "../components/mock/todolist box";
import { UserProfile } from "../components/mock/user profile";
import { UpdateUserProfile } from "../components/mock/user profile/updateProfile";

function Home() {
  return (
    <>
      <Navbar />
      <UserProfile />
      <UpdateUserProfile />
      <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
        <Heading> Let's Create A Personal and Sharable Todo list </Heading>
      </Flex>
      <TodoListBox />
    </>
  );
}

export default Home;
