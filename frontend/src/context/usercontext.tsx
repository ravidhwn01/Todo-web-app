import React, {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { useQuery } from "react-query";
import { IUserContextValue } from "../sign up/interface/signup-interface";
import { getUserByToken } from "../api/user api/user-api";

interface UserContextProviderData {
  user: IUserContextValue | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUserContextValue | undefined>>;
}

export const UserContext = createContext<UserContextProviderData>({
  user: undefined,
  setUser: undefined!,
});

export interface UserContextProps extends PropsWithChildren {}

export const UserProvider: FC<UserContextProps> = ({ children }) => {
  const [user, setUser] = useState<IUserContextValue>();
  const { data: loginUser } = useQuery("me", getUserByToken);

  useEffect(() => {
    setUser(loginUser);
  }, [loginUser]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
