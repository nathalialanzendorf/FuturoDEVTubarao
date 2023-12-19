import './App.css'

import { Header } from './components/HeaderComponent'
import { Title } from './components/TitleComponent'
import { Calc } from './components/Math/Index'

function App() {
  let num1 = 5;
  let num2 = 2;

  return (
    <>
    <Header />
    <Title />
    <p>1º Número: {num1}</p>
    <p>2º Número: {num2}</p>
    
    <Calc num1={num1} num2={num2} />
    </>
  )
}

export default App
