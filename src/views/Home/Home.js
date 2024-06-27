import React from 'react'
import './Home.css'
import AddPng from './add.png'

function Home() {
  return (
    <div>
      <h1 className='app-title'>TO-DO App</h1>

      <div className='todo-list-container'>
        <h2>List Will go here</h2>
      </div>

      <div className='add-todo-item-container'>
        <input type='text' className='add-input' placeholder='Add new Task' />
        <img src={AddPng} alt='add' className='add-icon' />
      </div>
    </div>
  )
}

export default Home