import {useState} from 'react';
import Navbar from '../components/Navbar.tsx';
import ModalCadastro from '../components/ModalCadastro'

import {
  Flex,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,

} from "@chakra-ui/react";

const Cadastro = () => {
    const [input_escola, setInputSchool] = useState('')
    const [input_principal, setInputPrincipal] = useState('')
    const [success, setData] = useState(false)
    const [location, setLocation] = useState(0)
    
    
    const [checkedTurnosIds, setCheckedTurnosIds] = useState([]);
    const [checkboxes, setCheckboxes] = useState([-1,-1,-1,-1]);

    const handleInputChangeSchool = (e) => setInputSchool(e.target.value)
    const handleInputChangePrincipal = (e) => setInputPrincipal(e.target.value)

    const handleSubmit = (e) => {
      const escola = {
        escola: input_escola,
        diretor: input_principal,
        localizacao: location,
        turnos: checkedTurnosIds
      }

        if(localStorage.getItem('Escolas')){
          let data = (localStorage.getItem('Escolas'));
          data = JSON.parse(data);
          data.push(escola);

          localStorage.setItem('Escolas', JSON.stringify(data));
        }else{
          localStorage.setItem('Escolas', JSON.stringify([escola]));
        }
        
        e.preventDefault();
        setData(true);

    }

    const PushArray = (e) => {
      setCheckedTurnosIds(Turnos => [...Turnos, e.target.value]);
      checkboxes[parseInt(e.target.id)] = parseInt(e.target.id);
      var check = checkboxes;
      check[parseInt(e.target.id)] = 1;
      setCheckboxes(check);
    }
    
    const PopArray = (e) => {
      setCheckedTurnosIds(checkedTurnosIds.filter(turno => turno !== e.target.value));
      var check = checkboxes;
      check[parseInt(e.target.id)] = -1;
      setCheckboxes(check);

    }

  return (
    <Stack 
    width="100wh"
    height="100vh"
    backgroundColor="gray.100">
      <Navbar/>
      
    <Flex
      width="100%"
      height="100%"
      backgroundColor="gray.100"
      justifyContent="center"
      alignItems="center"
      
    >
    
    <Stack 
    flexDir="column"
    mb="2"
    justifyContent="center"
    alignItems="center">
        
        <Box minW={{base: "100%", md: "100%"}}>
            
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={8}
              p="2rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="lg"
              borderRadius='50px'
            >
            <FormControl isRequired={!(input_escola)}>
                <FormLabel htmlFor='name'>Nome da escola</FormLabel>
                <Input
                    id='name_school'
                    type='name'
                    value={input_escola}
                    onChange={handleInputChangeSchool}
                  
                />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor='name'>Nome do diretor</FormLabel>
                <Input
                    id='name'
                    type='name'
                    value={input_principal}
                    onChange={handleInputChangePrincipal}
                    
                />
                
            </FormControl>
            <FormControl isRequired={(location === 0)}>
                <FormLabel htmlFor='name'>Localização da escola</FormLabel>
                <RadioGroup direction onChange={setLocation} value={location}>
                  <Stack spacing={[2, 4]} 
                  direction={['row']} 
                  >
                    <Radio value='Urbano'>Urbano</Radio>
                    <Radio value='Rural'>Rural</Radio>
                  </Stack>
              </RadioGroup>
            </FormControl>
            
            <FormControl isRequired={!(checkedTurnosIds.length)}>
            <FormLabel>Turno</FormLabel>
            
            <Stack spacing={[1, 4]} 
            direction={['row']} 
            >
                <CheckboxGroup>
                    <Checkbox onChange={checkboxes[0] === -1 ? PushArray : PopArray} value='M' id='0'>Manhã</Checkbox>
                    <Checkbox onChange={checkboxes[1] === -1 ? PushArray : PopArray} value='T' id='1'>Tarde</Checkbox>
                    <Checkbox onChange={checkboxes[2] === -1 ? PushArray : PopArray} value='N' id='2'>Noite</Checkbox>
                    <Checkbox onChange={checkboxes[3] === -1 ? PushArray : PopArray} value='I' id='3'>Integral</Checkbox>
                </CheckboxGroup>
            </Stack>
           
            
            </FormControl>
        
            <Button
            borderRadius={0}
            type="submit"
            variant="solid"
            colorScheme="gray"
            width="full"
            >
            Cadastrar
            </Button>
            </Stack>
          </form>
        </Box>
        {success ? <ModalCadastro/> : <></>}
    </Stack>
    </Flex>
    </Stack>
  );
};

export default Cadastro;
