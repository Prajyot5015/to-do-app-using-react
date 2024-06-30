import React, { useState } from 'react'
import './Home.css'
import AddPng from './add.png'
import TodoCard from '../../components/TodoCard/TodoCard'
import toast, { Toaster } from 'react-hot-toast'

function Home() {

  const [todoList, setTodoList] = useState([])

  const [newTask, setNewTask] = useState("")

  return (
    <div>
      <h1 className='app-title'>TO-DO App</h1>

      <div className='todo-list-container'>
        {
          todoList.map((todoItem, i) =>
            <TodoCard key={i} todoItem={todoItem} />)
        }
        {
          todoList.length === 0 ?
            <p className='message'>No Tast to show please add new Task.</p>
            :
            null
        }
      </div>

      <div className='add-todo-item-container'>
        <input
          type='text'
          className='add-input'
          placeholder='Add new Task'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} />

        <img
          src={AddPng}
          alt='add'
          className='add-icon'
          onClick={() => {
            if(newTask === ""){
              toast.error("Task cannot be empty")
              return
            }

            setTodoList([...todoList, newTask])
            setNewTask("")
            toast.success("Task added successfully")
          }} />
      </div>
      <Toaster />
    </div>
  )
}

export default Home