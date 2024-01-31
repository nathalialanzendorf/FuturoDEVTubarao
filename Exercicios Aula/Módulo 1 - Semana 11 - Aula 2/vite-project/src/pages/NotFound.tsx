
import { Box, Button, Heading, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

export default function Notfound() {

  return (
    <Stack width="60vw" height="60vh" border="1px">
      <Box margin="auto">
        <Heading>Esta página não existe.</Heading>
        <Link to="/auth/login">
            <Button colorScheme="gray">Voltar</Button>
        </Link>
      </Box>
    </Stack>
  );
} 