import { useState } from "react"
import ('./styles.css')

export default function App(params) {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault() //prevent my page to refreshing

    // in order to re render you need to pass a function to change the state
    setTodos((currentTodos) => {
      return[
        ...todos, 
        { id: crypto.randomUUID, title: newItem, completed: false},
      ]
    })
    setNewItem("")
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
    
  }
  
  return (
  <>
  <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New label</label>
      <input value={newItem} 
      onChange={e => setNewItem(e.target.value)} 
      type="text" 
      id="item"></input> 
    </div> 
    <button className="btn">Add</button>
  </form>
  <h1 className="header">Todo List</h1>
  <ul className="list">
    {todos.map(todo => {
      return <li key={todo.id}>
      <label>
        <input type="checkbox" checked={todo.completed}
        onChange={e => toggleTodo(todo.id, e.target.checked)}/>
        {todo.title}
      </label>
      <button className="btn btn-danger">Delete</button>      
    </li>
    })}

  </ul>
  </>
  )
}