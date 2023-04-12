import { ILoginUser } from "../../login/interface/login-interface";
import { axiosInstance } from "../instance/api-instance";

export const loginUser = async (loginUserDetails: ILoginUser) => {
  const loggedInUser = await axiosInstance.post("auth/login", loginUserDetails);
  return loggedInUser.data;
};
