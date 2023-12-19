import { useEffect, useState } from 'react';

export function Body(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Você clicou ${count} vezes`;
    }, [count])

    return (
        <div>
            <span>Você clicou {count} vezes</span>
            <button onClick={() => setCount(count + 1)}>Clique aqui</button>
        </div>
    )
}
    // const handleShowEvent = (event) => {
    //     console.log("Event:", event);
    // };

    // return(
    //     <div onAuxClick={(e) => e.preventDefault()}>
    //         <input type='text' placeholder='Digite uma tarefa' className="task" />
    //         <button onClick={handleShowEvent}>Salvar</button>
    //     </div>
    // )
export default Body;