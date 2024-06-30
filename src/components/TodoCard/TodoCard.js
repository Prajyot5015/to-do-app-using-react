import React from 'react'
import './TodoCard.css'

function TodoCard({task,category}) {

  const CATEGORU_EMOGI_MAP = {
    sport: "🏓",
    learning: "📚",
    work: "💻",
    personal: "🔐",
    shopping: "🛍️",
    health: "🏥",
    others: "📁"
}

const category_Color = {
  sport: "#bfff80",
  learning: "#4d4dff",
  work: "#86b300",
  personal: "#0099ff",
  shopping: "#ff1ab3",
  health: "#00cc00",
  others: "#ffad33"
}

  return (
    <div className='todo-card'>
        {task} 
        <span 
         className='category'
         style={{backgroundColor: category_Color[category]}}> 
          { CATEGORU_EMOGI_MAP[category]} {category} </span>
    </div>
  )
}

export default TodoCard