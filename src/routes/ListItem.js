import React from 'react'
import { useParams } from 'react-router-dom'
import { getListItem } from '../functions/getListItems'
import ListItemstyles from './ListItem.module.css'
import ListItemForm from './ListItemForm'
import Items from './Items'
import useLocalStorage from '../hooks/useLocalStorage'

export const ListItem = () => {
  const [items, setItems] = useLocalStorage('items', [])

  const params = useParams()
  const listItem = getListItem(params.id)

  const addItem = (item) => {
    const newItems = [item, ...items]
    setItems(newItems)
  }

  const completeItem = (id) => {
    let updatedItems = items.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete
      }
      return item
    })
    setItems(updatedItems)
  }

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <div className={ListItemstyles.container}>
      <div className={ListItemstyles.top}>{listItem.text}</div>
      <ListItemForm onSubmit={addItem} />
      <Items
        items={items}
        completeItem={completeItem}
        removeItem={removeItem}
      />
    </div>
  )
}
