import * as yup from "yup";

export const UserSchema = yup.object({
  username: yup.string().required().min(3),
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
});

export type ISignupUser = yup.InferType<typeof UserSchema>;
