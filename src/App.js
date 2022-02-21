import './App.css';
import {useState} from 'react';

function App() {

  const [items, setItems] = useState([
    "Do laundry",
    "Plan meals",
    "Clean car"
  ])

  const [newItem, setNewItem] = useState("")

  const itemNodes = items.map((item, index) => {
    return( <li key={index} >
      <span>{item}</span>
    </li> )
  })

  const handleItemInput = (event) => {
    setNewItem(event.target.value)
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
        <input type="text" id="new-item" value={newItem} onChange={handleItemInput}/>
        <button type='submit'>Save Item</button>
      </form>

      <ul>
        {itemNodes}
      </ul>

    </>
  );
}

export default App;
