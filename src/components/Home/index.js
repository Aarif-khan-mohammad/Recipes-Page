import React from 'react'
import Header from '../Header'
import './index.css'

const Home = () => {
  return (
    <>
    <video src='food.mp4'  autoPlay loop muted className='video-bg'/>
    <Header/>
    <div className='top-container'>
        <div className='text-container'>
            <h1 className='intro-head'>Welcome to AR Food Recipes, your one-stop shop for culinary adventures around the world!</h1>
            <p className='intro-para'>Here, you'll find a treasure trove of delicious recipes, from the vibrant flavors of India to international favorites.  Whether you're a seasoned cook or just starting out, AR Food Recipes has something to tempt your taste buds.  Let's explore the world of food together!</p>
        </div>
    </div>
      
    </>
  )
}

export default Home
