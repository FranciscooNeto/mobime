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
            minH={"8rem"}
            noOfLines={8}
            textTransform="uppercase"
            textAlign={"center"}
          >
           Escola: {nome}
          </Heading>
          <Text align={'center'} color={"black.500"} noOfLines={2}>
            Situação: {situacaoFuncionamentoTxt}
          </Text>
          <Stack spacing={4} align={"center"}>
            <Stack
              align={"center"}
              direction={"column"}
              spacing={4}
              fontSize={"sm"}
            >
              <Text color={"black.500"} noOfLines={2}>
                Localização: {cidade} - {estado}
              </Text>
              <Text color={"black.500"} noOfLines={2}>
                Administração: {dependenciaAdministrativaTxt}
              </Text>
              <Text color={"black.500"} noOfLines={2}>
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
