import { useState, useEffect } from 'react'

export function BodyComponent() {
  const [description, setDescription] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value)
  }

  const handleCleanClick = () => {
    setDescription('');
  }

  useEffect(() => {
    if (description) {
      console.log(`Descrição: ${description}`);
    }
  }, [description])

  return (
    <>
      <div>
        <h1>[M1S09] Ex 3 - Efeito Colateral</h1>
        <hr />

        <input type="text" value={description} onChange={handleInputChange} placeholder='Descrição' />
        <button onClick={handleCleanClick}>Limpar</button>
      </div>
    </>
  )
}