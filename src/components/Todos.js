import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Todosstyles from './Todos.module.css'
import ListForm from './ListForm'
import { BsCheckAll } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import { MdOutlineEditNote } from 'react-icons/md'
import { MdOutlineExpandMore } from 'react-icons/md'

function Todos({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  })

  const submitUpdate = (value) => {
    updateTodo(edit.id, value)
    setEdit({ id: null, value: '' })
  }

  if (edit.id) {
    return <ListForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div className={Todosstyles.card} key={index}>
      <div className={Todosstyles.title}>{todo.text}</div>
      <BsCheckAll
        key={todo.id}
        onClick={() => completeTodo(todo.id)}
        className={(todo.isComplete ? 'complete' : '', Todosstyles.checkIcon)}
      />
      <MdClose
        onClick={() => removeTodo(todo.id)}
        className={Todosstyles.deleteIcon}
      />
      <MdOutlineEditNote
        onClick={() => setEdit({ id: todo.id, value: todo.text })}
        className={Todosstyles.editIcon}
      />
      <Link to={`/listitems/${todo.id}`}>
        <MdOutlineExpandMore className={Todosstyles.expandIcon} />
      </Link>
    </div>
  ))
}

export default Todos
