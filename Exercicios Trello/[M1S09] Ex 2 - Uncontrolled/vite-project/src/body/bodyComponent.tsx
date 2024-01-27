import { useRef } from 'react'

export function BodyComponent() {
  const numberRef = useRef<HTMLInputElement>(null)

  const handleButtonClick = () => {
    const number = numberRef.current?.value

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

        <input type="number" ref={numberRef} placeholder='Digite um número' />
        <button onClick={handleButtonClick}>Visualizar</button>
      </div>
    </>
  )
}