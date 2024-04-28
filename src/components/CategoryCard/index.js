import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const CategoryCard = (props) => {
    const {categoryDetails} = props
    const {category , imgUrl , id} = categoryDetails
  return (
    <Link to={`recipes/${id}`} className="link"><li className='category-card'>
      <img src={imgUrl} alt={category} className='category-card-image'/>
      <p className='category-card-name'>{category}</p>
    </li></Link>
  )
}

export default CategoryCard
