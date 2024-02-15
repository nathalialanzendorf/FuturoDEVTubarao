import './App.css'
import { Box } from '@chakra-ui/react'
import { HeaderComponent } from './header/headerComponent'
import { FooterComponent } from './footer/footerComponent'
import { BodyComponent } from './body/bodyComponent';

function App() {


  return (
    <Box>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </Box>
  )
}

export default App
