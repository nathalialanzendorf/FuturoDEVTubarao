import { useEffect, useState } from 'react';

export function Body(){
    const [task, setTask] = useState('');
    const [tasks, setTaskList] = useState([]);

    useEffect(() => {
        document.title = `Você adicionou ${tasks.length} tarefas`;
    }, [tasks])

    const handleAddTask = () => {
        if (task.trim() !== '') {
            setTaskList([...tasks, task]);
            setTask('');
        }
    }

    return (
        <div>
            <span>Você adicionou {tasks.length} tarefas</span>
            <br></br>
            <input
                type='text'
                placeholder='Digite uma tarefa'
                className="task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={handleAddTask}>Adicionar Tarefa</button>

            {tasks.map((task, index) => (
                <div key={index}>
                    <input type="checkbox" id={`task-${index}`} />
                    <label htmlFor={`task-${index}`}>{task}</label>
                </div>
            ))}
        </div>
    )
}

export default Body;