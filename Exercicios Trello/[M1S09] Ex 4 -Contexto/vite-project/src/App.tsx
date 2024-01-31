import './App.css'
import { HeaderComponent } from './header/headerComponent'
import { BodyComponent } from './body/bodyComponent'
import { FooterComponent } from './footer/footerComponent'
import { ThemeContext } from './context/appContext'

function App() {

  return (
    <>
      <ThemeContext.Provider value={[/* provide the value here */]}>
        <HeaderComponent />
        <BodyComponent />
        <FooterComponent />
      </ThemeContext.Provider>
    </>
  )
}

export default App
