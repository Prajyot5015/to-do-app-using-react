import React from 'react'
import './TodoCard.css'

function TodoCard({task,category}) {
  return (
    <div className='todo-card'>
        {task} 
        <span className='category'> {category} </span>
    </div>
  )
}

export default TodoCard