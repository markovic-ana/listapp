import React from 'react'
import { useParams } from 'react-router-dom'
import { getListItem } from '../functions/getListItems'
import ListItemstyles from './ListItem.module.css'
import ListItemForm from './ListItemForm'
import Items from './Items'
import { useEffect, useState } from 'react/cjs/react.development'

export const ListItem = () => {
  const [list, setList] = useState([])
  const [items, setItems] = useState([])
  const params = useParams()
  const listItem = getListItem(params.id)
  const listID = params.id

  useEffect(() => {
    const getListFromLS = JSON.parse(localStorage.getItem('todos'))

    const checkID = (list) => list.id === listID
    const matchingList = getListFromLS.filter(checkID)

    if (matchingList) {
      setList(matchingList[0])
    }
  }, [])

  useEffect(() => {
    if (list) {
      list['items'] = []
      list['items'].push(items)
      const dataFromStorage = JSON.parse(localStorage.getItem('todos'))
      const index = dataFromStorage.findIndex((d) => d.id === list.id)
      dataFromStorage[index] = Object.assign({}, dataFromStorage[index], list)
      localStorage.setItem('todos', JSON.stringify(dataFromStorage))
    }
  }, [items])

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
