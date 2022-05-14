import {
  Container,
  Stack,
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid
} from "@chakra-ui/react";
import Navbar from "../components/Navbar.tsx";

export default function SobrePage() {
  return (
    <Container maxW={"100%"}>
      <Navbar />

      <Stack
        alignItems={"left"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              Francisco Neto,
            </Text>
            <br />
          </Heading>
          <Text color={"gray.500"}>
            Meu nome é Francisco, faço faculdade de ciência da computação na
            Estácio de Sá, estou no segundo período atualmente, minhas
            considerações sobre o projeto feito são: algumas dificuldades que
            tive inicialmente por conta que comecei a mexer recentemente com
            React.Js
          </Text>
          <SimpleGrid spacing={8} columns={2}
              >
         
            <Image
              borderRadius="full"
              boxSize="100px"
              src="data:image/png;base64,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"
              alt="React.js"
            />
            <Image
              borderRadius="full"
              boxSize="100px"
              src="https://avatars.githubusercontent.com/u/54212428?s=280&v=4"
              alt="Chakra"
            />
            <Image
              borderRadius="full"
              boxSize="100px"
              src="data:image/png;base64,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"
              alt="Javascript"
            />
            <Image
              borderRadius="full"
              boxSize="100px"
              src="data:image/png;base64,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"
              alt="Typescript"
            />
        
          </SimpleGrid>
          <Text color={"gray.500"}>
            Minhas técnologias usadas foram react.js, chakra-ui, javascript e um
            pouco de typescript.
          </Text>

          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "2sxl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.300",
                zIndex: -1,
              }}
            >
              Minhas considerações
            </Text>
            <br />
          </Heading>
         
          <Text color={"gray.500"}>
            Minhas dificuldades foram a criação de logica de cadastro (local) e
            o consumo da API, sobre a responsividade não me preocupei tanto por
            conta do Chakra-UI que me entrega já toda a componentização
            responsiva.

         

          </Text>
        </Stack>
      </Stack>
      <Stack direction={"row"}></Stack>
    </Container>
  );
}


// por mais que tenha falhas, é aprendendo e crescendo cada vez mais que alcançamos a metaaa
//