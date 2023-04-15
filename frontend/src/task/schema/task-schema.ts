import * as yup from "yup";

export const TaskListSchema = yup.object({
  todoListId: yup.number().required(),
  taskName: yup.string().required(),
  taskDescription: yup.string().required(),
});

export type ITaskListSchema = yup.InferType<typeof TaskListSchema>;
