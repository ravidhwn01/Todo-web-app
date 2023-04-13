import { ITodoList } from "../../todolist/interface/todolist-interface";
import { axiosInstance } from "../instance/api-instance";

export const createTodoList = async (todoListDetails: ITodoList) => {
  const createdTodoResponse = await axiosInstance.post(
    "new-todo",
    todoListDetails
  );
  return createdTodoResponse.data;
};
