import reactLogo from '../assets/react.svg'
import faviconLogo from '../assets/favicon.ico'
import viteLogo from '../assets/vite.svg';

export function Header(){
    return(
        <div>
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={faviconLogo} className="logo favicon" alt="Favicon logo" />
            </a>
        </div>
    )
}