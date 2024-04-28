import React from 'react'
import Header from '../Header'

const VegList = 
[
    {
        "id": 1,
        "food_name": "Aloo Gobi",
        "imgUrl": "https://i.ibb.co/wr48P0P/Aloo-Gobi.webp",
        "description": {
            "ingredients": [
                "2 potatoes, peeled and cubed",
                "1 cauliflower, cut into florets",
                "1 onion, finely chopped",
                "1 tomato, finely chopped",
                "1 tablespoon ginger-garlic paste",
                "1/2 tablespoon turmeric powder",
                "1/2 tablespoon red chili powder",
                "1/2 tablespoon cumin seeds",
                "1/2 tablespoon garam masala",
                "Salt to taste",
                "Oil for cooking"
            ],
            "steps": [
                "Heat oil in a pan. Add cumin seeds and let them splutter.",
                "Add chopped onions and sauté until they are translucent.",
                "Add ginger-garlic paste and sauté for a few more minutes.",
                "Add chopped tomatoes and cook until they are mushy.",
                "Add turmeric powder, red chili powder, and salt. Mix well.",
                "Add potatoes and cauliflower. Mix gently to coat with the masala.",
                "Cover and cook until the vegetables are tender, stirring occasionally.",
                "Sprinkle garam masala and mix well. Serve hot."
            ]
        }
    },
    {
        "id": 2,
        "food_name": "Aloo Matar",
        "imgUrl": "https://i.ibb.co/VNB600N/aloo-matar-aloo-mutter.jpg",
        "description": {
            "ingredients": [
                "2 potatoes, peeled and cubed",
                "1 cup green peas",
                "1 onion, finely chopped",
                "1 tomato, finely chopped",
                "1 tablespoon ginger-garlic paste",
                "1/2 tablespoon turmeric powder",
                "1/2 tablespoon red chili powder",
                "1/2 tablespoon cumin seeds",
                "1/2 tablespoon garam masala",
                "Salt to taste",
                "Oil for cooking"
            ],
            "steps": [
                "Heat oil in a pan. Add cumin seeds and let them splutter.",
                "Add chopped onions and sauté until they are translucent.",
                "Add ginger-garlic paste and sauté for a few more minutes.",
                "Add chopped tomatoes and cook until they are mushy.",
                "Add turmeric powder, red chili powder, and salt. Mix well.",
                "Add potatoes and green peas. Mix gently to coat with the masala.",
                "Cover and cook until the potatoes are tender, stirring occasionally.",
                "Sprinkle garam masala and mix well. Serve hot."
            ]
        }
    },
    {
        "id": 3,
        "food_name": "Baingan Bharta",
        "imgUrl": "https://i.ibb.co/Xs9f2sb/Baingan-Bharta.jpg",
        "description": {
            "ingredients": [
                "2 large eggplants",
                "1 onion, finely chopped",
                "1 tomato, finely chopped",
                "1 tablespoon ginger-garlic paste",
                "1/2 tablespoon turmeric powder",
                "1/2 tablespoon red chili powder",
                "1/2 tablespoon cumin seeds",
                "1/2 tablespoon garam masala",
                "Salt to taste",
                "Oil for cooking"
            ],
            "steps": [
                "Roast the eggplants over an open flame until the skin is charred and the flesh is soft.",
                "Cool, peel, and mash the roasted eggplants.",
                "Heat oil in a pan. Add cumin seeds and let them splutter.",
                "Add chopped onions and sauté until they are translucent.",
                "Add ginger-garlic paste and sauté for a few more minutes.",
                "Add chopped tomatoes and cook until they are mushy.",
                "Add turmeric powder, red chili powder, and salt. Mix well.",
                "Add mashed eggplants and mix well. Cook for a few more minutes.",
                "Sprinkle garam masala and mix well. Serve hot."
            ]
        }
    },
    {
        "id": 4,
        "food_name": "Bhindi Masala",
        "imgUrl": "https://i.ibb.co/ZYxkQrd/bhindi-masala.jpg",
        "description": {
            "ingredients": [
                "500 grams okra (bhindi), washed and dried",
                "1 onion, finely chopped",
                "1 tomato, finely chopped",
                "1 tablespoon ginger-garlic paste",
                "1/2 tablespoon turmeric powder",
                "1/2 tablespoon red chili powder",
                "1/2 tablespoon cumin seeds",
                "1/2 tablespoon garam masala",
                "Salt to taste",
                "Oil for cooking"
            ],
            "steps": [
                "Trim the ends of the okra and cut them into small pieces.",
                "Heat oil in a pan. Add cumin seeds and let them splutter.",
                "Add chopped onions and sauté until they are translucent.",
                "Add ginger-garlic paste and sauté for a few more minutes.",
                "Add chopped tomatoes and cook until they are mushy.",
                "Add turmeric powder, red chili powder, and salt. Mix well.",
                "Add chopped okra and mix gently to coat with the masala.",
                "Cover and cook until the okra is tender, stirring occasionally.",
                "Sprinkle garam masala and mix well. Serve hot."
            ]
        }
    },
    {
        "id": 5,
        "food_name": "Chana Masala",
        "imgUrl": "https://i.ibb.co/SxB1B3m/Chana-Masala.jpg",
        "description": {
            "ingredients": [
                "2 cups chickpeas (chana), soaked overnight and boiled",
                "1 onion, finely chopped",
                "1 tomato, finely chopped",
                "1 tablespoon ginger-garlic paste",
                "1/2 tablespoon turmeric powder",
                "1/2 tablespoon red chili powder",
                "1/2 tablespoon cumin seeds",
                "1/2 tablespoon garam masala",
                "Salt to taste",
                "Oil for cooking"
            ],
            "steps": [
                "Heat oil in a pan. Add cumin seeds and let them splutter.",
                "Add chopped onions and sauté until they are translucent.",
                "Add ginger-garlic paste and sauté for a few more minutes.",
                "Add chopped tomatoes and cook until they are mushy.",
                "Add turmeric powder, red chili powder, and salt. Mix well.",
                "Add boiled chickpeas and mix well.",
                "Add water if needed and simmer for a few more minutes.",
                "Sprinkle garam masala and mix well. Serve hot."
            ]
        }
    },
    {
        "id": 6,
        "food_name": "Chole Bhature",
        "imgUrl": "https://i.ibb.co/ZfGvM09/chole-bhature.jpg",
        "description": {
            "ingredients": [
                "2 cups chickpeas (chole), soaked overnight and boiled",
                "1 onion, finely chopped",
                "1 tomato, finely chopped",
                "1 tablespoon ginger-garlic paste",
                "1/2 tablespoon turmeric powder",
                "1/2 tablespoon red chili powder",
                "1/2 tablespoon cumin seeds",
                "1/2 tablespoon garam masala",
                "Salt to taste",
                "Oil for cooking"
            ],
            "steps": [
                "Heat oil in a pan. Add cumin seeds and let them splutter.",
                "Add chopped onions and sauté until they are translucent.",
                "Add ginger-garlic paste and sauté for a few more minutes.",
                "Add chopped tomatoes and cook until they are mushy.",
                "Add turmeric powder, red chili powder, and salt. Mix well.",
                "Add boiled chickpeas and mix well.",
                "Add water if needed and simmer for a few more minutes.",
                "Sprinkle garam masala and mix well. Serve hot with bhature."
            ]
        }
    },
    {
        "id": 7,
        "food_name": "Dahi Vada",
        "imgUrl": "https://i.ibb.co/jyycrbs/dahi-vada.jpg",
        "description": {
            "ingredients": [
                "1 cup urad dal, soaked overnight",
                "2 cups yogurt, whisked",
                "1 tablespoon ginger-green chili paste",
                "1/2 tablespoon cumin seeds",
                "1/2 tablespoon black salt",
                "1/2 tablespoon chaat masala",
                "Salt to taste",
                "Oil for frying"
            ],
            "steps": [
                "Grind soaked urad dal into a smooth paste.",
                "Add ginger-green chili paste, cumin seeds, and salt to the batter. Mix well.",
                "Heat oil in a pan. Drop spoonfuls of batter into the hot oil and fry until golden brown.",
                "Soak the fried vadas in water for a few minutes, then gently squeeze out the water.",
                "Arrange the vadas in a serving dish and pour whisked yogurt over them.",
                "Sprinkle black salt and chaat masala over the yogurt. Serve chilled."
            ]
        }
    },
    {
        "id": 8,
        "food_name": "Dal Makhani",
        "imgUrl": "https://i.ibb.co/0F4rd6n/Dal-Makhani.jpg",
        "description": {
            "ingredients": [
                "1/2 cup whole black lentils (urad dal), soaked overnight",
                "1/4 cup red kidney beans (rajma), soaked overnight",
                "1 onion, finely chopped",
                "1 tomato, finely chopped",
                "1 tablespoon ginger-garlic paste",
                "1/2 tablespoon turmeric powder",
                "1/2 tablespoon red chili powder",
                "1/2 tablespoon cumin seeds",
                "1/2 tablespoon garam masala",
                "Salt to taste",
                "Butter for cooking"
            ],
            "steps": [
                "Pressure cook soaked urad dal and rajma until they are soft and cooked.",
                "Heat butter in a pan. Add cumin seeds and let them splutter.",
                "Add chopped onions and sauté until they are translucent.",
                "Add ginger-garlic paste and sauté for a few more minutes.",
                "Add chopped tomatoes and cook until they are mushy.",
                "Add turmeric powder, red chili powder, and salt. Mix well.",
                "Add the cooked dal and rajma. Mix well and simmer for a few more minutes.",
                "Sprinkle garam masala and mix well. Serve hot with rice or roti."
            ]
        }
    },
    {
        "id": 9,
        "food_name": "Dal Fry",
        "imgUrl": "https://i.ibb.co/T41Wjy7/dal-fry-dal-recipe.jpg",
        "description": {
            "ingredients": [
                "1/2 cup yellow lentils (moong dal), washed and soaked for 30 minutes",
                "1 onion, finely chopped",
                "1 tomato, finely chopped",
                "1 tablespoon ginger-garlic paste",
                "1/2 tablespoon turmeric powder",
                "1/2 tablespoon red chili powder",
                "1/2 tablespoon cumin seeds",
                "1/2 tablespoon garam masala",
                "Salt to taste",
                "Oil for cooking"
            ],
            "steps": [
                "Pressure cook soaked moong dal until it is soft and cooked.",
                "Heat oil in a pan. Add cumin seeds and let them splutter.",
                "Add chopped onions and sauté until they are translucent.",
                "Add ginger-garlic paste and sauté for a few more minutes.",
                "Add chopped tomatoes and cook until they are mushy.",
                "Add turmeric powder, red chili powder, and salt. Mix well.",
                "Add the cooked moong dal. Mix well and simmer for a few more minutes.",
                "Sprinkle garam masala and mix well. Serve hot with rice or roti."
            ]
        }
    },
    {
        "id": 10,
        "food_name": "Gobi Manchurian",
        "imgUrl": "https://i.ibb.co/rvqTpSL/gobi-manchurian.jpg",
        "description": {
            "ingredients": [
                "1 cauliflower, cut into florets",
                "1 onion, finely chopped",
                "1 capsicum, finely chopped",
                "1 tablespoon ginger-garlic paste",
                "2 tablespoons soy sauce",
                "1 tablespoon tomato ketchup",
                "1/2 tablespoon red chili sauce",
                "1/2 tablespoon vinegar",
                "1/2 tablespoon sugar",
                "1/2 tablespoon corn flour",
                "Salt to taste",
                "Oil for frying"
            ],
            "steps": [
                "Make a batter using corn flour, salt, and water. Dip cauliflower florets in the batter and fry until golden brown.",
                "Heat oil in a pan. Add chopped onions, capsicum, and ginger-garlic paste. Sauté for a few minutes.",
                "Add soy sauce, tomato ketchup, red chili sauce, vinegar, sugar, and salt. Mix well.",
                "Add fried cauliflower florets and toss until they are coated with the sauce.",
                "Garnish with spring onions and serve hot."
            ]
        }
    },
    {
        "id": 11,
        "food_name": "Jeera Aloo",
        "imgUrl": "https://i.ibb.co/qBBKHSd/jeera-aloo.jpg",
        "description": {
            "ingredients": [
                "4 potatoes, boiled and cubed",
                "1 tablespoon cumin seeds",
                "1/2 tablespoon turmeric powder",
                "1/2 tablespoon red chili powder",
                "1/2 tablespoon cumin powder",
                "1/2 tablespoon coriander powder",
                "1/2 tablespoon garam masala",
                "Salt to taste",
                "Oil for cooking"
            ],
            "steps": [
                "Heat oil in a pan. Add cumin seeds and let them splutter.",
                "Add boiled and cubed potatoes. Mix well.",
                "Add turmeric powder, red chili powder, cumin powder, coriander powder, and salt. Mix well.",
                "Cook for a few more minutes, stirring occasionally.",
                "Sprinkle garam masala and mix well. Serve hot."
            ]
        }
    },
    {
        "id": 12,
        "food_name": "Kadai Paneer",
        "imgUrl": "https://i.ibb.co/DVZccrh/Kadai-Paneer.jpg",
        "description": {
            "ingredients": [
                "200 grams paneer, cubed",
                "1 onion, finely chopped",
                "1 capsicum, finely chopped",
                "1 tomato, finely chopped",
                "1 tablespoon ginger-garlic paste",
                "1/2 tablespoon turmeric powder",
                "1/2 tablespoon red chili powder",
                "1/2 tablespoon cumin powder",
                "1/2 tablespoon coriander powder",
                "1/2 tablespoon garam masala",
                "Salt to taste",
                "Oil for cooking"
            ],
            "steps": [
                "Heat oil in a pan. Add chopped onions and sauté until they are translucent.",
                "Add ginger-garlic paste and sauté for a few more minutes.",
                "Add chopped tomatoes and cook until they are mushy.",
                "Add turmeric powder, red chili powder, cumin powder, coriander powder, and salt. Mix well.",
                "Add chopped capsicum and cook for a few more minutes.",
                "Add cubed paneer and mix gently.",
                "Sprinkle garam masala and mix well. Serve hot."
            ]
        }
    },
    {
        "id": 13,
        "food_name": "Karela Sabzi",
        "imgUrl": "https://i.ibb.co/bsYjGZ9/Karela-Sabzi.jpg",
        "description": {
            "ingredients": [
                "4 bitter gourds (karela), sliced and seeds removed",
                "1 onion, thinly sliced",
                "1 tomato, finely chopped",
                "1 tablespoon ginger-garlic paste",
                "1/2 tablespoon turmeric powder",
                "1/2 tablespoon red chili powder",
                "1/2 tablespoon cumin powder",
                "1/2 tablespoon coriander powder",
                "1/2 tablespoon garam masala",
                "Salt to taste",
                "Oil for cooking"
            ],
            "steps": [
                "Sprinkle salt over the sliced bitter gourd and let it sit for 15 minutes. Squeeze out the excess water.",
                "Heat oil in a pan. Add sliced onions and sauté until they are translucent.",
                "Add ginger-garlic paste and sauté for a few more minutes.",
                "Add chopped tomatoes and cook until they are mushy.",
                "Add turmeric powder, red chili powder, cumin powder, coriander powder, and salt. Mix well.",
                "Add sliced bitter gourd and mix well. Cover and cook until the bitter gourd is tender, stirring occasionally.",
                "Sprinkle garam masala and mix well. Serve hot."
            ]
        }
    },
    {
        "id": 14,
        "food_name": "Malai Kofta",
        "imgUrl": "https://i.ibb.co/TLqK2fK/malai-kofta.jpg",
        "description": {
            "ingredients": [
                "For Koftas:",
                "2 potatoes, boiled and mashed",
                "100 grams paneer, grated",
                "2 tablespoons corn flour",
                "1/2 tablespoon red chili powder",
                "Salt to taste",
                "Oil for frying",
                "For Gravy:",
                "1 onion, finely chopped",
                "1 tomato, finely chopped",
                "1 tablespoon ginger-garlic paste",
                "1/2 cup cashew nuts, soaked and ground to a paste",
                "1/2 cup cream",
                "1/2 tablespoon turmeric powder",
                "1/2 tablespoon red chili powder",
                "1/2 tablespoon cumin powder",
                "1/2 tablespoon coriander powder",
                "1/2 tablespoon garam masala",
                "Salt to taste",
                "Oil for cooking"
            ],
            "steps": [
                "To make koftas, mix mashed potatoes, grated paneer, corn flour, red chili powder, and salt.",
                "Shape the mixture into small balls and fry until golden brown. Keep aside.",
                "To make the gravy, heat oil in a pan. Add chopped onions and sauté until they are translucent.",
                "Add ginger-garlic paste and sauté for a few more minutes.",
                "Add chopped tomatoes and cook until they are mushy.",
                "Add cashew paste, cream, turmeric powder, red chili powder, cumin powder, coriander powder, and salt. Mix well.",
                "Add water if needed and simmer for a few more minutes.",
                "Add fried koftas to the gravy. Sprinkle garam masala and mix gently. Serve hot."
            ]
        }
    },
    {
        "id": 15,
        "food_name": "Matar Paneer",
        "imgUrl": "https://i.ibb.co/6w2Nqpq/Matar-Paneer.webp",
        "description": {
            "ingredients": [
                "200 grams paneer, cubed",
                "1 cup green peas",
                "1 onion, finely chopped",
                "1 tomato, finely chopped",
                "1 tablespoon ginger-garlic paste",
                "1/2 tablespoon turmeric powder",
                "1/2 tablespoon red chili powder",
                "1/2 tablespoon cumin powder",
                "1/2 tablespoon coriander powder",
                "1/2 tablespoon garam masala",
                "Salt to taste",
                "Oil for cooking"
            ],
            "steps": [
                "Heat oil in a pan. Add chopped onions and sauté until they are translucent.",
                "Add ginger-garlic paste and sauté for a few more minutes.",
                "Add chopped tomatoes and cook until they are mushy.",
                "Add turmeric powder, red chili powder, cumin powder, coriander powder, and salt. Mix well.",
                "Add green peas and cook for a few more minutes.",
                "Add cubed paneer and mix gently.",
                "Sprinkle garam masala and mix well. Serve hot."
            ]
        }
    },
    {
        "id": 16,
        "food_name": "Methi Matar Malai",
        "imgUrl": "https://i.ibb.co/xz3hbV4/methi-matar-malai.jpg",
        "description": {
            "ingredients": [
                "1 cup fenugreek leaves (methi), chopped",
                "1 cup green peas",
                "1 onion, finely chopped",
                "1 tomato, finely chopped",
                "1 tablespoon ginger-garlic paste",
                "1/2 cup cream",
                "1/2 tablespoon turmeric powder",
                "1/2 tablespoon red chili powder",
                "1/2 tablespoon cumin powder",
                "1/2 tablespoon coriander powder",
                "1/2 tablespoon garam masala",
                "Salt to taste",
                "Oil for cooking"
            ],
            "steps": [
                "Heat oil in a pan. Add chopped onions and sauté until they are translucent.",
                "Add ginger-garlic paste and sauté for a few more minutes.",
                "Add chopped tomatoes and cook until they are mushy.",
                "Add turmeric powder, red chili powder, cumin powder, coriander powder, and salt. Mix well.",
                "Add chopped fenugreek leaves and green peas. Mix well.",
                "Add cream and mix gently. Cook for a few more minutes.",
                "Sprinkle garam masala and mix well. Serve hot."
            ]
        }
    },
    {
        "id": 17,
        "food_name": "Palak Paneer",
        "imgUrl": "https://i.ibb.co/dbCK2Z6/Palak-Paneer.jpg",
        "description": {
            "ingredients": [
                "200 grams paneer, cubed",
                "2 cups spinach (palak), blanched and pureed",
                "1 onion, finely chopped",
                "1 tomato, finely chopped",
                "1 tablespoon ginger-garlic paste",
                "1/2 tablespoon turmeric powder",
                "1/2 tablespoon red chili powder",
                "1/2 tablespoon cumin powder",
                "1/2 tablespoon coriander powder",
                "1/2 tablespoon garam masala",
                "Salt to taste",
                "Oil for cooking"
            ],
            "steps": [
                "Heat oil in a pan. Add chopped onions and sauté until they are translucent.",
                "Add ginger-garlic paste and sauté for a few more minutes.",
                "Add chopped tomatoes and cook until they are mushy.",
                "Add turmeric powder, red chili powder, cumin powder, coriander powder, and salt. Mix well.",
                "Add spinach puree and mix well. Cook for a few more minutes.",
                "Add cubed paneer and mix gently.",
                "Sprinkle garam masala and mix well. Serve hot."
            ]
        }
    },
    {
        "id": 18,
        "food_name": "Paneer Tikka Masala",
        "imgUrl": "https://i.ibb.co/cyPWCdD/paneer-tikka-masala.jpg",
        "description": {
            "ingredients": [
                "200 grams paneer, cubed",
                "1 onion, finely chopped",
                "1 capsicum, finely chopped",
                "1 tomato, finely chopped",
                "1 tablespoon ginger-garlic paste",
                "2 tablespoons yogurt",
                "1 tablespoon tomato ketchup",
                "1/2 tablespoon red chili powder",
                "1/2 tablespoon cumin powder",
                "1/2 tablespoon coriander powder",
                "1/2 tablespoon garam masala",
                "Salt to taste",
                "Oil for cooking"
            ],
            "steps": [
                "Marinate paneer cubes in yogurt, ginger-garlic paste, red chili powder, cumin powder, coriander powder, and salt for 30 minutes.",
                "Heat oil in a pan. Add marinated paneer cubes and cook until they are golden brown.",
                "Remove the paneer cubes and keep aside.",
                "In the same pan, add chopped onions, capsicum, and ginger-garlic paste. Sauté for a few minutes.",
                "Add chopped tomatoes, tomato ketchup, and salt. Cook until the tomatoes are mushy.",
                "Add the cooked paneer cubes and mix well.",
                "Sprinkle garam masala and mix well. Serve hot."
            ]
        }
    },
    {
        "id": 19,
        "food_name": "Paneer Butter Masala",
        "imgUrl": "https://i.ibb.co/RH4KNf5/Panner-Butter-Masala.jpg",
        "description": {
            "ingredients": [
                "200 grams paneer, cubed",
                "1 onion, finely chopped",
                "1 tomato, finely chopped",
                "1 tablespoon ginger-garlic paste",
                "1/2 cup cashew nuts, soaked and ground to a paste",
                "1/2 cup cream",
                "1/4 cup butter",
                "1/2 tablespoon turmeric powder",
                "1/2 tablespoon red chili powder",
                "1/2 tablespoon cumin powder",
                "1/2 tablespoon coriander powder",
                "1/2 tablespoon garam masala",
                "Salt to taste",
                "Oil for cooking"
            ],
            "steps": [
                "Heat oil in a pan. Add chopped onions and sauté until they are translucent.",
                "Add ginger-garlic paste and sauté for a few more minutes.",
                "Add chopped tomatoes and cook until they are mushy.",
                "Add cashew paste, cream, turmeric powder, red chili powder, cumin powder, coriander powder, and salt. Mix well.",
                "Add cubed paneer and mix gently.",
                "Add butter and mix well. Serve hot."
            ]
        }
    },
    {
        "id": 20,
        "food_name": "Veg Pulao",
        "imgUrl": "https://i.ibb.co/5FYzCQs/pulao-veg-pulao.jpg",
        "description": {
            "ingredients": [
                "1 cup basmati rice, soaked for 30 minutes",
                "1 onion, thinly sliced",
                "1 tomato, finely chopped",
                "1/2 cup mixed vegetables (carrots, peas, beans)",
                "1 tablespoon ginger-garlic paste",
                "1/2 tablespoon turmeric powder",
                "1/2 tablespoon red chili powder",
                "1/2 tablespoon cumin seeds",
                "1/2 tablespoon garam masala",
                "Salt to taste",
                "2 cups water",
                "Oil for cooking"
            ],
            "steps": [
                "Heat oil in a pan. Add cumin seeds and let them splutter.",
                "Add thinly sliced onions and sauté until they are golden brown.",
                "Add ginger-garlic paste and sauté for a few more minutes.",
                "Add chopped tomatoes and cook until they are mushy.",
                "Add mixed vegetables and cook for a few more minutes.",
                "Add turmeric powder, red chili powder, garam masala, and salt. Mix well.",
                "Add soaked basmati rice and mix gently.",
                "Add water and bring to a boil. Reduce heat, cover, and cook until the rice is done.",
                "Serve hot."
            ]
        }
    },
    {
        "id": 21,
        "food_name": "Rajma Masala",
        "imgUrl": "https://i.ibb.co/yp3ShH3/rajma-masala.jpg",
        "description": {
            "ingredients": [
                "1 cup red kidney beans (rajma), soaked overnight and boiled",
                "1 onion, finely chopped",
                "1 tomato, finely chopped",
                "1 tablespoon ginger-garlic paste",
                "1/2 tablespoon turmeric powder",
                "1/2 tablespoon red chili powder",
                "1/2 tablespoon cumin seeds",
                "1/2 tablespoon garam masala",
                "Salt to taste",
                "Oil for cooking"
            ],
            "steps": [
                "Heat oil in a pan. Add cumin seeds and let them splutter.",
                "Add chopped onions and sauté until they are translucent.",
                "Add ginger-garlic paste and sauté for a few more minutes.",
                "Add chopped tomatoes and cook until they are mushy.",
                "Add turmeric powder, red chili powder, and salt. Mix well.",
                "Add boiled rajma and mix well.",
                "Add water if needed and simmer for a few more minutes.",
                "Sprinkle garam masala and mix well. Serve hot with rice or roti."
            ]
        }
    },
    {
        "id": 22,
        "food_name": "Saag Paneer",
        "imgUrl": "https://i.ibb.co/4FfTMxb/Saag-Panner.png",
        "description": {
            "ingredients": [
                "200 grams paneer, cubed",
                "2 cups spinach (palak), blanched and pureed",
                "1 onion, finely chopped",
                "1 tomato, finely chopped",
                "1 tablespoon ginger-garlic paste",
                "1/2 tablespoon turmeric powder",
                "1/2 tablespoon red chili powder",
                "1/2 tablespoon cumin powder",
                "1/2 tablespoon coriander powder",
                "1/2 tablespoon garam masala",
                "Salt to taste",
                "Oil for cooking"
            ],
            "steps": [
                "Heat oil in a pan. Add chopped onions and sauté until they are translucent.",
                "Add ginger-garlic paste and sauté for a few more minutes.",
                "Add chopped tomatoes and cook until they are mushy.",
                "Add turmeric powder, red chili powder, cumin powder, coriander powder, and salt. Mix well.",
                "Add spinach puree and mix well. Cook for a few more minutes.",
                "Add cubed paneer and mix gently.",
                "Sprinkle garam masala and mix well. Serve hot."
            ]
        }
    },
    {
        "id": 23,
        "food_name": "Samosa Chaat",
        "imgUrl": "https://i.ibb.co/Hqq0Chd/Samosa-Chaat.jpg",
        "description": {
            "ingredients": [
                "2 large samosas, chopped",
                "1/2 cup boiled chickpeas (chole)",
                "1/2 cup boiled potatoes, mashed",
                "1 onion, finely chopped",
                "1 tomato, finely chopped",
                "1/4 cup yogurt",
                "1/4 cup tamarind chutney",
                "1/4 cup green chutney",
                "1/2 tablespoon chaat masala",
                "1/2 tablespoon red chili powder",
                "Salt to taste",
                "Coriander leaves for garnishing",
                "Sev for garnishing"
            ],
            "steps": [
                "In a bowl, mix chopped samosas, boiled chickpeas, mashed potatoes, chopped onions, and tomatoes.",
                "Add yogurt, tamarind chutney, green chutney, chaat masala, red chili powder, and salt. Mix well.",
                "Garnish with coriander leaves and sev. Serve immediately."
            ]
        }
    },
    {
        "id": 24,
        "food_name": "Veg Kofta",
        "imgUrl": "https://i.ibb.co/PhFZchP/Veg-Kofta.jpg",
        "description": {
            "ingredients": [
                "For Koftas:",
                "2 potatoes, boiled and mashed",
                "1 carrot, grated",
                "1/2 cup green peas, mashed",
                "2 tablespoons corn flour",
                "1/2 tablespoon red chili powder",
                "Salt to taste",
                "Oil for frying",
                "For Gravy:",
                "1 onion, finely chopped",
                "1 tomato, finely chopped",
                "1 tablespoon ginger-garlic paste",
                "1/2 cup cashew nuts, soaked and ground to a paste",
                "1/2 cup cream",
                "1/4 cup butter",
                "1/2 tablespoon turmeric powder",
                "1/2 tablespoon red chili powder",
                "1/2 tablespoon cumin powder",
                "1/2 tablespoon coriander powder",
                "1/2 tablespoon garam masala",
                "Salt to taste",


                "Oil for cooking"
            ],
            "steps": [
                "To make koftas, mix mashed potatoes, grated carrot, mashed green peas, corn flour, red chili powder, and salt.",
                "Shape the mixture into small balls and fry until golden brown. Keep aside.",
                "To make the gravy, heat oil in a pan. Add chopped onions and sauté until they are translucent.",
                "Add ginger-garlic paste and sauté for a few more minutes.",
                "Add chopped tomatoes and cook until they are mushy.",
                "Add cashew paste, cream, turmeric powder, red chili powder, cumin powder, coriander powder, and salt. Mix well.",
                "Add water if needed and simmer for a few more minutes.",
                "Add fried koftas to the gravy. Sprinkle garam masala and mix gently. Serve hot."
            ]
        }
    },
    {
        "id": 25,
        "food_name": "Vegetable Biryani",
        "imgUrl": "https://i.ibb.co/LhRVtxY/veg-biryani-vegetable-biryani.jpg",
        "description": {
            "ingredients": [
                "1 cup basmati rice, soaked for 30 minutes",
                "1 onion, thinly sliced",
                "1 tomato, finely chopped",
                "1/2 cup mixed vegetables (carrots, peas, beans)",
                "1 tablespoon ginger-garlic paste",
                "1/2 tablespoon turmeric powder",
                "1/2 tablespoon red chili powder",
                "1/2 tablespoon cumin seeds",
                "1/2 tablespoon garam masala",
                "Salt to taste",
                "2 cups water",
                "Oil for cooking"
            ],
            "steps": [
                "Heat oil in a pan. Add cumin seeds and let them splutter.",
                "Add thinly sliced onions and sauté until they are golden brown.",
                "Add ginger-garlic paste and sauté for a few more minutes.",
                "Add chopped tomatoes and cook until they are mushy.",
                "Add mixed vegetables and cook for a few more minutes.",
                "Add turmeric powder, red chili powder, garam masala, and salt. Mix well.",
                "Add soaked basmati rice and mix gently.",
                "Add water and bring to a boil. Reduce heat, cover, and cook until the rice is done.",
                "Serve hot."
            ]
        }
    },
    {
        "id": 26,
        "food_name": "Vegetable Korma",
        "imgUrl": "https://i.ibb.co/1XwRnyF/Vegetable-korma.jpg",
        "description": {
            "ingredients": [
                "1 cup mixed vegetables (carrots, peas, beans)",
                "1 potato, cubed",
                "1 onion, finely chopped",
                "1 tomato, finely chopped",
                "1 tablespoon ginger-garlic paste",
                "1/2 cup coconut milk",
                "1/2 tablespoon turmeric powder",
                "1/2 tablespoon red chili powder",
                "1/2 tablespoon cumin powder",
                "1/2 tablespoon coriander powder",
                "1/2 tablespoon garam masala",
                "Salt to taste",
                "Oil for cooking"
            ],
            "steps": [
                "Heat oil in a pan. Add chopped onions and sauté until they are translucent.",
                "Add ginger-garlic paste and sauté for a few more minutes.",
                "Add chopped tomatoes and cook until they are mushy.",
                "Add turmeric powder, red chili powder, cumin powder, coriander powder, and salt. Mix well.",
                "Add mixed vegetables and cubed potatoes. Mix well.",
                "Add coconut milk and simmer for a few more minutes.",
                "Sprinkle garam masala and mix well. Serve hot."
            ]
        }
    },
    {
        "id": 27,
        "food_name": "Vegetable Pakora",
        "imgUrl": "https://i.ibb.co/7YyyF6B/vegetable-pakora.jpg",
        "description": {
            "ingredients": [
                "1 cup chickpea flour (besan)",
                "1 onion, thinly sliced",
                "1 potato, thinly sliced",
                "1/2 cup spinach leaves, chopped",
                "1/2 cup cauliflower florets",
                "1/2 tablespoon carom seeds (ajwain)",
                "1/2 tablespoon turmeric powder",
                "1/2 tablespoon red chili powder",
                "Salt to taste",
                "Water as needed",
                "Oil for frying"
            ],
            "steps": [
                "In a bowl, mix chickpea flour, carom seeds, turmeric powder, red chili powder, and salt.",
                "Add sliced onions, potatoes, spinach leaves, and cauliflower florets. Mix well.",
                "Add water gradually to make a thick batter.",
                "Heat oil in a pan. Drop spoonfuls of the batter into the hot oil.",
                "Fry until the pakoras are golden brown and crispy.",
                "Serve hot with chutney or sauce."
            ]
        }
    }
]

const Veg = () => {
  return (
    <>
    <Header/>
    <div className='main-container'>
    </div>
    <div className='items-container'>
    <h1 className='item-card-heading'>Veg</h1>
      <ul className='item-card-list'>
        {VegList.map(eachItem=> (
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

export default Veg
