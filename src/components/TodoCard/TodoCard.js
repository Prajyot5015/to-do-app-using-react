import React from 'react'
import './TodoCard.css'

function TodoCard({task,category}) {

  const CATEGORU_EMOGI_MAP = {
    Sport: "🏓",
    Learning: "📚",
    Work: "💻",
    Personal: "🔐",
    Shopping: "🛍️",
    Health: "🏥",
    Others: "📁"
}

const category_Color = {
  Sport: "#bfff80",
  Learning: "#4d4dff",
  Work: "#86b300",
  Personal: "#0099ff",
  Shopping: "#ff1ab3",
  Health: "#00cc00",
  Others: "#ffad33"
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