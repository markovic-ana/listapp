import React, { useState } from 'react'
import ListItemForm from './ListItemForm'
import { MdClose } from 'react-icons/md'
import { MdOutlineEditNote } from 'react-icons/md'
import Itemsstyles from './Items.module.css'

function Items({ items, completeItem, updateItem, removeItem }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  })

  return items.map((item, index) => (
    <div
      className={item.isComplete ? Itemsstyles.completed : Itemsstyles.row}
      key={index}
    >
      <div
        key={item.id}
        onClick={() => completeItem(item.id)}
        className={Itemsstyles.item}
      >
        {item.text}
      </div>
      <div>
        <MdClose
          onClick={() => removeItem(item.id)}
          className={
            item.isComplete ? Itemsstyles.completedIcon : Itemsstyles.deleteIcon
          }
        />
        <MdOutlineEditNote
          className={
            item.isComplete ? Itemsstyles.completedIcon : Itemsstyles.editIcon
          }
        />
      </div>
    </div>
  ))
}

export default Items