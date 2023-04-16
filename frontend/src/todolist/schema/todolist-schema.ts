import * as yup from "yup";

export const TodoListSchema = yup.object({
  userId: yup.number(),
  title: yup.string().required().min(3),
});

export type ITodoListSchema = yup.InferType<typeof TodoListSchema>;
