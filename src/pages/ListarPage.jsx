import { useState, useEffect } from "react";
import axios from "../services/axios";
import CardAPI from "../components/CardAPI";
import Card from "../components/CardLocal";
import Navbar from "../components/Navbar.tsx";

import {
  Flex,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  SimpleGrid,
  FormControl,
  FormLabel,
  Select,
  Spinner,
  Center,
} from "@chakra-ui/react";

import { AiOutlineSearch } from "react-icons/ai";

const Listagem = () => {
  const [DataType, setDataType] = useState(2);
  const [Loaded, setLoaded] = useState(false);

  const handleType = (e) => {
    setDataType(parseInt(e.target.value));
  };

  const [searchValue, setInputSearch] = useState("");
  const [ApiEscolas, setEscolas] = useState([]);
  const [escolas_data, setDataEscola] = useState([]);

  const handleSearch = (e) => setInputSearch(e.target.value);

  useEffect(() => {
    async function getSchools() {
      let data = localStorage.getItem("Escolas");

      data = JSON.parse(data);

      if (data) {
        setDataEscola(data);
      }
      let rota = `http://educacao.dadosabertosbr.com/api/escolas/buscaavancada?estado=pi`;

      try {
        const response = await axios.get(rota);
        setEscolas(response.data[1]);
        setLoaded(true);
      } catch (e) {
        setLoaded(true);
      }
    }
    getSchools();
  }, []);

  return (
    <Stack width="100wh" height="100vh" backgroundColor="gray.200">
      <Navbar />

      <Flex
        flexDirection="column"
        width="100wh"
        backgroundColor="gray.200"
        alignItems="center"
      >
        <Stack width='100'>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<AiOutlineSearch color="black.700" />}
            />
            <Input
              variant="solid"
              type="tel"
              placeholder="Buscar escola"
              value={searchValue}
              onChange={handleSearch}
            />
          </InputGroup>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          minWidth={"100%"}
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <Stack maxH={"50%"} minW={"8%"} mr={"1rem"} ml={"1rem"}>
            <FormControl>
              <FormLabel
                color="Black.600"
                fontWeight="bold"
                style={{ textTransform: "uppercase" }}
              >
                SELECIONAR
              </FormLabel>

              <Select
                name="select"
                variant="solid"
                size="md"
                onChange={handleType}
              >
                <option value="2">Cadastrados</option>
                <option value="1">API</option>
              </Select>
            </FormControl>
          </Stack>
          <Center w="100%">
            {Loaded ? (
              <SimpleGrid
                columns={[1, 6]}
                spacing="10px"
                maxH={"100%"}
                maxW={"100%"}
              >
                {DataType === 2 && escolas_data !== undefined
                  ? escolas_data.map(function (data) {
                      const { escola, diretor, localizacao, turnos } = data;
                      if (
                        escola
                          .toLowerCase()
                          .normalize("NFD")
                          .includes(searchValue.toLowerCase().normalize("NFD"))
                      ) {
                        return (
                          <Card
                            nome={escola}
                            diretor={diretor}
                            localizacao={localizacao}
                            turnos={turnos}
                          />
                        );
                      }
                      return <></>;
                    })
                  : ApiEscolas.map(function (data) {
                      const {
                        nome,
                        anoCenso,
                        cod,
                        codCidade,
                        cidade,
                        estado,
                        regiao,
                        situacaoFuncionamento,
                        dependenciaAdministrativa,
                        situacaoFuncionamentoTxt,
                        dependenciaAdministrativaTxt,
                      } = data;
                      if (
                        nome
                          .toLowerCase()
                          .normalize("NFD")
                          .includes(searchValue.toLowerCase().normalize("NFD"))
                      ) {
                        return (
                          <CardAPI
                            key={cod}
                            nome={nome}
                            anoCenso={anoCenso}
                            codCidade={codCidade}
                            cidade={cidade}
                            estado={estado}
                            regiao={regiao}
                            situacaoFuncionamento={situacaoFuncionamento}
                            dependenciaAdministrativa={dependenciaAdministrativa}
                            situacaoFuncionamentoTxt={situacaoFuncionamentoTxt}
                            dependenciaAdministrativaTxt={dependenciaAdministrativaTxt}
                          />
                        );
                      }
                      return <></>;
                    })}
              </SimpleGrid>
            ) : (
              <Stack
                mt={{ base: "6rem", md: "6rem" }}
                mr={{ base: "0rem", md: "10rem" }}
              >
                <Spinner
                  label="Carregando..."
                  thickness="2px"
                  speed="0.75s"
                  emptyColor="gray.200"
                  color="black.500"
                  size="xl"
                />
              </Stack>
            )}
          </Center>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Listagem;
