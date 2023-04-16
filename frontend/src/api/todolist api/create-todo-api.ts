import { ITodoList } from "../../todolist/interface/todolist-interface";
import { axiosInstance } from "../instance/api-instance";

export const createTodoList = async (todoListDetails: ITodoList) => {
  const createdTodoResponse = await axiosInstance.post(
    "new-todo",
    todoListDetails
  );
  return createdTodoResponse.data;
};

export const getAllTodo = async () => {
  const allTodoResponse = await axiosInstance.get("all-todo");
  console.log(allTodoResponse.data);
  return allTodoResponse.data;
};
