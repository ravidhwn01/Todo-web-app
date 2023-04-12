import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginUserSchema, LoginUserSchema } from "./schema/login-schema";
function UserLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginUserSchema>({
    resolver: yupResolver(LoginUserSchema),
  });

  const onSubmitHandler = (loginUserDetails: ILoginUserSchema) => {
    console.log(loginUserDetails);
    reset({
      email: "",
      password: "",
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Flex
          direction="column"
          w="100vw"
          h="100vh"
          justifyContent="center"
          alignItems="center"
        >
          <FormControl w="50%" mb="2" isInvalid={!!errors["email"]?.message}>
            <FormLabel m="0">Email</FormLabel>
            <Input
              type="email"
              placeholder="enter your email"
              {...register("email")}
            />
            {errors["email"]?.message && (
              <FormErrorMessage> {errors["email"].message} </FormErrorMessage>
            )}
          </FormControl>
          <FormControl w="50%" mb="2" isInvalid={!!errors["password"]?.message}>
            <FormLabel m="0">Password</FormLabel>
            <Input
              type="password"
              placeholder="enter your password"
              {...register("password")}
            />
            {errors["password"]?.message && (
              <FormErrorMessage>{errors["password"].message}</FormErrorMessage>
            )}
          </FormControl>
          <Button type="submit">Submit </Button>
        </Flex>
      </form>
    </>
  );
}

export default UserLogin;
