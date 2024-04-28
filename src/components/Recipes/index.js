import React from 'react'
import Header from '../Header'
import './index.css'
import CategoryCard from '../CategoryCard'

const categoryList = [
  {
    "category": "Non-Veg Items",
    "id": "non-veg",
    "imgUrl": "https://i.ibb.co/dJ0LX7T/top-view-arrangement-with-delicious-pakistan-meal.jpg"
  },
  {
    "category": "Veg Items",
    "id": "veg",
    "imgUrl": "https://i.ibb.co/YtwgDww/top-view-indian-food-bowl.webp"
  },
  {
    "category": "Starters",
    "id": "starters",
    "imgUrl": "https://i.ibb.co/VQWChX0/top-view-chicken-skewers-with-sauce-chips-plate.webp"
  },
  {
    "category": "Desserts",
    "id": "desserts",
    "imgUrl": "https://i.ibb.co/qWn4fCv/top-view-little-creamy-cakes-with-candies-dark-grey-surface-dessert-cake-biscuit-color-candy-cookie.webp"
  }
]


const Recipes = () => {
  return (
    <>
    <Header/>
    <div className='recipes'>
    </div>
    <h1 className='recipe-head'>Recipe Categories</h1>
    <ul className='categories-list'>
        {categoryList.map(each => (
            <CategoryCard categoryDetails={each} key={each.id} />
        ))}
    </ul> 
    </>
  )
}

export default Recipes
