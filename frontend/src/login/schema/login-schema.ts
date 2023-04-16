import * as yup from "yup";

export const LoginUserSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

export type ILoginUserSchema = yup.InferType<typeof LoginUserSchema>;
