import { useState } from 'react';
import { FormCep } from './FormCEP';

export function Body(){
    const [cep, setCep] = useState('');

    const handleFindCep = (event) => {
        setCep(event.target.value);
    };

    return(
        <div>
            <FormCep />
        </div>
    )
}