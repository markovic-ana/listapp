import React from 'react'
import Liststyles from './List.module.css'
import ListForm from './ListForm'
import Todos from './Todos.js'
import useLocalStorage from './hooks/useLocalStorage'
import { Outlet } from 'react-router-dom'

function List() {
  const [todos, setTodos] = useLocalStorage('todos', [])

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
    console.log(...todos)
  }

  const updateTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    )
  }

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const removeTodo = (id) => {
    setTodos([...todos].filter((todo) => todo.id !== id))
  }

  return (
    <div>
      <ListForm onSubmit={addTodo} />
      <Outlet />
      <div className={Liststyles.todos}>
        <Todos
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  )
}

export default List
