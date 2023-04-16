import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { createTask } from "../api/task api/create-task-api";
import TaskBox from "../components/mock/tasks";
import Navbar from "../navbar";
import { ITaskListSchema, TaskListSchema } from "./schema/task-schema";

function CreateTask() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITaskListSchema>({
    resolver: yupResolver(TaskListSchema),
  });

  const onSubmitHandler = (taskListDetail: ITaskListSchema) => {
    console.log(taskListDetail);
    createTodoListMutation.mutate({ ...taskListDetail, todoListId: 1 });
  };

  const createTodoListMutation = useMutation(createTask, {
    onSuccess: () => {},
    onError: () => {},
  });
  return (
    <>
      <Navbar />

      <Flex justifyContent="flex-end">
        <Button onClick={onOpen}>Add Task</Button>
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
                  isInvalid={!!errors["taskName"]?.message}
                >
                  <FormLabel m="0">Task Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="title"
                    {...register("taskName")}
                  />
                  {errors["taskName"]?.message && (
                    <FormErrorMessage>
                      {" "}
                      {errors["taskName"].message}{" "}
                    </FormErrorMessage>
                  )}
                </FormControl>

                <FormControl
                  w="50%"
                  mb="2"
                  isInvalid={!!errors["taskDescription"]?.message}
                >
                  <FormLabel m="0">Task Description</FormLabel>
                  <Input
                    type="text"
                    placeholder="title"
                    {...register("taskDescription")}
                  />
                  {errors["taskDescription"]?.message && (
                    <FormErrorMessage>
                      {" "}
                      {errors["taskDescription"].message}{" "}
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
      <TaskBox />
    </>
  );
}

export default CreateTask;
