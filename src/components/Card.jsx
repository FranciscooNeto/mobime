import React from "react";
import {
  Box,
  Text,
  Stack,
  Center,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

function Card(props) {
  const { nome, diretor, localizacao, turnos } = props;

  return (
    <Center
      py={1}
      W={{ base: "sm", large: "md" }}
      H={{ base: "sm", large: "md" }}
    >
      <Box
        minW={"100%"}
        p={3}
        bg={useColorModeValue("white", "gray.900")}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack H={{ base: "sm", large: "md" }} W={{ base: "sm", large: "md" }}>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"1.2rem"}
            fontFamily={"body"}
            minH={"4.5rem"}
            noOfLines={3}
            textTransform="uppercase"
            textAlign={"center"}
          >
            Escola: {nome}
          </Heading>
          <Text color={"black.500"} noOfLines={1} >
            Diretor(a): {diretor}
          </Text>
        </Stack>
        <Stack  direction={"row"} spacing={4} >
          <Stack direction={"column"} spacing={0} fontSize={"md"}>
            <Text  fontWeight={400} noOfLines={1}>
              Localização {localizacao}
            </Text>
            <Text color={"black.500"}>
              Turnos:{" "}
              <Stack direction={"row"}>
                {turnos.map((turno) => (
                  <Text color={"gray.500"}>{turno}</Text>
                ))}
              </Stack>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

export default Card;
