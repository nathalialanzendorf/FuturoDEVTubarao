import { useState } from 'react'

export function BodyComponent() {
  const [description, setDescription] = useState('')
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value)
  }

  return (
    <>
      <div>
        <h1>[M1S09] Ex 1 - UseState</h1>
        <hr />

        <input type="text" value={description} onChange={handleInputChange} placeholder='Descrição' />
        <p>Descrição: {description}</p>
      </div>
    </>
  )
}