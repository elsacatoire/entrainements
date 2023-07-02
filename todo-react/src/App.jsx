import ('./styles.css')

export default function App(params) {
  return (
  <>
  <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New label</label>
      <input type="text" id="item"></input>
    </div>
    <button className="btn">Add</button>
  </form>
  <h1 className="header">Todo List</h1>
  <ul className="list">
    <li>
      <label>
      <input type="checkbox"></input>
      item 1
      </label>
      <button className="btn btn-danger">Delete</button>      
    </li>
    <li>
      <label>
      <input type="checkbox"></input>
      item 2
      </label>
      <button className="btn btn-danger">Delete</button>      
    </li>
    

  </ul>
  </>
  )
}