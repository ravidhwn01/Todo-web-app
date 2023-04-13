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
import Navbar from "../navbar";
import { isError } from "lodash";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ITodoListSchema, TodoListSchema } from "./schema/todolist-schema";
import { useMutation } from "react-query";
import { createTodoList } from "../api/todolist api/create-todo-api";

function CreateTodoLists() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITodoListSchema>({
    resolver: yupResolver(TodoListSchema),
  });

  const onSubmitHandler = (todoListDetail: ITodoListSchema) => {
    console.log(todoListDetail);
    createTodoListMutation.mutate({ ...todoListDetail, userId: 1 });
  };

  const createTodoListMutation = useMutation(createTodoList, {
    onSuccess: () => {},
    onError: () => {},
  });
  return (
    <>
      <Navbar />
      <Button onClick={onOpen}>Create Todo List</Button>

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
                  <Button type="submit">Add </Button>
                </Flex>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateTodoLists;
