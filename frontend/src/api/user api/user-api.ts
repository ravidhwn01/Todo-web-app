import { countBy } from "lodash";
import { ISignupUser } from "../../sign up/schema/signup-schema";
import { axiosInstance } from "../instance/api-instance";

export const createNewUser = async (newUser: ISignupUser) => {
  const createdUserResponse = await axiosInstance.post("users", newUser);
  console.log(createdUserResponse.data);
  return createdUserResponse.data;
};

export const getAllUser = async () => {
  const userResponse = await axiosInstance.get("users");
  return userResponse.data;
};

export async function getUserByToken() {
  const user = await axiosInstance.get("/users/me");
  console.log(user.data);
  return user.data;
}

export const updateUserProfile = async (userId: number) => {
  const updatedUserProfileResponse = await axiosInstance.patch(
    `/users/${userId}`
  );

  return updatedUserProfileResponse.data;
};
