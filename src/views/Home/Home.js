import React, { useEffect, useState } from 'react'
import './Home.css'
import AddPng from './add.png'
import TodoCard from '../../components/TodoCard/TodoCard'
import toast, { Toaster } from 'react-hot-toast'
import Swal from 'sweetalert2'

function Home() {

  const [todoList, setTodoList] = useState([])

  const [newTask, setNewTask] = useState("")

  const [category, setCategory] = useState("")

  useEffect(() => {
    const savedTOdoList = localStorage.getItem("todoList")
    if (savedTOdoList) {
      setTodoList(JSON.parse(savedTOdoList))
    }
  }, [])

  useEffect(() => {
    if (todoList.length === 0) return

    localStorage.setItem("todoList", JSON.stringify(todoList))
  }, [todoList])

  function deleteItem(index) {
    Swal.fire({
      title: "Are you sure ?",
      text: "You want to delete this task!",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (!result.isConfirmed) {
        return
      }
      const newToDoList = todoList.filter((item, i) => {
        if (i !== index) {
          return true
        }
        else {
          return false
        }
      })
      setTodoList(newToDoList)
    })
  }

  return (
    <div>
      <h1 className='app-title'>TO-DO App</h1>

      <div className='todo-list-container'>
        {
          todoList.map((todoItem, i) => {
            const { task, category } = todoItem
            return <TodoCard key={i} index={i} task={task} category={category}
              deleteItem={deleteItem} />
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

        <div className='select-add-container'> 
          <select
            className='category-select'
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
            <option value="">Category</option>
            <option value="Learning">Learning</option>
            <option value="Sport">Sport</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Shopping">Shopping</option>
            <option value="Health">Health</option>
            <option value="Others">Others</option>
          </select>

          <img
            src={AddPng}
            alt='add'
            className='add-icon'
            onClick={() => {
              if (newTask === "") {
                toast.error("Task cannot be empty")
                return
              }
              if (category === "") {
                toast.error("Category cannot be empty")
                return
              }


              setTodoList([...todoList, {
                task: newTask,
                category: category
              }])
              setNewTask("")
              setCategory("")
              toast.success("Task added successfully")
            }} />
        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default Home