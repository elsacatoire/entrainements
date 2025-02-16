import type React from "react";
import { useEffect, useState } from "react";
import { Button } from "./CCButton";

type TodoListProps = {
    children: React.ReactNode
}

type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

export  const TodoList: React.FC<TodoListProps> = ({children}) => {

    const [tasks, setTasks] = useState<TaskType[]>([]);
    const [task, setTask] = useState("");

    const addTask = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (task.trim() === "") return;
        const capitalizedTask = task.charAt(0).toUpperCase() + task.slice(1);
        setTasks([...tasks, {id: Date.now(), title: capitalizedTask, isDone: false}]);
        setTask("");
    }

    const deleteTask = (taskId: number) => {
        setTasks(tasks.filter((task) => task.id !== taskId))
    }

    const taskStateUpdate = (taskId: number) => {
        setTasks(tasks.map(task => 
            task.id === taskId ? { ...task, isDone: !task.isDone } : task
        ));
    }

    useEffect(() => {
        setTasks([
            { id: 1, title: "Chips", isDone: false },
            { id: 2, title: "Olives", isDone: true },
            { id: 3, title: "Carottes", isDone: false },
        ]);
    }, [])

    return (
        <div className="main-container">
            <h1 className="main-title">{children}</h1>
            <div className="flex flex-col gap-2">
                <form 
                    className="flex gap-2"
                    onSubmit={(e) => {
                        e.preventDefault();
                        addTask();
                    }}
                >
                    <input 
                        type="text"
                        id="addTask" 
                        className="w-full rounded-md border border-lime-500 text-gray-900 p-2"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <div className="max-sm:">
                        <Button onClick={addTask}>Add</Button>
                    </div>
                </form>
                <div className="flex flex-col gap-1 p-1">
                    {
                        tasks.map(t =>{
                            return (
                                <div key={t.id} className="flex gap-3 items-center">
                                    <input 
                                    type="checkbox" 
                                    id={t.title} 
                                    checked={t.isDone} 
                                    onChange={() => {taskStateUpdate(t.id)}}
                                    />
                                    <label htmlFor={t.title}>{t.title}</label>
                                    <Button iconOnly onClick={() => deleteTask(t.id)} >X</Button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}