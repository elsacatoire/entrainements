import type React from "react";
import { useEffect, useState } from "react";

type TodoListProps = {
    children: React.ReactNode
}

export  const TodoList: React.FC<TodoListProps> = ({children}) => {

    const [tasks, setTasks] = useState<{id: number, title: string, isDone: boolean}[]>([]);

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

            <div>
                {
                    tasks.map(t =>{
                        return (
                            <div key={t.id} className="flex gap-2">
                                <input type="checkbox" id={t.title} checked={t.isDone} onChange={() => {
                                    setTasks(tasks.map(task => 
                                        task.id === t.id ? { ...task, isDone: !task.isDone } : task
                                    ));
                                }}/>
                                <label htmlFor={t.title}>{t.title}</label>
                            </div>
                        )
                    } )
                }
            </div>
        </div>
    )
}