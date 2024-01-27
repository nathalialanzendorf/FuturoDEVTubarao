// import { useEffect } from 'react';
import { useRef, useState, useEffect } from 'react';

export function FormCep(){ 
    const rendered = useRef(0);
    const [cep, setCep] = useState("");
    const [address, setAddress] = useState({});

    function fetchAddressByCep(cep){
        console.log("bUSCOU");
        fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)
        .then((response) => response.json())
        .then((data) => { setAddress(data)})
        .catch(() => console.log("Erro ao buscar CEP"))
        ;
    }

    // useEffect(() => {
    //     fetchAddresByCEP(cep);
    //     console.log("Buscou");
    // }, [cep]);

    

    useEffect(() => {
        // if (address) {
            
        // }
        console.log("Renderizou", rendered.current, " vezes");
        rendered.current = rendered.current++;
    }, [address]);

    return(
        <div>
            <input
                onChange={(e) => setCep(e.target.value)}
                value={cep}
                style={{ padding: "10px", borderRadius: "30px" }}
                type="text"
            />
            <button
                onClick={() => fetchAddressByCep(cep)}
                style={{marginTop: "15px"}}
            >Buscar CEP
            </button>
            
            <span>
                
                {address ? (
                    <div>
                        <p><strong>Rua:</strong> {address.street}</p>
                        <p><strong>Bairro:</strong> {address.neighborhood}</p>
                        <p><strong>Cidade:</strong> {address.city}</p>
                        <p><strong>Estado:</strong> {address.state}</p>
                    </div>
                    ) : (
                    <div>
                        <p>Ocorreu erro ao buscar.</p>
                    </div>
                )}
            </span>
        </div>
    )
}