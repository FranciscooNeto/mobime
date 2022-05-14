import React from "react";
import {
  Box,
  Text,
  Stack,
  Center,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

function CardAPI(props) {
  const {
    nome,
    cidade,
    estado,
    situacaoFuncionamentoTxt,
    dependenciaAdministrativaTxt,
    regiao,
  } = props;

  return (
    <Center
      py={4}
      W={{ base: "sm", large: "md" }}
      H={{ base: "sm", large: "md" }}
    >
      <Box
        minW={"100%"}
        p={8}
        bg={useColorModeValue("white", "gray.900")}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack H={{ base: "sm", large: "md" }} W={{ base: "sm", large: "md" }}>
          <Heading
            color={useColorModeValue("black.700", "white")}
            fontSize={"1.2rem"}
            fontFamily={"body"}
            minH={"4.5rem"}
            noOfLines={3}
            textAlign={"center"}
          >
            {nome}
          </Heading>
          <Text color={"black.500"} noOfLines={1}>
            Situação: {situacaoFuncionamentoTxt}
          </Text>
          <Stack direction={"row"} spacing={4} align={"center"}>
            <Stack
              align={"center"}
              direction={"column"}
              spacing={4}
              fontSize={"sm"}
            >
              <Text color={"black.500"} noOfLines={1}>
                Localização: {cidade} - {estado}
              </Text>
              <Text color={"black.500"} noOfLines={1}>
                Administração: {dependenciaAdministrativaTxt}
              </Text>
              <Text color={"black.500"} noOfLines={1}>
                Região: {regiao}
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

export default CardAPI;
