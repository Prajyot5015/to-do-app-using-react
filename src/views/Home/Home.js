import React from 'react'
import './Home.css'
import AddPng from './add.png'
import TodoCard from '../../components/TodoCard/TodoCard'

function Home() {

  const todoList = [
    "Go to gym",
    "Finish Project",
    "Go to gym",
    "Finish Project",
    "Go to gym",
    "Finish Project"
  ]

  return (
    <div>
      <h1 className='app-title'>TO-DO App</h1>

      <div className='todo-list-container'>
        {
          todoList.map((todoItem, i)=>
  
                <TodoCard key={i} todoItem={todoItem} />
              
          )
        }
      </div>

      <div className='add-todo-item-container'>
        <input type='text' className='add-input' placeholder='Add new Task' />
        <img src={AddPng} alt='add' className='add-icon' />
      </div>
    </div>
  )
}

export default Home