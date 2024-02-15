
import { Box, Button, FormLabel, Input, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useState } from "react";

export function PostWithComments() {
  const [postList, setPostList] = useState<{ id: number; user: string; comment: string }[]>([]);
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");

  const handleCreatePost = () => {
    const id = Math.floor(Math.random() * 1000);
    setPostList([...postList, { id: id, user: user, comment: comment}]);
    console.log("Adicionado post", postList);
    setUser("");
    setComment("");
  };

  return (
    <Box>
      <FormLabel>Usuário</FormLabel>
      <Input 
        onChange={(e) => setUser(e.target.value)}>
      </Input>
      <FormLabel>Comentário</FormLabel>
      <Input 
        onChange={(e) => setComment(e.target.value)}>
      </Input>
      <Button 
        colorScheme="green" 
        onClick={() => handleCreatePost()}
      >
        Salvar
      </Button>
      <Box>
        <TableContainer>
          <Table variant='striped' colorScheme='teal'>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Usuário</Th>
                <Th>Comentário</Th>
              </Tr>
            </Thead>
            <Tbody>
              {postList.length === 0 ?
                 <Tr>
                 <Td colSpan={3} textAlign="center">Nenhum comentário!</Td>
                 </Tr>
              : postList.map((user) => (
                <Tr>
                  <Td>{user.id}</Td>
                  <Td>{user.user}</Td>
                  <Td> {user.comment}</Td>
                </Tr>
               ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
    
  )
}