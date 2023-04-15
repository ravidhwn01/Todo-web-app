import { ITaskListSchema } from "../../task/schema/task-schema";
import { axiosInstance } from "../instance/api-instance";

export const createTask = async (newTaskDetails: ITaskListSchema) => {
  const createdTaskResponse = await axiosInstance.post(
    "tasks/new-task",
    newTaskDetails
  );
  return createdTaskResponse.data;
};
export const getAllTasks = async () => {
  const allTaskResponse = await axiosInstance.get("tasks");
  return allTaskResponse.data;
};
