import React from 'react'
import { useParams } from 'react-router-dom'
import { getListItem } from '../functions/getListItems'
import ListItemstyles from './ListItem.module.css'

export const ListItem = () => {
  let params = useParams()
  let listItem = getListItem(params.id)

  return (
    <div className={ListItemstyles.container}>
      <div className={ListItemstyles.top}>{listItem.text}</div>
    </div>
  )
}
