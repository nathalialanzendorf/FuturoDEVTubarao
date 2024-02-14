import { Box, Button, Text, useColorMode } from "@chakra-ui/react";

export function BodyComponent() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Button onClick={toggleColorMode}>
        Mudar o Tema
      </Button>
      <Text>
        Tema atual: {colorMode === 'light' ? 'Claro' : 'Escuro'}
      </Text>
    </Box>
  )
}