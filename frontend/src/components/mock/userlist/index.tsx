import { Button, Flex } from "@chakra-ui/react";
import * as _ from "lodash";
import { useQuery } from "react-query";
import { getAllUser } from "../../../api/user api/user-api";
import { ISignupUser } from "../../../sign up/schema/signup-schema";

interface IUserName {
  id: number;
  username: string;
}

function UserLists() {
  const { data: usernames } = useQuery<IUserName[]>("usernames", getAllUser);
  console.log(usernames);
  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      {_.map(usernames, (username: IUserName) => {
        return (
          <Button
            w="50%"
            m="2"
            key={username.id}
            color="white"
            bg="blue.900"
            _hover={{
              bg: "none",
              color: "blue.900",
              border: "1px",
              borderColor: "blue.900",
            }}
          >
            {username.username}
          </Button>
        );
      })}
    </Flex>
  );
}

export default UserLists;
