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
    const [input_school, setInputSchool] = useState('')
    const [input_principal, setInputPrincipal] = useState('')
    const [success, setData] = useState(false)
    const [location, setLocation] = useState(0)
    
    
    const [checkedTurnosIds, setCheckedTurnosIds] = useState([]);
    const [checkboxes, setCheckboxes] = useState([-1,-1,-1,-1]);

    const handleInputChangeSchool = (e) => setInputSchool(e.target.value)
    const handleInputChangePrincipal = (e) => setInputPrincipal(e.target.value)

    const handleSubmit = (e) => {
      const escola = {
        escola: input_school,
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
      flexDirection="column"
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
        
        <Box minW={{base: "90%", md: "468px"}}>
            
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
              borderRadius='5px'
            >
            <FormControl isRequired={!(input_school)}>
                <FormLabel htmlFor='name'>Nome da escola</FormLabel>
                <Input
                    id='name_school'
                    type='name'
                    value={input_school}
                    onChange={handleInputChangeSchool}
                    placeholder='Ex: Unidade Escolar Professor Darcy Ara??jo'
                />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor='name'>Nome do diretor</FormLabel>
                <Input
                    id='name'
                    type='name'
                    value={input_principal}
                    onChange={handleInputChangePrincipal}
                    placeholder='Ex: Renato F??lix'
                />
                
            </FormControl>
            <FormControl isRequired={(location === 0)}>
                <FormLabel htmlFor='name'>Localiza????o da escola</FormLabel>
                <RadioGroup onChange={setLocation} value={location}>
                  <Stack spacing={[1, 4]} 
                  direction={['column', 'row']} 
                  >
                    <Radio value='1'>Urbano</Radio>
                    <Radio value='2'>Rural</Radio>
                  </Stack>
              </RadioGroup>
            </FormControl>
            
            <FormControl isRequired={!(checkedTurnosIds.length)}>
            <FormLabel>Turnos</FormLabel>
            
            <Stack spacing={[1, 4]} 
            direction={['column', 'row']} 
            >
                <CheckboxGroup>
                    <Checkbox onChange={checkboxes[0] === -1 ? PushArray : PopArray} value='M' id='0'>Manh??</Checkbox>
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
            colorScheme="blue"
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
