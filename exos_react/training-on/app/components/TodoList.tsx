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

    useEffect(() => {
        setTasks([
            { id: 1, title: "Chips", isDone: false },
            { id: 2, title: "Olives", isDone: true },
            { id: 3, title: "Carottes", isDone: false },
        ]);
    }, [])

    return (
        <div className="flex flex-col gap-2 p-2 border-2 border-lime-500 rounded-md">
            <h1 className="text-lg font-semibold">{children}</h1>

            <div className="flex flex-col gap-2 w-1/2">
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
                <div className="p-1">
                    {
                        tasks.map(t =>{
                            return (
                                <div key={t.id} className="flex gap-2">
                                    <input 
                                    type="checkbox" 
                                    id={t.title} 
                                    checked={t.isDone} 
                                    onChange={() => {
                                        setTasks(tasks.map(task => 
                                            task.id === t.id ? { ...task, isDone: !task.isDone } : task
                                        ));
                                    }}
                                    />
                                    <label htmlFor={t.title}>{t.title}</label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}