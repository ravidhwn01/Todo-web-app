import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import * as _ from "lodash";
import Navbar from "../navbar";
import { isError } from "lodash";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ITodoListSchema, TodoListSchema } from "./schema/todolist-schema";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  createTodoList,
  getAllTodo,
} from "../api/todolist api/create-todo-api";
import { useNavigate } from "react-router-dom";
import TodoListBox from "../components/mock/todolist box";
import { ITodoList } from "./interface/todolist-interface";
import { useContext } from "react";
import { UserContext } from "../context/usercontext";
import { Itodolist } from "../interfaces/todolist-interface";

function CreateTodoLists() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITodoListSchema>({
    resolver: yupResolver(TodoListSchema),
  });

  const { data: usertodo } = useQuery<ITodoList[]>("todo", getAllTodo);
  const onSubmitHandler = (todoListDetail: ITodoListSchema) => {
    console.log(todoListDetail);
    createTodoListMutation.mutate({ ...todoListDetail, userId: user!.id });
  };

  const createTodoListMutation = useMutation(createTodoList, {
    onSuccess: () => {
      queryClient.refetchQueries("todo");
      navigate("/todo-list");
    },
    onError: () => {},
  });
  return (
    <>
      <Navbar />

      <Flex justifyContent="flex-end">
        <Button onClick={onOpen}>Create Todo List</Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Todo List</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <FormControl
                  w="50%"
                  mb="2"
                  isInvalid={!!errors["title"]?.message}
                >
                  <FormLabel m="0">Title</FormLabel>
                  <Input
                    type="text"
                    placeholder="title"
                    {...register("title")}
                  />
                  {errors["title"]?.message && (
                    <FormErrorMessage>
                      {" "}
                      {errors["title"].message}{" "}
                    </FormErrorMessage>
                  )}
                </FormControl>

                <Flex justifyContent="space-between">
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button type="submit" onClick={onClose}>
                    Add{" "}
                  </Button>
                </Flex>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Grid
        templateColumns="repeat(auto-fit, 350px)"
        gap={6}
        mx="24"
        my="8"
        justifyContent="flex-start"
      >
        {_.map(usertodo, (todo: Itodolist) => {
          return (
            <GridItem
              bg="blue.800"
              color="white"
              p="6"
              w="100%"
              h="100%"
              boxShadow="2xl"
              borderRadius="8px"
              _hover={{ bg: "blue.900" }}
              key={todo.id}
            >
              <Button bg="none" _hover={{ bg: "none" }}>
                {todo.title}
              </Button>

              <Flex justifyContent="flex-end">
                <Button color="blue.900">Share</Button>
              </Flex>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}

export default CreateTodoLists;
