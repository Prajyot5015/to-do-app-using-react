import React from 'react'
import './Home.css'

function Home() {
  return (
    <div>
        <h1 className='app-title'>TO-DO App</h1>

        <div className='todo-list-container'>
            <h2>List Will go here</h2>
        </div>

        <div>
            <input type='text' />
        </div>
    </div>
  )
}

export default Home