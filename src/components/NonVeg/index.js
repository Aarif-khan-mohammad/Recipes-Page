import React from 'react'
import Header from '../Header'
import './index.css'

const NonvegList = [
      {
          "id": 1,
          "food_name": "Chicken 65",
          "imgUrl": "https://i.ibb.co/P5GKkW8/chicken-65.jpg",
          "description": {
              "ingredients": [
                  "500 grams boneless chicken, cut into small pieces",
                  "2 tablespoons ginger-garlic paste",
                  "1 tablespoon red chili powder",
                  "1/2 tablespoon turmeric powder",
                  "1 tablespoon garam masala",
                  "1 tablespoon lemon juice",
                  "2 tablespoons corn flour",
                  "2 tablespoons rice flour",
                  "Salt to taste",
                  "Oil for deep frying",
                  "Curry leaves, chopped coriander leaves, and lemon wedges for garnishing"
              ],
              "steps": [
                  "In a bowl, mix ginger-garlic paste, red chili powder, turmeric powder, garam masala, lemon juice, corn flour, rice flour, and salt to make a marinade.",
                  "Add chicken pieces to the marinade. Mix well and let it marinate for at least 1 hour.",
                  "Heat oil in a pan for deep frying.",
                  "Fry the marinated chicken pieces in batches until they are golden brown and crispy.",
                  "Garnish with curry leaves, chopped coriander leaves, and lemon wedges. Serve hot."
              ]
          }
      },
      {
          "id": 2,
          "food_name": "Chicken Biryani",
          "imgUrl": "https://i.ibb.co/rs0v7Sk/chicken-biryani.jpg",
          "description": {
              "ingredients": [
                  "500 grams chicken, cut into pieces",
                  "2 cups basmati rice, soaked for 30 minutes",
                  "4 onions, thinly sliced",
                  "1/2 cup yogurt",
                  "2 tablespoons ginger-garlic paste",
                  "1 tablespoon red chili powder",
                  "1/2 tablespoon turmeric powder",
                  "1 tablespoon biryani masala",
                  "1/2 cup chopped mint leaves",
                  "1/2 cup chopped coriander leaves",
                  "Salt to taste",
                  "1/2 cup ghee",
                  "1/2 cup oil",
                  "1/2 cup fried onions",
                  "Saffron strands soaked in milk",
                  "Fried cashews and raisins for garnishing"
              ],
              "steps": [
                  "In a bowl, marinate chicken pieces with yogurt, ginger-garlic paste, red chili powder, turmeric powder, biryani masala, mint leaves, coriander leaves, and salt. Let it marinate for at least 1 hour.",
                  "In a large pot, heat ghee and oil. Add sliced onions and fry until golden brown. Remove half of the fried onions and set aside for garnishing.",
                  "Add marinated chicken to the pot. Cook until chicken is half done.",
                  "Layer soaked rice over the chicken. Add fried onions, saffron milk, and some ghee on top.",
                  "Cover the pot with a tight lid. Cook on low heat until the rice and chicken are fully cooked.",
                  "Garnish with fried cashews and raisins. Serve hot."
              ]
          }
      },
      {
          "id": 3,
          "food_name": "Chicken Chettinad",
          "imgUrl": "https://i.ibb.co/7pCgZM6/chicken-chettinad.jpg",
          "description": {
              "ingredients": [
                  "500 grams chicken, cut into pieces",
                  "2 onions, finely chopped",
                  "2 tomatoes, finely chopped",
                  "1/2 cup grated coconut",
                  "1/2 cup roasted peanuts",
                  "1/2 cup sesame seeds",
                  "1 tablespoon ginger-garlic paste",
                  "1 tablespoon red chili powder",
                  "1/2 tablespoon turmeric powder",
                  "1 tablespoon coriander powder",
                  "1 tablespoon cumin powder",
                  "1 tablespoon fennel seeds",
                  "1 tablespoon poppy seeds",
                  "1/2 cup chopped coriander leaves",
                  "Salt to taste",
                  "Oil for cooking"
              ],
              "steps": [
                  "Dry roast grated coconut, peanuts, sesame seeds, fennel seeds, and poppy seeds. Grind into a fine paste.",
                  "Heat oil in a pan. Add chopped onions and sauté until golden brown.",
                  "Add ginger-garlic paste and sauté for a few more minutes.",
                  "Add chopped tomatoes and cook until they are mushy.",
                  "Add red chili powder, turmeric powder, coriander powder, cumin powder, and salt. Mix well.",
                  "Add chicken pieces and mix well to coat with the masala.",
                  "Add the ground paste and mix well. Add water if needed to adjust the consistency.",
                  "Cover and cook until the chicken is fully cooked and the gravy thickens.",
                  "Garnish with chopped coriander leaves. Serve hot with rice or roti."
              ]
          }
      },
      {
          "id": 4,
          "food_name": "Chicken Fry",
          "imgUrl": "https://i.ibb.co/Q6fnVpx/chicken-fry.jpg",
          "description": {
              "ingredients": [
                  "500 grams chicken, cut into pieces",
                  "1/2 cup yogurt",
                  "1 tablespoon ginger-garlic paste",
                  "1 tablespoon red chili powder",
                  "1/2 tablespoon turmeric powder",
                  "1/2 tablespoon garam masala",
                  "1/2 tablespoon black pepper powder",
                  "Salt to taste",
                  "Oil for frying"
              ],
              "steps": [
                  "In a bowl, mix yogurt, ginger-garlic paste, red chili powder, turmeric powder, garam masala, black pepper powder, and salt.",
                  "Add chicken pieces to the marinade. Mix well and let it marinate for at least 1 hour.",
                  "Heat oil in a pan for frying.",
                  "Fry the marinated chicken pieces in batches until they are golden brown and cooked through.",
                  "Serve hot as a snack or side dish."
              ]
          }
      },
      {
          "id": 5,
          "food_name": "Chicken Ghee Roast",
          "imgUrl": "https://i.ibb.co/1b118c4/chicken-ghee-roast.jpg",
          "description": {
              "ingredients": [
                  "500 grams chicken, cut into pieces",
                  "1/2 cup ghee",
                  "1/2 cup grated coconut",
                  "10-12 dried red chilies",
                  "1 tablespoon coriander seeds",
                  "1/2 tablespoon cumin seeds",
                  "1/2 tablespoon peppercorns",
                  "1/2 tablespoon fenugreek seeds",
                  "1/2 tablespoon turmeric powder",
                  "1 tablespoon tamarind paste",
                  "Salt to taste"
              ],
              "steps": [
                  "Dry roast grated coconut, dried red chilies, coriander seeds, cumin seeds, peppercorns, and fenugreek seeds. Grind into a fine paste with a little water.",
                  "Heat ghee in a pan. Add the ground paste and sauté for a few minutes.",
                  "Add chicken pieces, turmeric powder, tamarind paste, and salt. Mix well.",
                  "Cover and cook until the chicken is fully cooked and the masala coats the chicken well.",
                  "Serve hot with rice or roti."
              ]
          }
      },
      {
          "id": 6,
          "food_name": "Chicken Kheema",
          "imgUrl": "https://i.ibb.co/QX3PwZp/chicken-kheema.jpg",
          "description": {
              "ingredients": [
                  "500 grams chicken mince",
                  "2 onions, finely chopped",
                  "2 tomatoes, finely chopped",
                  "1 tablespoon ginger-garlic paste",
                  "1 tablespoon red chili powder",
                  "1/2 tablespoon turmeric powder",
                  "1 tablespoon coriander powder",
                  "1/2 tablespoon garam masala",
                  "1/2 cup chopped coriander leaves",
                  "Salt to taste",
                  "Oil for cooking"
              ],
              "steps": [
                  "Heat oil in a pan. Add chopped onions and sauté until golden brown.",
                  "Add ginger-garlic paste and sauté for a few more minutes.",
                  "Add chopped tomatoes and cook until they are mushy.",
                  "Add red chili powder, turmeric powder, coriander powder, garam masala, and salt. Mix well.",
                  "Add chicken mince and mix well to break any lumps.",
                  "Cover and cook until the chicken is fully cooked and the masala is well combined.",
                  "Garnish with chopped coriander leaves. Serve hot with rice or roti."
              ]
          }
      },
      {
          "id": 7,
          "food_name": "Chicken Korma",
          "imgUrl": "https://i.ibb.co/Y0PQ9yC/chicken-korma.jpg",
          "description": {
              "ingredients": [
                  "500 grams chicken, cut into pieces",
                  "2 onions, finely sliced",
                  "2 tomatoes, finely chopped",
                  "1/2 cup yogurt",
                  "1 tablespoon ginger-garlic paste",
                  "1 tablespoon red chili powder",
                  "1/2 tablespoon turmeric powder",
                  "1 tablespoon coriander powder",
                  "1/2 tablespoon garam masala",
                  "1/2 cup chopped coriander leaves",
                  "Salt to taste",
                  "Oil for cooking"
              ],
              "steps": [
                  "Heat oil in a pan. Add sliced onions and sauté until golden brown.",
                  "Add ginger-garlic paste and sauté for a few more minutes.",
                  "Add chopped tomatoes and cook until they are mushy.",
                  "Add red chili powder, turmeric powder, coriander powder, garam masala, and salt. Mix well.",
                  "Add chicken pieces and mix well to coat with the masala.",
                  "Add yogurt and mix well. Add water if needed to adjust the consistency.",
                  "Cover and cook until the chicken is fully cooked and the gravy thickens.",
                  "Garnish with chopped coriander leaves. Serve hot with rice or roti."
              ]
          }
      },
      {
          "id": 8,
          "food_name": "Chicken Shawarma",
          "imgUrl": "https://i.ibb.co/r44rw0H/Chicken-Shawarma.jpg",
          "description": {
              "ingredients": [
                  "500 grams boneless chicken, cut into thin strips",
                  "1/2 cup yogurt",
                  "2 tablespoons olive oil",
                  "2 tablespoons lemon juice",
                  "1 tablespoon paprika",
                  "1 tablespoon cumin powder",
                  "1 tablespoon coriander powder",
                  "1 tablespoon garlic powder",
                  "1 tablespoon onion powder",
                  "1/2 tablespoon cinnamon powder",
                  "1/2 tablespoon nutmeg powder",
                  "Salt to taste",
                  "Pita bread, pickled cucumbers, tomatoes, and garlic sauce for serving"
              ],
              "steps": [
                  "In a bowl, mix yogurt, olive oil, lemon juice, paprika, cumin powder, coriander powder, garlic powder, onion powder, cinnamon powder, nutmeg powder, and salt.",
                  "Add chicken strips to the marinade. Mix well and let it marinate for at least 1 hour.",
                  "Preheat a grill pan over medium-high heat. Grill the marinated chicken strips until they are cooked through and have grill marks.",
                  "Warm pita bread. Fill with grilled chicken, pickled cucumbers, tomatoes, and garlic sauce.",
                  "Wrap and serve hot."
              ]
          }
      },
      {
          "id": 9,
          "food_name": "Chicken Tikka Masala",
          "imgUrl": "https://i.ibb.co/VMLFRHR/Chicken-Tikka-Masala-min.jpg",
          "description": {
              "ingredients": [
                  "500 grams boneless chicken, cut into cubes",
                  "1/2 cup yogurt",
                  "2 tablespoons ginger-garlic paste",
                  "2 tablespoons lemon juice",
                  "1 tablespoon red chili powder",
                  "1 tablespoon turmeric powder",
                  "1 tablespoon garam masala",
                  "Salt to taste",
                  "2 tablespoons butter",
                  "2 onions, finely chopped",
                  "2 tomatoes, finely chopped",
                  "1/2 cup tomato puree",
                  "1/2 cup cream",
                  "1/2 cup chopped coriander leaves"
              ],
              "steps": [
                  "In a bowl, mix yogurt, ginger-garlic paste, lemon juice, red chili powder, turmeric powder, garam masala, and salt.",
                  "Add chicken cubes to the marinade. Mix well and let it marinate for at least 1 hour.",
                  "Preheat a grill pan over medium-high heat. Grill the marinated chicken cubes until they are cooked through and have grill marks.",
                  "In a separate pan, heat butter. Add chopped onions and sauté until golden brown.",
                  "Add chopped tomatoes and cook until they are mushy.",
                  "Add tomato puree, cream, and salt. Mix well.",
                  "Add grilled chicken cubes and mix well. Cook for a few more minutes.",
                  "Garnish with chopped coriander leaves. Serve hot with rice or roti."
              ]
          }
      },
      {
          "id": 10,
          "food_name": "Chicken Vindaloo",
          "imgUrl": "https://i.ibb.co/wwHGDJc/chicken-vindaloo.jpg",
          "description": {
              "ingredients": [
                  "500 grams chicken, cut into pieces",
                  "2 onions, finely sliced",
                  "2 tomatoes, finely chopped",
                  "1/2 cup vinegar",
                  "1/2 cup water",
                  "1 tablespoon ginger-garlic paste",
                  "1 tablespoon red chili powder",
                  "1/2 tablespoon turmeric powder",
                  "1 tablespoon coriander powder",
                  "1/2 tablespoon cumin powder",
                  "1/2 tablespoon garam masala",
                  "Salt to taste",
                  "Oil for cooking"
              ],
              "steps": [
                  "Heat oil in a pan. Add sliced onions and sauté until golden brown.",
                  "Add ginger-garlic paste and sauté for a few more minutes.",
                  "Add chopped tomatoes and cook until they are mushy.",
                  "Add red chili powder, turmeric powder, coriander powder, cumin powder, garam masala, and salt. Mix well.",
                  "Add chicken pieces and mix well to coat with the masala.",
                  "Add vinegar and water. Mix well and bring to a boil.",
                  "Reduce heat and simmer until the chicken is fully cooked and the gravy thickens.",
                  "Serve hot with rice or roti."
              ]
          }
      },
      {
          "id": 11,
          "food_name": "Chiken Do Pyaza",
          "imgUrl": "https://i.ibb.co/fMdDV0S/Chiken-do-pyaza.webp",
          "description": {
              "ingredients": [
                  "500 grams chicken, cut into pieces",
                  "2 onions, thinly sliced",
                  "2 tomatoes, finely chopped",
                  "1 tablespoon ginger-garlic paste",
                  "1 tablespoon red chili powder",
                  "1/2 tablespoon turmeric powder",
                  "1 tablespoon coriander powder",
                  "1/2 tablespoon garam masala",
                  "Salt to taste",
                  "Oil for cooking"
              ],
              "steps": [
                  "Heat oil in a pan. Add sliced onions and sauté until golden brown.",
                  "Add ginger-garlic paste and sauté for a few more minutes.",
                  "Add chopped tomatoes and cook until they are mushy.",
                  "Add red chili powder, turmeric powder, coriander powder, garam masala, and salt. Mix well.",
                  "Add chicken pieces and mix well to coat with the masala.",
                  "Cover and cook until the chicken is fully cooked and the gravy thickens.",
                  "Serve hot with rice or roti."
              ]
          }
      },
      {
          "id": 12,
          "food_name": "Egg Curry",
          "imgUrl": "https://i.ibb.co/9b1ydp6/egg-curry.jpg",
          "description": {
              "ingredients": [
                  "6 eggs",
                  "2 onions, finely sliced",
                  "2 tomatoes, finely chopped",
                  "1 tablespoon ginger-garlic paste",
                  "1 tablespoon red chili powder",
                  "1/2 tablespoon turmeric powder",
                  "1 tablespoon coriander powder",
                  "1/2 tablespoon garam masala",
                  "Salt to taste",
                  "Oil for cooking"
              ],
              "steps": [
                  "Boil eggs, peel, and keep aside.",
                  "Heat oil in a pan. Add sliced onions and sauté until golden brown.",
                  "Add ginger-garlic paste and sauté for a few more minutes.",
                  "Add chopped tomatoes and cook until they are mushy.",
                  "Add red chili powder, turmeric powder, coriander powder, garam masala, and salt. Mix well.",
                  "Add boiled eggs and mix well to coat with the masala.",
                  "Cover and cook for a few more minutes.",
                  "Serve hot with rice or roti."
              ]
          }
      },
      {
          "id": 13,
          "food_name": "Fish Molee",
          "imgUrl": "https://i.ibb.co/0mwKTCj/fish-molee.jpg",
          "description": {
              "ingredients": [
                  "500 grams fish fillets",
                  "2 onions, finely sliced",
                  "2 tomatoes, finely chopped",
                  "1/2 cup thick coconut milk",
                  "1/2 cup thin coconut milk",
                  "1 tablespoon ginger-garlic paste",
                  "1 tablespoon red chili powder",
                  "1/2 tablespoon turmeric powder",
                  "1 tablespoon coriander powder",
                  "1/2 tablespoon garam masala",
                  "1/2 cup chopped coriander leaves",
                  "Salt to taste",
                  "Oil for cooking"
              ],
              "steps": [
                  "Heat oil in a pan. Add sliced onions and sauté until golden brown.",
                  "Add ginger-garlic paste and sauté for a few more minutes.",
                  "Add chopped tomatoes and cook until they are mushy.",
                  "Add red chili powder, turmeric powder, coriander powder, garam masala, and salt. Mix well.",
                  "Add fish fillets and mix gently.",
                  "Add thin coconut milk and cook until the fish is almost cooked.",
                  "Add thick coconut milk and simmer for a few more minutes.",
                  "Garnish with chopped coriander leaves. Serve hot with rice."
              ]
          }
      },
      {
          "id": 14,
          "food_name": "Fish Curry",
          "imgUrl": "https://i.ibb.co/RSy1yvT/fish-curry-recipe.jpg",
          "description": {
              "ingredients": [
                  "500 grams fish fillets",
                  "2 onions, finely sliced",
                  "2 tomatoes, finely chopped",
                  "1/2 cup tamarind pulp",
                  "1/2 cup coconut milk",
                  "1 tablespoon ginger-garlic paste",
                  "1 tablespoon red chili powder",
                  "1/2 tablespoon turmeric powder",
                  "1 tablespoon coriander powder",
                  "1/2 tablespoon garam masala",
                  "1/2 cup chopped coriander leaves",
                  "Salt to taste",
                  "Oil for cooking"
              ],
              "steps": [
                  "Heat oil in a pan. Add sliced onions and sauté until golden brown.",
                  "Add ginger-garlic paste and sauté for a few more minutes.",
                  "Add chopped tomatoes and cook until they are mushy.",
                  "Add red chili powder, turmeric powder, coriander powder, garam masala, and salt. Mix well.",
                  "Add tamarind pulp and coconut milk. Mix well.",
                  "Add fish fillets and simmer until the fish is fully cooked.",
                  "Garnish with chopped coriander leaves. Serve hot with rice."
              ]
          }
      },
      {
          "id": 15,
          "food_name": "Fish Fry",
          "imgUrl": "https://i.ibb.co/Bwqckp8/fish-fry-recipe.jpg",
          "description": {
              "ingredients": [
                  "500 grams fish fillets",
                  "1 tablespoon ginger-garlic paste",
                  "1 tablespoon red chili powder",
                  "1/2 tablespoon turmeric powder",
                  "1/2 tablespoon garam masala",
                  "1/2 tablespoon black pepper powder",
                  "1/2 cup rice flour",
                  "1/2 cup besan (gram flour)",
                  "Salt to taste",
                  "Oil for frying"
              ],
              "steps": [
                  "In a bowl, mix ginger-garlic paste, red chili powder, turmeric powder, garam masala, black pepper powder, and salt.",
                  "Add fish fillets to the marinade. Mix well and let it marinate for at least 30 minutes.",
                  "In another bowl, mix rice flour and besan.",
                  "Coat the marinated fish fillets with the flour mixture.",
                  "Heat oil in a pan for frying.",
                  "Fry the coated fish fillets until they are golden brown and crispy.",
                  "Serve hot as a snack or side dish."
              ]
          }
      },
      {
          "id": 16,
          "food_name": "Hyderabadi Biryani with Chicken",
          "imgUrl": "https://i.ibb.co/Wp0rLpg/hyderabadi-biryani-with-chicken.jpg",
          "description": {
              "ingredients": [
                  "500 grams chicken, cut into pieces",
                  "2 cups basmati rice, soaked for 30 minutes",
                  "4 onions, thinly sliced",
                  "1/2 cup yogurt",
                  "2 tablespoons ginger-garlic paste",
                  "1 tablespoon red chili powder",
                  "1/2 tablespoon turmeric powder",
                  "1 tablespoon biryani masala",
                  "1/2 cup chopped mint leaves",
                  "1/2 cup chopped coriander leaves",
                  "Salt to taste",
                  "1/2 cup ghee",
                  "1/2 cup oil",
                  "1/2 cup fried onions",
                  "Saffron strands soaked in milk",
                  "Fried cashews and raisins for garnishing"
              ],
              "steps": [
                  "In a bowl, marinate chicken pieces with yogurt, ginger-garlic paste, red chili powder, turmeric powder, biryani masala, mint leaves, coriander leaves, and salt. Let it marinate for at least 1 hour.",
                  "In a large pot, heat ghee and oil. Add sliced onions and fry until golden brown. Remove half of the fried onions and set aside for garnishing.",
                  "Add marinated chicken to the pot. Cook until chicken is half done.",
                  "Layer soaked rice over the chicken. Add fried onions, saffron milk, and some ghee on top.",
                  "Cover the pot with a tight lid. Cook on low heat until the rice and chicken are fully cooked.",
                  "Garnish with fried cashews and raisins. Serve hot."
              ]
          }
      },
      {
          "id": 17,
          "food_name": "Murg Makhni",
          "imgUrl": "https://i.ibb.co/5cy3ppz/mrg-makhni.jpg",
          "description": {
              "ingredients": [
                  "500 grams chicken, cut into pieces",
                  "2 onions, finely sliced",
                  "2 tomatoes, finely chopped",
                  "1/2 cup cashew nuts, soaked in water",
                  "1/2 cup cream",
                  "1 tablespoon ginger-garlic paste",
                  "1 tablespoon red chili powder",
                  "1/2 tablespoon turmeric powder",
                  "1 tablespoon coriander powder",
                  "1/2 tablespoon garam masala",
                  "1/2 cup chopped coriander leaves",
                  "Salt to taste",
                  "Oil for cooking"
              ],
              "steps": [
                  "Heat oil in a pan. Add sliced onions and sauté until golden brown.",
                  "Add ginger-garlic paste and sauté for a few more minutes.",
                  "Add chopped tomatoes and cook until they are mushy.",
                  "Add cashew nuts and cook for a few more minutes.",
                  "Add red chili powder, turmeric powder, coriander powder, garam masala, and salt. Mix well.",
                  "Remove from heat and let it cool. Blend into a smooth paste.",
                  "Heat the same pan. Add the ground paste and cook for a few minutes.",
                  "Add chicken pieces and mix well to coat with the masala.",
                  "Add cream and mix well. Cook until the chicken is fully cooked and the gravy thickens.",
                  "Garnish with chopped coriander leaves. Serve hot with rice or roti."
              ]
          }
      },
      {
          "id": 18,
          "food_name": "Mutton Curry",
          "imgUrl": "https://i.ibb.co/Tk7dkzG/Mutton-Curry.jpg",
          "description": {
              "ingredients": [
                  "500 grams mutton, cut into pieces",
                  "2 onions, finely sliced",
                  "2 tomatoes, finely chopped",
                  "1/2 cup yogurt",
                  "1 tablespoon ginger-garlic paste",
                  "1 tablespoon red chili powder",
                  "1/2 tablespoon turmeric powder",
                  "1 tablespoon coriander powder",
                  "1/2 tablespoon garam masala",
                  "1/2 cup chopped coriander leaves",
                  "Salt to taste",
                  "Oil for cooking"
              ],
              "steps": [
                  "Heat oil in a pressure cooker. Add sliced onions and sauté until golden brown.",
                  "Add ginger-garlic paste and sauté for a few more minutes.",
                  "Add chopped tomatoes and cook until they are mushy.",
                  "Add red chili powder, turmeric powder, coriander powder, garam masala, and salt. Mix well.",
                  "Add mutton pieces and mix well to coat with the masala.",
                  "Add yogurt and water. Mix well and pressure cook until the mutton is fully cooked.",
                  "Garnish with chopped coriander leaves. Serve hot with rice or roti."
              ]
          }
      },
      {
          "id": 19,
          "food_name": "Mutton Raan Biryani",
          "imgUrl": "https://i.ibb.co/Z2ZGcRT/Mutton-Raan-Biryani.jpg",
          "description": {
              "ingredients": [
                  "1 kg mutton leg (raan)",
                  "4 cups basmati rice, soaked for 30 minutes",
                  "4 onions, thinly sliced",
                  "1/2 cup yogurt",
                  "2 tablespoons ginger-garlic paste",
                  "1 tablespoon red chili powder",
                  "1/2 tablespoon turmeric powder",
                  "1 tablespoon biryani masala",
                  "1/2 cup chopped mint leaves",
                  "1/2 cup chopped coriander leaves",
                  "Salt to taste",
                  "1/2 cup ghee",
                  "1/2 cup oil",
                  "1/2 cup fried onions",
                  "Saffron strands soaked in milk",
                  "Fried cashews and raisins for garnishing"
              ],
              "steps": [
                  "Marinate mutton leg with yogurt, ginger-garlic paste, red chili powder, turmeric powder, biryani masala, mint leaves, coriander leaves, and salt. Let it marinate for at least 4 hours.",
                  "In a large pot, heat ghee and oil. Add sliced onions and fry until golden brown. Remove half of the fried onions and set aside for garnishing.",
                  "Add marinated mutton leg to the pot. Cook until mutton is half done.",
                  "Layer soaked rice over the mutton leg. Add fried onions, saffron milk, and some ghee on top.",
                  "Cover the pot with a tight lid. Cook on low heat until the rice and mutton leg are fully cooked.",
                  "Garnish with fried cashews and raisins. Serve hot."
              ]
          }
      },
      {
          "id": 20,
          "food_name": "Mutton Biryani",
          "imgUrl": "https://i.ibb.co/YdWBbX2/mutton-biryani.jpg",
          "description": {
              "ingredients": [
                  "500 grams mutton, cut into pieces",
                  "2 cups basmati rice, soaked for 30 minutes",
                  "4 onions, thinly sliced",
                  "1/2 cup yogurt",
                  "2 tablespoons ginger-garlic paste",
                  "1 tablespoon red chili powder",
                  "1/2 tablespoon turmeric powder",
                  "1 tablespoon biryani masala",
                  "1/2 cup chopped mint leaves",
                  "1/2 cup chopped coriander leaves",
                  "Salt to taste",
                  "1/2 cup ghee",
                  "1/2 cup oil",
                  "1/2 cup fried onions",
                  "Saffron strands soaked in milk",
                  "Fried cashews and raisins for garnishing"
              ],
              "steps": [
                  "Marinate mutton with yogurt, ginger-garlic paste, red chili powder, turmeric powder, biryani masala, mint leaves, coriander leaves, and salt. Let it marinate for at least 4 hours.",
                  "In a large pot, heat ghee and oil. Add sliced onions and fry until golden brown. Remove half of the fried onions and set aside for garnishing.",
                  "Add marinated mutton to the pot. Cook until mutton is half done.",
                  "Layer soaked rice over the mutton. Add fried onions, saffron milk, and some ghee on top.",
                  "Cover the pot with a tight lid. Cook on low heat until the rice and mutton are fully cooked.",
                  "Garnish with fried cashews and raisins. Serve hot."
              ]
          }
      },
      {
          "id": 21,
          "food_name": "Nalli Neheri",
          "imgUrl": "https://i.ibb.co/B2w9LNR/Nalli-Neheri.jpg",
          "description": {
              "ingredients": [
                  "500 grams lamb shanks (nalli)",
                  "2 onions, finely sliced",
                  "2 tomatoes, finely chopped",
                  "1/2 cup yogurt",
                  "1 tablespoon ginger-garlic paste",
                  "1 tablespoon red chili powder",
                  "1/2 tablespoon turmeric powder",
                  "1 tablespoon coriander powder",
                  "1/2 tablespoon garam masala",
                  "1/2 cup chopped coriander leaves",
                  "Salt to taste",
                  "Oil for cooking"
              ],
              "steps": [
                  "Heat oil in a pressure cooker. Add sliced onions and sauté until golden brown.",
                  "Add ginger-garlic paste and sauté for a few more minutes.",
                  "Add chopped tomatoes and cook until they are mushy.",
                  "Add red chili powder, turmeric powder, coriander powder, garam masala, and salt. Mix well.",
                  "Add lamb shanks and mix well to coat with the masala.",
                  "Add yogurt and water. Mix well and pressure cook until the lamb shanks are fully cooked.",
                  "Garnish with chopped coriander leaves. Serve hot with rice or roti."
              ]
          }
      },
      {
          "id": 22,
          "food_name": "Prawn Curry",
          "imgUrl": "https://i.ibb.co/h7t6MNL/Prawn-Curry.jpg",
          "description": {
              "ingredients": [
                  "500 grams prawns, cleaned and deveined",
                  "2 onions, finely sliced",
                  "2 tomatoes, finely chopped",
                  "1/2 cup coconut milk",
                  "1 tablespoon ginger-garlic paste",
                  "1 tablespoon red chili powder",
                  "1/2 tablespoon turmeric powder",
                  "1 tablespoon coriander powder",
                  "1/2 tablespoon garam masala",
                  "1/2 cup chopped coriander leaves",
                  "Salt to taste",
                  "Oil for cooking"
              ],
              "steps": [
                  "Heat oil in a pan. Add sliced onions and sauté until golden brown.",
                  "Add ginger-garlic paste and sauté for a few more minutes.",
                  "Add chopped tomatoes and cook until they are mushy.",
                  "Add red chili powder, turmeric powder, coriander powder, garam masala, and salt. Mix well.",
                  "Add prawns and mix gently.",
                  "Add coconut milk and simmer until the prawns are fully cooked.",
                  "Garnish with chopped coriander leaves. Serve hot with rice."
              ]
          }
      },
      {
          "id": 23,
          "food_name": "Prawns Fry",
          "imgUrl": "https://i.ibb.co/RQQ8Pfz/prawns-fry.jpg",
          "description": {
              "ingredients": [
                  "500 grams prawns, cleaned and deveined",
                  "1 tablespoon ginger-garlic paste",
                  "1 tablespoon red chili powder",
                  "1/2 tablespoon turmeric powder",
                  "1/2 tablespoon garam masala",
                  "1/2 tablespoon black pepper powder",
                  "1/2 cup rice flour",
                  "1/2 cup besan (gram flour)",
                  "Salt to taste",
                  "Oil for frying"
              ],
              "steps": [
                  "In a bowl, mix ginger-garlic paste, red chili powder, turmeric powder, garam masala, black pepper powder, and salt.",
                  "Add prawns to the marinade. Mix well and let it marinate for at least 30 minutes.",
                  "In another bowl, mix rice flour and besan.",
                  "Coat the marinated prawns with the flour mixture.",
                  "Heat oil in a pan for frying.",
                  "Fry the coated prawns until they are golden brown and crispy.",
                  "Serve hot as a snack or side dish."
              ]
          }
      },
      {
          "id": 24,
          "food_name": "Reshmi Kabab",
          "imgUrl": "https://i.ibb.co/8zXLP2y/reshmi-kabab.jpg",
          "description": {
              "ingredients": [
                  "500 grams chicken breast, boneless and skinless",
                  "1/2 cup cashew nuts, soaked in water",
                  "1/2 cup cream",
                  "1 tablespoon ginger-garlic paste",
                  "1 tablespoon green chili paste",
                  "1 tablespoon coriander powder",
                  "1/2 tablespoon cumin powder",
                  "1/2 tablespoon garam masala",
                  "1/2 cup chopped coriander leaves",
                  "Salt to taste",
                  "Oil for cooking"
              ],
              "steps": [
                  "In a blender, combine chicken breast, cashew nuts, cream, ginger-garlic paste, green chili paste, coriander powder, cumin powder, garam masala, coriander leaves, and salt. Blend into a smooth paste.",
                  "Take small portions of the mixture and shape them into kababs.",
                  "Heat oil in a pan. Shallow fry the kababs until they are cooked through and golden brown on all sides.",
                  "Serve hot with mint chutney."
              ]
          }
      },
      {
          "id": 25,
          "food_name": "Rogan Josh",
          "imgUrl": "https://i.ibb.co/0y223J7/Rogan-Josh.webp",
          "description": {
              "ingredients": [
                  "500 grams mutton, cut into pieces",
                  "2 onions, finely sliced",
                  "2 tomatoes, finely chopped",
                  "1/2 cup yogurt",
                  "1 tablespoon ginger-garlic paste",
                  "1 tablespoon red chili powder",
                  "1/2 tablespoon turmeric powder",
                  "1 tablespoon coriander powder",
                  "1/2 tablespoon garam masala",
                  "1/2 cup chopped coriander leaves",
                  "Salt to taste",
                  "Oil for cooking"
              ],
              "steps": [
                  "Heat oil in a pressure cooker. Add sliced onions and sauté until golden brown.",
                  "Add ginger-garlic paste and sauté for a few more minutes.",
                  "Add chopped tomatoes and cook until they are mushy.",
                  "Add red chili powder, turmeric powder, coriander powder, garam masala, and salt. Mix well.",
                  "Add mutton pieces and mix well to coat with the masala.",
                  "Add yogurt and water. Mix well and pressure cook until the mutton is fully cooked.",
                  "Garnish with chopped coriander leaves. Serve hot with rice or roti."
              ]
          }
      },
      {
          "id": 26,
          "food_name": "Rogan Josh Recipe",
          "imgUrl": "https://i.ibb.co/4fZMYj4/rogan-josh-recipe.jpg",
          "description": {
              "ingredients": [
                  "500 grams mutton, cut into pieces",
                  "2 onions, finely sliced",
                  "2 tomatoes, finely chopped",
                  "1/2 cup yogurt",
                  "1 tablespoon ginger-garlic paste",
                  "1 tablespoon red chili powder",
                  "1/2 tablespoon turmeric powder",
                  "1 tablespoon coriander powder",
                  "1/2 tablespoon garam masala",
                  "1/2 cup chopped coriander leaves",
                  "Salt to taste",
                  "Oil for cooking"
              ],
              "steps": [
                  "Heat oil in a pressure cooker. Add sliced onions and sauté until golden brown.",
                  "Add ginger-garlic paste and sauté for a few more minutes.",
                  "Add chopped tomatoes and cook until they are mushy.",
                  "Add red chili powder, turmeric powder, coriander powder, garam masala, and salt. Mix well.",
                  "Add mutton pieces and mix well to coat with the masala.",
                  "Add yogurt and water. Mix well and pressure cook until the mutton is fully cooked.",
                  "Garnish with chopped coriander leaves. Serve hot with rice or roti."
              ]
          }
      },
      {
          "id": 27,
          "food_name": "Seekh Kebab",
          "imgUrl": "https://i.ibb.co/tbPTwHX/Seekh-Kebab.webp",
          "description": {
              "ingredients": [
                  "500 grams mutton, minced",
                  "2 onions, finely chopped",
                  "2 green chilies, finely chopped",
                  "1/2 cup chopped coriander leaves",
                  "1 tablespoon ginger-garlic paste",
                  "1 tablespoon red chili powder",
                  "1/2 tablespoon turmeric powder",
                  "1 tablespoon coriander powder",
                  "1/2 tablespoon garam masala",
                  "1/2 tablespoon cumin powder",
                  "Salt to taste",
                  "Oil for cooking"
              ],
              "steps": [
                  "In a bowl, combine minced mutton, chopped onions, green chilies, coriander leaves, ginger-garlic paste, red chili powder, turmeric powder, coriander powder, garam masala, cumin powder, and salt. Mix well.",
                  "Take a portion of the mixture and shape it onto skewers to form kebabs.",
                  "Cook the kebabs on a hot grill or tawa, turning occasionally, until they are cooked through and charred.",
                  "Serve hot with mint chutney and onion rings."
              ]
          }
      },
      {
          "id": 28,
          "food_name": "Tandoori Chicken",
          "imgUrl": "https://i.ibb.co/Mcqs11D/Tandoori-Chicken.webp",
          "description": {
              "ingredients": [
                  "500 grams chicken drumsticks",
                  "1/2 cup yogurt",
                  "1 tablespoon ginger-garlic paste",
                  "1 tablespoon red chili powder",
                  "1/2 tablespoon turmeric powder",
                  "1/2 tablespoon garam masala",
                  "1 tablespoon coriander powder",
                  "1/2 tablespoon cumin powder",
                  "1/2 tablespoon kasuri methi (dried fenugreek leaves)",
                  "1/2 tablespoon chaat masala",
                  "Salt to taste",
                  "Oil for cooking"
              ],
              "steps": [
                  "In a bowl, combine yogurt, ginger-garlic paste, red chili powder, turmeric powder, garam masala, coriander powder, cumin powder, kasuri methi, chaat masala, and salt. Mix well.",
                  "Add chicken drumsticks to the marinade. Mix well and let it marinate for at least 2 hours.",
                  "Preheat the oven to 200°C.",
                  "Place the marinated chicken drumsticks on a baking tray and bake for 25-30 minutes, or until cooked through and charred.",
                  "Serve hot with mint chutney and onion rings."
              ]
          }
      }
]



const NonVeg = () => {
  return (
    <>
    <Header/>
    <div className='main-container'>
    </div>
    <div className='items-container'>
    <h1 className='item-card-heading'>Non Veg</h1>
      <ul className='item-card-list'>
        {NonvegList.map(eachItem=> (
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

export default NonVeg
