import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ILoginUserSchema, LoginUserSchema } from "./schema/login-schema";
import Navbar from "../navbar";
import { useMutation, useQueryClient } from "react-query";
import { loginUser } from "../api/login api/userlogin-api";
import { useState } from "react";
function UserLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
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
    loggedInUserMutation.mutate(loginUserDetails);
    reset({
      email: "",
      password: "",
    });
  };

  const loggedInUserMutation = useMutation(loginUser, {
    onSuccess: () => {
      navigate("/todo-list");
    },
    onError: () => {
      setIsError(true);
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
          <Button type="submit">Login </Button>
          {isError ? (
            <Text mt="2" color="red.600">
              {" "}
              User does not exist for the following login credentials{" "}
            </Text>
          ) : (
            " "
          )}
        </Flex>
      </form>
      <Link to="/signup" color="teal.500">
        <Heading textAlign="center" mt="2" size="sm">
          Create new account! Sign Up
        </Heading>
      </Link>
    </>
  );
}

export default UserLogin;
