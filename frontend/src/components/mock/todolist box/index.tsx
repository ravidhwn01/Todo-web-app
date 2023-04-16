import { Button, Grid, GridItem } from "@chakra-ui/react";
import { ITodoList } from "../../../todolist/interface/todolist-interface";

interface Todo {
  userId: number;
  title: string;
}
function TodoListBox(props: Todo) {
  const { title } = props;
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
            {title}
          </Button>
        </GridItem>
      </Grid>
    </>
  );
}

export default TodoListBox;
