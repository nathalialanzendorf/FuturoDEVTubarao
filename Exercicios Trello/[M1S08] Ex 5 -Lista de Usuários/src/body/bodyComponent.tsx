
import { Box, Button, FormLabel, Input, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useState } from "react";

export function BodyComponent() {
  const [userList, setUserList] = useState<{ id: number; name: string; email: string }[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleCreateUser = () => {
    const id = Math.floor(Math.random() * 1000);
    setUserList([...userList, { name: name, id: id, email: email}]);
    console.log("Adicionado item", userList);
    setName("");
    setEmail("");
  };

  return (
    <Box>
      <FormLabel>Nome</FormLabel>
      <Input 
        onChange={(e) => setName(e.target.value)}>
      </Input>
      <FormLabel>Email</FormLabel>
      <Input 
        onChange={(e) => setEmail(e.target.value)}>
      </Input>
      <Button 
        colorScheme="green" 
        onClick={() => handleCreateUser()}
      >
        Salvar
      </Button>
      <Box>
        <TableContainer>
          <Table variant='striped' colorScheme='teal'>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Nome</Th>
                <Th>Email</Th>
              </Tr>
            </Thead>
            <Tbody>
              {userList.length === 0 ?
                 <Tr>
                 <Td colSpan={3} textAlign="center">Nenhuma usuário cadastrado!</Td>
                 </Tr>
              : userList.map((user) => (
                <Tr>
                  <Td>{user.id}</Td>
                  <Td>{user.name}</Td>
                  <Td> {user.email}</Td>
                </Tr>
               ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
    
  )
}