// Componente que va a listar todas las tareas 
import { useEffect, useState } from "react"
import { getAllTask } from "../api/Task.api";
import  {TaskCard} from './TaskCard'

export function TaskList() {
    const [Task, setTask] = useState([]);

    useEffect(() => {
        async function loadTask() {
            const res = await getAllTask();
            setTask(res.data);
        }
        loadTask();
    }, []);
    return <div className="grid grid-cols-3 gap-3">
        {Task.map(Task =>(
        <TaskCard key={Task.id} Task={Task}/>
        ))}
    </div>;
}

