import React from 'react'
import Header from '../Header'
import './index.css'

const NotFound = () => {
  return (
    <>
        <Header/>
        <div className='not-found'>
        </div>
        <div className='not-found-container'>
            <h1 className='not-found-text'>Not Found</h1><br/>
            <div>
            <span className='error'>4</span><img src='https://i.ibb.co/0DvZ5r8/empty-wooden-bowl-isolated-white-background.jpg' 
            className='bowl' alt="bowl"/><span className='error1'>4</span>
            </div>
            
        </div>
    </>
  )
}

export default NotFound
