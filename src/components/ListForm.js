import React, { useState } from 'react'
import ListFormstyles from './ListForm.module.css'

function ListForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '')

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
    <form className={ListFormstyles.form} onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <div className={ListFormstyles.editForm}>
            <input
              type="text"
              placeholder="Update Your Title..."
              value={input}
              name="text"
              className={ListFormstyles.inputEdit}
              onChange={handleChange}
            />
            <button className={ListFormstyles.buttonEdit}>Rename</button>
          </div>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Title..."
            value={input}
            name="text"
            className={ListFormstyles.input}
            onChange={handleChange}
          />
          <button className={ListFormstyles.button}>Add List</button>
        </>
      )}
    </form>
  )
}

export default ListForm
