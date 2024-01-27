import './style.css'

export function Body(props){
    return(
        <div className='box'>
            
            <span>Sobre</span>
            <span>Blog</span>    
            {props.isLogged}
            <span>Olá name={'João'}</span>
            <span>Olá name={'João'}</span>     
        </div>
    )
}