import { ILoginUser } from "../../login/interface/login-interface";
import { axiosInstance } from "../instance/api-instance";

export const loginUser = async (loginUserDetails: ILoginUser) => {
  const loggedInUser = await axiosInstance.post("auth/login", loginUserDetails);
  localStorage.setItem("access_token", loggedInUser.data.access_token);
  return loggedInUser.data;
};
