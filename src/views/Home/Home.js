import React, { useState } from 'react'
import './Home.css'
import AddPng from './add.png'
import TodoCard from '../../components/TodoCard/TodoCard'
import toast, { Toaster } from 'react-hot-toast'

function Home() {

  const [todoList, setTodoList] = useState([])

  const [newTask, setNewTask] = useState("")

  const [category, setCategory] = useState("")

  return (
    <div>
      <h1 className='app-title'>TO-DO App</h1>

      <div className='todo-list-container'>
        {
          todoList.map((todoItem, i) =>{
            const {task, category} = todoItem
            return <TodoCard key={i} task={task} category={category} />
          })
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

        <select 
            className='category-select' 
            value={category}
            onChange={(e)=> setCategory(e.target.value)}>
          <option value="">Category</option>
          <option value="learning">Learning</option>
          <option value="sport">Sport</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="shopping">Shopping</option>
          <option value="health">Health</option>
          <option value="others">Others</option>
        </select>

        <img
          src={AddPng}
          alt='add'
          className='add-icon'
          onClick={() => {
            if(newTask === ""){
              toast.error("Task cannot be empty")
              return
            }
            if(category === ""){
              toast.error("Category cannot be empty")
              return
            }


            setTodoList([...todoList, {
              task : newTask,
              category : category
            }])
            setNewTask("")
            setCategory("")
            toast.success("Task added successfully")
          }} />
      </div>
      <Toaster />
    </div>
  )
}

export default Home