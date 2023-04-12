import { ISignupUser } from "../../sign up/schema/signup-schema";
import { axiosInstance } from "../instance/api-instance";

export const createNewUser = async (newUser: ISignupUser) => {
  const createdUserResponse = await axiosInstance.post("users", newUser);
  console.log(createdUserResponse.data);
  return createdUserResponse.data;
};
