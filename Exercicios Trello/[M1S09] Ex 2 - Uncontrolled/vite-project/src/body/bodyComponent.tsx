import { useState } from 'react'

export function BodyComponent() {
  const [number, setNumber] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value)
  }

  const handleButtonClick = () => {
    if (number) {
      alert(`Número: ${number}`)
    } else {
      alert('Digite um número!')
    }
  }

  return (
    <>
      <div>
        <h1>[M1S09] Ex 2 - Uncontrolled</h1>
        <hr />

        <input type="number" value={number} onChange={handleInputChange} placeholder='Digite um número' />
        <button onClick={handleButtonClick}>Visualizar</button>
      </div>
    </>
  )
}