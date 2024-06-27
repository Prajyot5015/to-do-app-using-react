import React from 'react'
import './TodoCard.css'

function TodoCard({todoItem}) {
  return (
    <div className='todo-card'>
        {todoItem}
    </div>
  )
}

export default TodoCard