import React from 'react'
import Header from '../Header'

const startersList =[
    {
        "id": 1,
        "food_name": "Air Fryer Tempura Shrimp",
        "imgUrl": "https://i.ibb.co/hd3J3BF/air-fryer-tempura-shrimp.jpg",
        "description": {
            "ingredients": [
                "1/2 lb large shrimp, peeled and deveined",
                "1/2 cup all-purpose flour",
                "1/2 cup cornstarch",
                "1/2 teaspoon baking powder",
                "1/2 cup cold water",
                "Salt to taste",
                "1 tablespoon soy sauce",
                "1 tablespoon mirin (optional)",
                "1 tablespoon sesame oil",
                "1 egg yolk",
                "Oil spray for air frying"
            ],
            "steps": [
                "In a bowl, combine flour, cornstarch, baking powder, and salt.",
                "Add water, soy sauce, mirin, sesame oil, and egg yolk. Mix until smooth.",
                "Dip shrimp in the batter and shake off excess.",
                "Preheat air fryer to 400°F (200°C).",
                "Spray shrimp with oil and air fry for 8-10 minutes, flipping halfway through."
            ]
        }
    },
    {
        "id": 2,
        "food_name": "Chicken Lollipop",
        "imgUrl": "https://i.ibb.co/FB9Qz6Z/chicken-lollipop.jpg",
        "description": {
            "ingredients": [
                "10 chicken wings",
                "1/2 cup all-purpose flour",
                "1/4 cup corn flour",
                "1 tablespoon ginger-garlic paste",
                "1 tablespoon soy sauce",
                "1/2 teaspoon red chili powder",
                "Salt to taste",
                "Oil for deep frying"
            ],
            "steps": [
                "Cut chicken wings into two parts and discard the tips.",
                "Marinate wings with ginger-garlic paste, soy sauce, red chili powder, and salt. Refrigerate for 1 hour.",
                "In a bowl, mix all-purpose flour and corn flour.",
                "Coat marinated wings in the flour mixture.",
                "Deep fry until golden brown and crispy. Serve hot."
            ]
        }
    },
    {
        "id": 3,
        "food_name": "Crispy Chicken Wings",
        "imgUrl": "https://i.ibb.co/p6TN56r/crispy-chicken-wings.webp",
        "description": {
            "ingredients": [
                "10 chicken wings",
                "1/2 cup all-purpose flour",
                "1/4 cup cornstarch",
                "1/2 teaspoon baking powder",
                "1/2 teaspoon paprika",
                "1/2 teaspoon garlic powder",
                "Salt and pepper to taste",
                "Oil for frying"
            ],
            "steps": [
                "Preheat oven to 400°F (200°C).",
                "In a bowl, mix flour, cornstarch, baking powder, paprika, garlic powder, salt, and pepper.",
                "Coat chicken wings in the flour mixture and place on a baking sheet.",
                "Bake for 45-50 minutes, turning halfway through, until crispy and cooked through."
            ]
        }
    },
    {
        "id": 4,
        "food_name": "Egg Deviled",
        "imgUrl": "https://i.ibb.co/BV1t3kT/egg-deviled.jpg",
        "description": {
            "ingredients": [
                "6 hard-boiled eggs",
                "3 tablespoons mayonnaise",
                "1 teaspoon mustard",
                "1/2 teaspoon vinegar",
                "Salt and pepper to taste",
                "Paprika for garnish"
            ],
            "steps": [
                "Cut eggs in half lengthwise and remove yolks.",
                "In a bowl, mash yolks and mix with mayonnaise, mustard, vinegar, salt, and pepper.",
                "Spoon mixture back into egg whites.",
                "Sprinkle with paprika. Serve chilled."
            ]
        }
    },
    {
        "id": 5,
        "food_name": "Fish Pakora",
        "imgUrl": "https://i.ibb.co/LSJpkL0/Fish-Pakora.webp",
        "description": {
            "ingredients": [
                "1/2 lb boneless fish fillets, cut into bite-sized pieces",
                "1/2 cup chickpea flour (besan)",
                "1 tablespoon rice flour",
                "1/2 tablespoon ginger-garlic paste",
                "1/2 teaspoon turmeric powder",
                "1/2 teaspoon red chili powder",
                "1/2 teaspoon carom seeds (ajwain)",
                "Salt to taste",
                "Water as needed",
                "Oil for frying"
            ],
            "steps": [
                "In a bowl, mix chickpea flour, rice flour, ginger-garlic paste, turmeric powder, red chili powder, carom seeds, and salt.",
                "Add water gradually to make a thick batter.",
                "Dip fish pieces in the batter and fry until golden brown and crispy.",
                "Serve hot with chutney or sauce."
            ]
        }
    },
    {
        "id": 6,
        "food_name": "Fried Calamari",
        "imgUrl": "https://i.ibb.co/2tMhbjT/fried-calamari.webp",
        "description": {
            "ingredients": [
                "1/2 lb calamari rings",
                "1/2 cup all-purpose flour",
                "1/4 cup cornmeal",
                "1/2 teaspoon salt",
                "1/2 teaspoon paprika",
                "1/4 teaspoon garlic powder",
                "Oil for frying",
                "Lemon wedges for serving"
            ],
            "steps": [
                "In a bowl, mix flour, cornmeal, salt, paprika, and garlic powder.",
                "Coat calamari rings in the flour mixture.",
                "Heat oil in a pan. Fry calamari in batches until golden brown and crispy.",
                "Serve hot with lemon wedges."
            ]
        }
    },
    {
        "id": 7,
        "food_name": "Fried Chicken",
        "imgUrl": "https://i.ibb.co/8Df4WD5/Fried-Chicken.jpg",
        "description": {
            "ingredients": [
                "1 whole chicken, cut into pieces",
                "2 cups buttermilk",
                "2 cups all-purpose flour",
                "1 tablespoon salt",
                "1 tablespoon pepper",
                "1 tablespoon paprika",
                "1 tablespoon garlic powder",
                "1 tablespoon onion powder",
                "Oil for frying"
            ],
            "steps": [
                "In a bowl, mix buttermilk, salt, pepper, paprika, garlic powder, and onion powder.",
                "Marinate chicken in the buttermilk mixture for at least 1 hour.",
                "In another bowl, mix flour, salt, pepper, paprika, garlic powder, and onion powder.",
                "Dredge marinated chicken in the flour mixture.",
                "Heat oil in a pan. Fry chicken in batches until golden brown and cooked through."
            ]
        }
    },
    {
        "id": 8,
        "food_name": "Fried Squid Calamari",
        "imgUrl": "https://i.ibb.co/rM56DmN/fried-squid-calamari.jpg",
        "description": {
            "ingredients": [
                "1/2 lb squid rings",
                "1/2 cup all-purpose flour",
                "1/4 cup cornmeal",
                "1/2 teaspoon salt",
                "1/2 teaspoon paprika",
                "1/4 teaspoon garlic powder",
                "Oil for frying",
                "Lemon wedges for serving"
            ],
            "steps": [
                "In a bowl, mix flour, cornmeal, salt, paprika, and garlic powder.",
                "Coat squid rings in the flour mixture.",
                "Heat oil in a pan. Fry squid rings in batches until golden brown and crispy.",
                "Serve hot with lemon wedges."
            ]
        }
    },
    {
        "id": 9,
        "food_name": "Garlic Butter Prawns",
        "imgUrl": "https://i.ibb.co/1bLctTX/Garlic-Butter-Prawns.jpg",
        "description": {
            "ingredients": [
                "1/2 lb large prawns, peeled and deveined",
                "4 tablespoons butter",
                "4 cloves garlic, minced",
                "1/2 teaspoon red chili flakes",
                "1 tablespoon lemon juice",
                "Salt and pepper to taste",
                "Fresh parsley for garnish"
            ],
            "steps": [
                "Heat butter in a pan. Add minced garlic and red chili flakes.",
                "Add prawns and cook until they are pink and opaque.",
                "Add lemon juice, salt, and pepper. Mix well.",
                "Garnish with fresh parsley. Serve hot."
            ]
        }
    },
    {
        "id": 10,
        "food_name": "Ground Beef Tacos",
        "imgUrl": "https://i.ibb.co/7YS6VH5/ground-beef-tacos.jpg",
        "description": {
            "ingredients": [
                "1 lb ground beef",
                "1 onion, chopped",
                "1 bell pepper, chopped",
                "1 packet taco seasoning",
                "1/2 cup water",
                "8 taco shells",
                "1 cup shredded cheese",
                "Lettuce, tomatoes, sour cream for topping"
            ],
            "steps": [
                "In a pan, cook ground beef until browned. Drain excess fat.",
                "Add chopped onion and bell pepper. Cook until vegetables are soft.",
                "Add taco seasoning and water. Simmer until the mixture thickens.",
                "Heat taco shells according to package instructions.",
                "Fill taco shells with beef mixture. Top with shredded cheese, lettuce, tomatoes, and sour cream."
            ]
        }
    },
    {
        "id": 11,
        "food_name": "Lamb Seekh Kabab",
        "imgUrl": "https://i.ibb.co/6wsth8G/Lamb-Seekh-Kabab.webp",
        "description": {
            "ingredients": [
                "1 lb ground lamb",
                "1 onion, finely chopped",
                "2 tablespoons ginger-garlic paste",
                "2 green chilies, chopped",
                "1/2 cup cilantro, chopped",
                "1/2 cup mint leaves, chopped",
                "1/2 tablespoon cumin powder",
                "1/2 tablespoon coriander powder",
                "1/2 tablespoon garam masala",
                "Salt to taste",
                "Oil for grilling"
            ],
            "steps": [
                "In a bowl, mix ground lamb, chopped onion, ginger-garlic paste, green chilies, cilantro, mint leaves, cumin powder, coriander powder, garam masala, and salt.",
                "Divide the mixture into equal portions and shape them onto skewers.",
                "Grill the kababs on a preheated grill until cooked through and browned.",
                "Serve hot with mint chutney."
            ]
        }
    },
    {
        "id": 12,
        "food_name": "Mutton Seekh Kabab",
        "imgUrl": "https://i.ibb.co/Nmk2jsK/Mutton-seekh-kabab.jpg",
        "description": {
            "ingredients": [
                "1 lb ground mutton",
                "1 onion, finely chopped",
                "2 tablespoons ginger-garlic paste",
                "2 green chilies, chopped",
                "1/2 cup cilantro, chopped",
                "1/2 cup mint leaves, chopped",
                "1/2 tablespoon cumin powder",
                "1/2 tablespoon coriander powder",
                "1/2 tablespoon garam masala",
                "Salt to taste",
                "Oil for grilling"
            ],
            "steps": [
                "In a bowl, mix ground mutton, chopped onion, ginger-garlic paste, green chilies, cilantro, mint leaves, cumin powder, coriander powder, garam masala, and salt.",
                "Divide the mixture into equal portions and shape them onto skewers.",
                "Grill the kababs on a preheated grill until cooked through and browned.",
                "Serve hot with mint chutney."
            ]
        }
    },
    {
        "id": 13,
        "food_name": "Samosa",
        "imgUrl": "https://i.ibb.co/R09KxRX/samosa.jpg",
        "description": {
            "ingredients": [
                "For the dough:",
                "2 cups all-purpose flour",
                "1/4 cup oil",
                "Water as needed",
                "Salt to taste",
                "For the filling:",
                "3 potatoes, boiled and mashed",
                "1/2 cup green peas, boiled",
                "1 onion, finely chopped",
                "2 green chilies, chopped",
                "1 tablespoon ginger-garlic paste",
                "1/2 tablespoon cumin seeds",
                "1/2 tablespoon coriander powder",
                "1/2 tablespoon garam masala",
                "Salt to taste",
                "Oil for frying"
            ],
            "steps": [
                "To make the dough, mix flour, oil, salt, and enough water to form a stiff dough. Cover and let it rest for 30 minutes.",
                "For the filling, heat oil in a pan. Add cumin seeds and let them splutter.",
                "Add chopped onion, green chilies, and ginger-garlic paste. Sauté until onions are translucent.",
                "Add mashed potatoes, boiled peas, coriander powder, garam masala, and salt. Mix well.",
                "Divide the dough into small balls. Roll out each ball into a circle and cut it in half.",
                "Form a cone with each half-circle and fill it with the potato mixture. Seal the edges.",
                "Heat oil in a pan. Fry samosas until golden brown and crispy.",
                "Serve hot with chutney."
            ]
        }
    },
    {
        "id": 14,
        "food_name": "Satay Chicken Curry",
        "imgUrl": "https://i.ibb.co/nCFd73N/Satay-Chicken-Curry.webp",
        "description": {
            "ingredients": [
                "For the marinade:",
                "1 lb chicken breast, cut into strips",
                "1/4 cup soy sauce",
                "1/4 cup coconut milk",
                "1 tablespoon curry powder",
                "1 tablespoon honey",
                "1 teaspoon ginger paste",
                "1 teaspoon garlic paste",
                "For the sauce:",
                "1/2 cup coconut milk",
                "1/4 cup peanut butter",
                "1 tablespoon soy sauce",
                "1 tablespoon curry powder",
                "1 tablespoon honey",
                "1 teaspoon ginger paste",
                "1 teaspoon garlic paste",
                "1 tablespoon lime juice",
                "Salt to taste",
                "Oil for grilling"
            ],
            "steps": [
                "In a bowl, mix chicken strips with soy sauce, coconut milk, curry powder, honey, ginger paste, and garlic paste. Marinate for 1-2 hours.",
                "Thread chicken strips onto skewers and grill until cooked through.",
                "For the sauce, mix coconut milk, peanut butter, soy sauce, curry powder, honey, ginger paste, garlic paste, lime juice, and salt in a saucepan. Cook until the sauce thickens.",
                "Serve grilled chicken skewers with satay sauce."
            ]
        }
    },
    {
        "id": 15,
        "food_name": "Seared Scallops",
        "imgUrl": "https://i.ibb.co/Dk6Znyx/seared-scallops.jpg",
        "description": {
            "ingredients": [
                "1 lb scallops",
                "2 tablespoons butter",
                "2 tablespoons olive oil",
                "Salt and pepper to taste",
                "Lemon wedges for serving"
            ],
            "steps": [
                "Pat scallops dry with paper towels and season with salt and pepper.",
                "Heat butter and olive oil in a skillet over medium-high heat.",
                "Add scallops and sear for 2-3 minutes per side, until golden brown and cooked through.",
                "Serve hot with lemon wedges."
            ]
        }
    },
    {
        "id": 16,
        "food_name": "Shrimp Cocktail",
        "imgUrl": "https://i.ibb.co/MZGsYD1/shrimp-cocktail.jpg",
        "description": {
            "ingredients": [
                "For the cocktail sauce:",
                "1/2 cup ketchup",
                "2 tablespoons horseradish",
                "1 tablespoon lemon juice",
                "1 teaspoon Worcestershire sauce",
                "1/2 teaspoon hot sauce",
                "For the shrimp:",
                "1 lb large shrimp, peeled and deveined",
                "1 tablespoon olive oil",
                "Salt and pepper to taste",
                "Lemon wedges for serving"
            ],
            "steps": [
                "To make the cocktail sauce, mix ketchup, horseradish, lemon juice, Worcestershire sauce, and hot sauce in a bowl.",
                "Refrigerate the sauce for at least 30 minutes.",
                "Preheat oven to 400°F (200°C).",
                "Toss shrimp with olive oil, salt, and pepper.",
                "Spread shrimp on a baking sheet and roast for 6-8 minutes, until pink and cooked through.",
                "Serve shrimp with cocktail sauce and lemon wedges."
            ]
        }
    }
]





const Starters = () => {
  return (
    <>
    <Header/>
    <div className='main-container'>
    </div>
    <div className='items-container'>
    <h1 className='item-card-heading'>Starters</h1>
      <ul className='item-card-list'>
        {startersList.map(eachItem=> (
          <li className='item-card'>
            <img src={eachItem.imgUrl} alt="item" className='item-card-img'/>
            <h2 className='item-card-title'>{eachItem.food_name}</h2>
            <h3 className='des_head'>Ingredients</h3>
            {eachItem.description.ingredients.map(each=>(
                <li className='context'>{each}</li>
            ))}
            <h3 className='des_head'>Steps</h3>
            {eachItem.description.steps.map(each=>(
                <li className='context'>{each}</li>
            ))}
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default Starters
