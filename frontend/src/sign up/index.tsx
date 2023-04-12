import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ISignupUser, UserSchema } from "./schema/signup-schema";
import { useMutation, useQueryClient } from "react-query";
import { createNewUser } from "../api/user api/user-api";
import Navbar from "../navbar";
function SignUp() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISignupUser>({
    resolver: yupResolver(UserSchema),
  });

  const onSubmitHandler = (userDetails: ISignupUser) => {
    console.log(userDetails);
    createUserMutation.mutate(userDetails);
    reset({
      username: "",
      email: "",
      password: "",
    });
  };
  const createUserMutation = useMutation(createNewUser, {
    onSuccess: () => {
      // queryClient.refetchQueries()
      navigate("/");
    },
  });

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Flex
          direction="column"
          w="100vw"
          h="100vh"
          justifyContent="center"
          alignItems="center"
        >
          <FormControl w="50%" mb="2" isInvalid={!!errors["username"]?.message}>
            <FormLabel m="0">Username</FormLabel>
            <Input
              type="text"
              placeholder="enter your username"
              {...register("username")}
            />
            {errors["username"]?.message && (
              <FormErrorMessage> {errors["username"].message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl w="50%" mb="2" isInvalid={!!errors["email"]?.message}>
            <FormLabel m="0">Email</FormLabel>
            <Input
              type="email"
              placeholder="enter your email"
              {...register("email")}
            />
            {errors["email"]?.message && (
              <FormErrorMessage> {errors["email"].message}</FormErrorMessage>
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
              <FormErrorMessage> {errors["password"].message}</FormErrorMessage>
            )}
          </FormControl>
          <Button type="submit">Sign Up </Button>
        </Flex>
      </form>
      <Link to="/login" color="teal.500">
        <Heading textAlign="center" my="3" size="sm">
          Already have an account ! Login
        </Heading>
      </Link>
    </>
  );
}

export default SignUp;
