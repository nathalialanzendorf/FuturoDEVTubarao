import { Box, Button, Heading, Input, Stack, useToast } from '@chakra-ui/react' 
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const toast = useToast()
  const navigate = useNavigate();
    
  function openNotification () {
    navigate('/dashboard')
    toast({
      title: "Login realizado com sucesso!",
      description: "Você está pronto para acessar",
      status: "success",
      duration: 3000,
      isClosable: true,
    })
  }
  return (
    <Stack width="60vw" height="60vh" border="1px">
      <Box margin="auto">
        <Stack w="fit-content">
          <Heading>DashDev</Heading>
          <Input placeholder="Usuário" />
          <Input placeholder="Senha" />
          <Button colorScheme="blue" onClick={()=>openNotification()}>Logar</Button>
          <Link to="auth/register">
            <Button colorScheme="blue">Cadastrar</Button>
          </Link>
        </Stack>
      </Box>
    </Stack>
  );
}
