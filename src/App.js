import './App.css';
import {useState} from 'react';

function App() {

  const [items, setItems] = useState([
    {name: "Do laundry", priority: "high"},
    {name: "Plan meals", priority: "high" },
    {name: "Clean car", priority: "low"}
  ])

  const initialValues = {
    name: "",
    priority: ""
  }

  const [newItem, setNewItem] = useState(initialValues)

  const itemNodes = items.map((item, index) => {
    return( <li key={index} className ={item.priority}>
      <span>{item.name}</span>
      <span>{item.priority}</span>
    </li> )
  })

  const handleItemInput = (event) => {
    // setNewItem(event.target.value)
    
    const { name, value } = event.target;
    setNewItem({
      ...newItem,
      [name]: value,
    })
  }

  const saveNewItem = (event) => {
    event.preventDefault()
    const copyItems = [...items, newItem]
    setItems(copyItems)
    setNewItem('')
  } 

  return (
    <>
      <h1>To Do List</h1>

      <form onSubmit={saveNewItem}>
        <input type="text" id="new-item" placeholder="New to do item" value={newItem.name} name="name" onChange={handleItemInput}/>
        <div onChange={handleItemInput}>
          High <input type="radio" value="high" name="priority" /> 
          Low <input type="radio" value="low" name="priority" /> 
        </div>
        <button type='submit'>Save Item</button>
      </form>

      <ul>
        {itemNodes}
      </ul>

    </>
  );
}

export default App;
