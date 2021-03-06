import React from 'react'
import { useState } from 'react/cjs/react.development'
import ListItemFormstyles from './ListItemForm.module.css'

function ListItemForm(props) {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    props.onSubmit({
      id: Math.random().toString(36).substr(2, 5),
      text: input,
    })

    setInput('')
  }

  return (
    <div>
      <form className={ListItemFormstyles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="..."
          value={input}
          name="text"
          className={ListItemFormstyles.input}
          onChange={handleChange}
        />
        <button className={ListItemFormstyles.button}>Add Item</button>
      </form>
    </div>
  )
}

export default ListItemForm
