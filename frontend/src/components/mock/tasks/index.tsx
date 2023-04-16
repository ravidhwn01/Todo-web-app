import { Button, Grid, GridItem } from "@chakra-ui/react";

function TaskBox() {
  return (
    <>
      <Grid
        templateColumns="repeat(auto-fit, 350px)"
        gap={6}
        mx="24"
        my="8"
        justifyContent="flex-start"
      >
        <GridItem
          bg="blue.800"
          color="white"
          p="6"
          w="100%"
          h="100%"
          boxShadow="2xl"
          borderRadius="8px"
          _hover={{ bg: "blue.900" }}
        >
          <Button bg="none" _hover={{ bg: "none" }}>
            meeting with raj
          </Button>
        </GridItem>
        <GridItem
          bg="blue.800"
          color="white"
          p="6"
          w="100%"
          h="100%"
          boxShadow="2xl"
          borderRadius="8px"
        >
          Item
        </GridItem>
        <GridItem
          bg="blue.800"
          color="white"
          p="6"
          w="100%"
          h="100%"
          boxShadow="2xl"
          borderRadius="8px"
        >
          Item
        </GridItem>
        <GridItem
          bg="blue.800"
          color="white"
          p="6"
          w="100%"
          h="100%"
          boxShadow="2xl"
          borderRadius="8px"
        >
          Item
        </GridItem>
        <GridItem
          bg="blue.800"
          color="white"
          p="6"
          w="100%"
          h="100%"
          boxShadow="2xl"
          borderRadius="8px"
        >
          Item
        </GridItem>
        <GridItem
          bg="blue.800"
          color="white"
          p="6"
          w="100%"
          h="100%"
          boxShadow="2xl"
          borderRadius="8px"
        >
          Item
        </GridItem>
        <GridItem
          bg="blue.800"
          color="white"
          p="6"
          w="100%"
          h="100%"
          boxShadow="2xl"
          borderRadius="8px"
        >
          Item
        </GridItem>
        <GridItem
          bg="blue.800"
          color="white"
          p="6"
          w="100%"
          h="100%"
          boxShadow="2xl"
          borderRadius="8px"
        >
          Item
        </GridItem>
      </Grid>
    </>
  );
}

export default TaskBox;
