
import { Button, Heading, Input, Stack } from '@chakra-ui/react'
import { Link, To} from 'react-router-dom';

export default function SignUp() {

  return (
    <Stack width="60vw" height="60vh" border="1px">
      <Stack direction="row">
        <Link to={-1 as To}>
        <Button >Voltar</Button>
        </Link>
        <Heading>Cadastre-se</Heading>
      </Stack>

      <Input placeholder="Nome" />
      <Input placeholder="Senha" />
      <Button colorScheme="blue">Cadastrar</Button>
    </Stack>
  );
} 