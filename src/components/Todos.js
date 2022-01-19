import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Todosstyles from './Todos.module.css'
import ListForm from './ListForm'
import { BsCheckAll } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import { BsThreeDots } from 'react-icons/bs'
import { BsChevronExpand } from 'react-icons/bs'

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
    <div
      className={todo.isComplete ? Todosstyles.complete : Todosstyles.card}
      key={index}
    >
      <div className={Todosstyles.title}>{todo.text}</div>
      <BsCheckAll
        key={todo.id}
        onClick={() => completeTodo(todo.id)}
        className={
          todo.isComplete
            ? Todosstyles.completeCheckIcon
            : Todosstyles.checkIcon
        }
      />
      <BsThreeDots
        onClick={() => setEdit({ id: todo.id, value: todo.text })}
        className={
          todo.isComplete ? Todosstyles.completeIcon : Todosstyles.editIcon
        }
      />
      <Link to={`/listitems/${todo.id}`}>
        <BsChevronExpand
          className={
            todo.isComplete ? Todosstyles.completeIcon : Todosstyles.expandIcon
          }
        />
      </Link>
      <MdClose
        onClick={() => removeTodo(todo.id)}
        className={
          todo.isComplete ? Todosstyles.completeIcon : Todosstyles.deleteIcon
        }
      />
    </div>
  ))
}

export default Todos
