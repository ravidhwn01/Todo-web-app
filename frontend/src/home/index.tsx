import { Flex, Heading } from "@chakra-ui/react";
import Navbar from "../navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
        <Heading> Let's Create Your Personal and Sharable Todo list </Heading>
      </Flex>
    </>
  );
}

export default Home;
