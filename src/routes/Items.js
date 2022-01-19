import React, { useState } from 'react'
import ListItemForm from './ListItemForm'
import { MdClose } from 'react-icons/md'
import { MdOutlineEditNote } from 'react-icons/md'

function Items({ items, completeItem, updateItem, removeItem }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  })

  return items.map((item, index) => (
    <div
      className={item.isComplete ? 'todo-row completed' : 'todo-row'}
      key={index}
    >
      <div key={item.id} onClick={() => completeItem(item.id)}>
        {item.text}
      </div>
      <div>
        <MdClose onClick={() => removeItem(item.id)} />
      </div>
      <div>
        <MdOutlineEditNote />
      </div>
    </div>
  ))
}

export default Items
