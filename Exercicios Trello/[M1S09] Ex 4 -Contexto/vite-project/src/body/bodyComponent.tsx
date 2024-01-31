
import { useContext } from 'react';
import { ThemeContext } from '../context/appContext';

  export function BodyComponent() {
  const { backgroundColor, setBackgroundColor } = useContext(ThemeContext);

  const handleDarkButtonClick = () => {
    setBackgroundColor('#242424');
  }

  const handleLightButtonClick= () => {
    setBackgroundColor('#242424');
  }

  return (
    <>
        <div style={{ backgroundColor }}>
          <h1>[M1S09] Ex 1 - UseState</h1>
          <hr />
          <button onClick={handleDarkButtonClick}>Mudar Tema Dark</button>
          <button onClick={handleLightButtonClick}>Mudar Tema Light</button>
        </div>
    </>
  )
}
