import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

const ModalCadastro = () => {
  const { onOpen } = useDisclosure();

  function reload(e) {
    window.location.reload();
  }

  return (
    <>
      <Modal isOpen={onOpen} onClose={reload}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sucesso!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Cadastro realizado com sucesso.</Text>
          </ModalBody>
          <ModalFooter justifyContent={"center"}></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalCadastro;
