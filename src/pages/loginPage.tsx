import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  useColorModeValue,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import users from "../data/users.json";
import { login } from "../contexts/Auth";


export default function LoginPage() {
  const navigate = useNavigate();

  const [inputUser, setUser] = useState("");
  const [inputPassword, setUPassword] = useState("");
  const handleUserChange = (e) => setUser(e.target.value);
  const handlePasswordChange = (e) => setUPassword(e.target.value);
  const [errorLogin, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    users.forEach((user) => {
      const { username, password } = user;
      if (username === inputUser && password === inputPassword) {
        login();
        navigate("/listar");
      }
      setError(true);
    });
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Mobi-ME
          </Heading>
        </Stack>

        <form onSubmit={handleSubmit}>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="user">
                <FormLabel>Usuário</FormLabel>
                <Input type="name" onChange={handleUserChange} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange={handlePasswordChange} />
              </FormControl>

              <Stack spacing={10}>
                <Button
                  type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Entrar
                </Button>
              </Stack>
              {errorLogin ? (
                <Text
                  textAlign="center"
                  color={"red"}
                  fontSize={"sm"}
                  maxW={"15rem"}
                  alignSelf={"center"}
                >
                  Nome de usuário ou senha inválidos!
                </Text>
              ) : (
                <></>
              )}
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
}
