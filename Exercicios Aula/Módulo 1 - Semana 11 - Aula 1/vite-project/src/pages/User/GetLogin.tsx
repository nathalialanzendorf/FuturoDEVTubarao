import { Box, Heading, Spinner, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface User {
  login: string,
  bio: string
}

const timeout = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default function GetUser() {
  const { username } = useParams<{ username: string }>();
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
    useEffect(() => {
      async function GetUser(){
        setLoading(true);
        await timeout(4000);
        const req = await fetch(`https://api.github.com/users/${username}`);;
        console.log(req);
        const res = await req.json();
        if (!req.ok) {
          setLoading(false);
          setError("usuário não encontrado");
          return;
        }
        setUser(res);
        setLoading(false);
      }
      GetUser();

      }, [])

  return (
    <Stack width="60vw" height="60vh" border="1px">
      <Box margin="auto">
        <Stack w="fit-content">
          {user && (
            <>
              <Heading>{user?.login}</Heading>
              <Text>{user.bio}</Text>
            </>
          )}
          { loading && (
            <Heading>
              <Spinner
                thickness='4px'
                speed='0.65'
                emptyColor='gray.200'
                color='blue.500'
               size='x1'
                />Carregando...
            </Heading>
          )}
          <div>
            {error && <Text>{error}</Text>}
          </div>
        </Stack>
      </Box>
    </Stack>
  );
}