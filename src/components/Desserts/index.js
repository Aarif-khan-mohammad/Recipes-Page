import React from 'react'
import Header from '../Header'

const DessertsList = [
        {
            "id": 1,
            "category": "dessert",
            "food_name": "Apple Pie",
            "imgUrl": "https://i.ibb.co/tp4KxJK/Apple-Pie.webp",
            "description": {
                "ingredients": [
                    "6 cups sliced apples",
                    "3/4 cup white sugar",
                    "1 teaspoon ground cinnamon",
                    "1/4 teaspoon ground nutmeg",
                    "1/2 cup water",
                    "1 tablespoon cornstarch",
                    "1 tablespoon butter",
                    "1 recipe pastry for a 9-inch double-crust pie"
                ],
                "steps": [
                    "Preheat oven to 425 degrees F (220 degrees C).",
                    "Mix sugar, cinnamon, nutmeg, and cornstarch. Add to sliced apples and mix well.",
                    "Line pie dish with one pie crust. Fill with apple mixture, and top with the other crust. Seal edges and cut steam vents in top crust.",
                    "Bake in preheated oven for 45 to 50 minutes, or until crust is golden brown and filling is bubbly."
                ]
            }
        },
        {
            "id": 2,
            "category": "dessert",
            "food_name": "Apple Raisin Strudel",
            "imgUrl": "https://i.ibb.co/1fcNRbx/Apple-Raisin-Strudel.webp",
            "description": {
                "ingredients": [
                    "4 large apples - peeled, cored and chopped",
                    "1/2 cup raisins",
                    "1/2 cup chopped walnuts",
                    "1/2 cup white sugar",
                    "1 teaspoon ground cinnamon",
                    "1/2 cup butter, melted",
                    "10 sheets phyllo dough",
                    "1/4 cup bread crumbs"
                ],
                "steps": [
                    "Preheat oven to 375 degrees F (190 degrees C). Lightly grease a 9x13 inch baking dish.",
                    "In a large bowl, mix apples, raisins, walnuts, sugar, and cinnamon.",
                    "Place phyllo dough on a damp cloth. Place one sheet of phyllo in the prepared baking dish. Brush lightly with butter. Sprinkle 1 teaspoon of bread crumbs on top. Repeat layers until all ingredients are used, ending with about 6 layers of phyllo. Drizzle remaining butter on top.",
                    "Bake 30 minutes in the preheated oven, or until phyllo is golden brown."
                ]
            }
        },
        {
            "id": 3,
            "category": "dessert",
            "food_name": "Baklava",
            "imgUrl": "https://i.ibb.co/JB1089W/Baklava.jpg",
            "description": {
                "ingredients": [
                    "1 (16 ounce) package phyllo dough",
                    "1 pound chopped nuts",
                    "1 cup butter",
                    "1 teaspoon ground cinnamon",
                    "1 cup water",
                    "1 cup white sugar",
                    "1 teaspoon vanilla extract",
                    "1/2 cup honey"
                ],
                "steps": [
                    "Preheat oven to 350 degrees F (175 degrees C). Butter a 9x13 inch baking dish.",
                    "Place one sheet of phyllo dough in the prepared dish. Brush with butter. Sprinkle 2 tablespoons of nuts on top. Repeat layers until all ingredients are used, ending with about 6 layers of phyllo.",
                    "Using a sharp knife, cut baklava (all the way through to the bottom of the dish) into four long rows, then (nine times) diagonally to make 36 diamond shapes.",
                    "Bake in preheated oven 50 minutes, until golden and crisp."
                ]
            }
        },
        {
            "id": 4,
            "category": "dessert",
            "food_name": "Cheesecake",
            "imgUrl": "https://i.ibb.co/9gLz8gY/Cheesecake.webp",
            "description": {
                "ingredients": [
                    "1 3/4 cups graham cracker crumbs",
                    "1/4 cup sugar",
                    "1/2 cup butter, melted",
                    "3 (8 ounce) packages cream cheese",
                    "1 cup white sugar",
                    "1 teaspoon vanilla extract",
                    "3 eggs",
                    "1 cup sour cream"
                ],
                "steps": [
                    "Preheat oven to 350 degrees F (175 degrees C). Grease a 9 inch springform pan.",
                    "In a medium bowl, mix graham cracker crumbs with sugar and melted butter. Press onto bottom of springform pan.",
                    "In a large bowl, mix cream cheese with sugar until smooth. Blend in vanilla extract. Scrape down the sides of the bowl. Blend in eggs one at a time, beating well after each addition.",
                    "Pour filling into crust. Bake in preheated oven for 1 hour. Turn the oven off, and let cake cool in oven with the door closed for 5 to 6 hours; this prevents cracking. Chill in refrigerator until serving."
                ]
            }
        },
        {
            "id": 5,
            "category": "dessert",
            "food_name": "Chocolate Cake",
            "imgUrl": "https://i.ibb.co/k4cjMyX/chocolate-cake.jpg",
            "description": {
                "ingredients": [
                    "2 cups white sugar",
                    "1 3/4 cups all-purpose flour",
                    "3/4 cup unsweetened cocoa powder",
                    "1 1/2 teaspoons baking powder",
                    "1 1/2 teaspoons baking soda",
                    "1 teaspoon salt",
                    "2 eggs",
                    "1 cup milk",
                    "1/2 cup vegetable oil",
                    "2 teaspoons vanilla extract",
                    "1 cup boiling water"
                ],
                "steps": [
                    "Preheat oven to 350 degrees F (175 degrees C). Grease and flour two 9 inch cake pans.",
                    "In a large bowl, stir together the sugar, flour, cocoa, baking powder, baking soda and salt. Add the eggs, milk, oil and vanilla, mix for 2 minutes on medium speed of mixer. Stir in the boiling water last. Batter will be thin. Pour evenly into the prepared pans.",
                    "Bake 30 to 35 minutes in the preheated oven, until the cake tests done with a toothpick. Cool in the pans for 10 minutes, then remove to a wire rack to cool completely."
                ]
            }
        },
        {
            "id": 6,
            "category": "dessert",
            "food_name": "Creme Brulee",
            "imgUrl": "https://i.ibb.co/m8tq7j0/creme-brulee.jpg",
            "description": {
                "ingredients": [
                    "2 cups heavy cream",
                    "1 vanilla bean, split and scraped",
                    "1/2 cup white sugar",
                    "3 large egg yolks",
                    "1/2 cup white sugar, or as needed for topping"
                ],
                "steps": [
                    "Preheat oven to 300 degrees F (150 degrees C).",
                    "Mix cream, vanilla bean and its pulp into a saucepan over medium-high heat. Bring to a simmer.",
                    "Whisk egg yolks and sugar together in a bowl until thick and creamy.",
                    "Slowly pour cream mixture into egg yolk mixture, whisking constantly. Pour mixture through a fine-mesh sieve into a bowl.",
                    "Pour mixture into 6 ramekins.",
                    "Place ramekins in a baking dish and fill baking dish with boiling water to reach halfway up the sides of the ramekins.",
                    "Bake in preheated oven until set, about 40 minutes.",
                    "Remove ramekins from water bath and refrigerate for at least 2 hours.",
                    "Sprinkle 1 tablespoon sugar over each ramekin.",
                    "Use a kitchen torch to caramelize sugar."
                ]
            }
        },
        {
            "id": 7,
            "category": "dessert",
            "food_name": "Easy Chocolate Mousse",
            "imgUrl": "https://i.ibb.co/HtSD6Mj/Easy-Chocolate-Mousse.jpg",
            "description": {
                "ingredients": [
                    "1 (12 ounce) package semisweet chocolate chips",
                    "1/4 cup unsalted butter",
                    "2 cups heavy cream",
                    "1/4 cup white sugar",
                    "1 teaspoon vanilla extract"
                ],
                "steps": [
                    "Melt chocolate and butter in a microwave-safe bowl, stirring occasionally until smooth. Cool to lukewarm.",
                    "In a large bowl, beat cream until soft peaks form; beat in sugar and vanilla until stiff peaks form.",
                    "Fold 1/4 of the cream mixture into the chocolate mixture to lighten it. Fold in the remaining whipped cream.",
                    "Spoon into dessert cups and refrigerate until firm, about 2 hours."
                ]
            }
        },
        {
            "id": 8,
            "category": "dessert",
            "food_name": "Flan",
            "imgUrl": "https://i.ibb.co/pLMxrms/flan.jpg",
            "description": {
                "ingredients": [
                    "1 cup white sugar",
                    "3 eggs",
                    "1 (14 ounce) can sweetened condensed milk",
                    "1 (12 fluid ounce) can evaporated milk",
                    "1 tablespoon vanilla extract"
                ],
                "steps": [
                    "Preheat oven to 350 degrees F (175 degrees C).",
                    "In a medium saucepan over medium-low heat, melt sugar until liquefied and golden in color. Carefully pour hot syrup into a 9 inch round glass baking dish, turning the dish to evenly coat the bottom and sides. Set aside.",
                    "In a large bowl, beat eggs. Beat in condensed milk, evaporated milk and vanilla until smooth. Pour egg mixture into baking dish. Cover with aluminum foil.",
                    "Bake in preheated oven 60 minutes. Let cool completely."
                ]
            }
        },
        {
            "id": 9,
            "category": "dessert",
            "food_name": "French Macarons",
            "imgUrl": "https://i.ibb.co/NWmZhH5/french-macarons.jpg",
            "description": {
                "ingredients": [
                    "1 3/4 cups confectioners' sugar",
                    "1 cup almond flour",
                    "3 large egg whites, room temperature",
                    "1/4 teaspoon cream of tartar",
                    "1/4 cup superfine sugar",
                    "1/2 teaspoon vanilla extract",
                    "1/2 teaspoon almond extract"
                ],
                "steps": [
                    "Preheat oven to 300 degrees F (150 degrees C). Line 2 baking sheets with parchment paper.",
                    "Blend confectioners' sugar and almond flour in a food processor until fine; sift mixture through a fine-mesh sieve into a large bowl.",
                    "Beat egg whites and cream of tartar together in a bowl until frothy. Gradually add superfine sugar, continuing to beat until egg whites are glossy and hold soft peaks. Beat in vanilla extract and almond extract until incorporated.",
                    "Fold almond flour mixture, in 3 additions, into egg whites, using a rubber spatula until mixture is smooth and shiny.",
                    "Transfer batter to a pastry bag fitted with a 1/2-inch round tip. Pipe 1-inch disks of batter onto prepared baking sheets, leaving 2 inches between cookies. Let cookies stand at room temperature for 30 minutes to dry.",
                    "Bake in preheated oven until cookies are set and slightly colored, about 20 minutes.",
                    "Let cookies cool on baking sheets for 5 minutes. Transfer cookies to a wire rack to cool completely."
                ]
            }
        },
        {
            "id": 10,
            "category": "dessert",
            "food_name": "Ghevar",
            "imgUrl": "https://i.ibb.co/K0kCwgp/Ghevar.jpg",
            "description": {
                "ingredients": [
                    "2 cups all-purpose flour",
                    "1/2 cup clarified butter (ghee)",
                    "4 cups sugar",
                    "1/2 cup milk",
                    "1/2 teaspoon cardamom powder",
                    "1/4 teaspoon saffron strands",
                    "1 cup water",
                    "ghee or oil for frying"
                ],
                "steps": [
                    "Mix flour, ghee, and milk to make a smooth batter.",
                    "Heat ghee in a deep pan. Pour the batter through a perforated spoon into the hot ghee, forming a round shape.",
                    "Cook on low heat until crisp and golden.",
                    "Prepare sugar syrup by boiling sugar, water, cardamom powder, and saffron until it reaches a 1-thread consistency.",
                    "Dip the ghevar in the sugar syrup, then remove and drain excess syrup.",
                    "Serve warm or at room temperature."
                ]
            }
        },
        {
            "id": 11,
            "category": "dessert",
            "food_name": "Gulab Jamun Thandai Mousse",
            "imgUrl": "https://i.ibb.co/5MS6yth/gulab-jamun-thandai-mousse.jpg",
            "description": {
                "ingredients": [
                    "200 grams gulab jamun, chopped",
                    "1 cup heavy cream",
                    "1/2 cup thandai syrup",
                    "1/4 cup powdered sugar",
                    "1/4 cup milk",
                    "1/4 cup chopped nuts (pistachios, almonds, cashews)"
                ],
                "steps": [
                    "Whip the heavy cream until stiff peaks form.",
                    "In a separate bowl, mix thandai syrup, powdered sugar, and milk until well combined.",
                    "Fold the thandai mixture into the whipped cream gently.",
                    "Add chopped gulab jamun and chopped nuts, and fold gently.",
                    "Pour the mixture into serving glasses and refrigerate for at least 2 hours before serving."
                ]
            }
        },
        {
            "id": 12,
            "category": "dessert",
            "food_name": "Italian Sundaes with Nutella",
            "imgUrl": "https://i.ibb.co/d01RSmn/italian-sundaes-with-nutella.webp",
            "description": {
                "ingredients": [
                    "1 cup Nutella",
                    "1/2 cup heavy cream",
                    "2 tablespoons powdered sugar",
                    "1/2 teaspoon vanilla extract",
                    "1 pint vanilla gelato",
                    "1 pint chocolate gelato",
                    "1 pint strawberry gelato",
                    "1/2 cup toasted hazelnuts, chopped",
                    "1/2 cup chopped strawberries",
                    "1/2 cup whipped cream"
                ],
                "steps": [
                    "In a small saucepan over medium heat, warm Nutella until runny, about 2 minutes. Remove from heat.",
                    "In a medium bowl, whisk heavy cream, powdered sugar, and vanilla until stiff peaks form.",
                    "To assemble sundaes, layer each gelato flavor with Nutella sauce, whipped cream, chopped hazelnuts, and strawberries in tall glasses."
                ]
            }
        },
        {
            "id": 13,
            "category": "dessert",
            "food_name": "Jalebi",
            "imgUrl": "https://i.ibb.co/bsnbBDb/Jalebi.jpg",
            "description": {
                "ingredients": [
                    "1 cup all-purpose flour",
                    "1 tablespoon chickpea flour (optional)",
                    "1/2 teaspoon baking powder",
                    "1/4 teaspoon baking soda",
                    "1/2 cup plain yogurt",
                    "1 tablespoon melted ghee or oil",
                    "1 cup sugar",
                    "1/2 cup water",
                    "1/2 teaspoon cardamom powder",
                    "saffron strands",
                    "oil for frying"
                ],
                "steps": [
                    "Mix all-purpose flour, chickpea flour, baking powder, baking soda, yogurt, and ghee to make a thick batter. Let it ferment for 24 hours.",
                    "For the syrup, heat sugar and water in a pan. Add cardamom powder and saffron strands. Cook until the syrup reaches one string consistency. Keep warm.",
                    "Heat oil in a deep pan. Fill a squeeze bottle with the batter. Squeeze the batter into the hot oil in circular motions to form spirals.",
                    "Fry until golden brown and crisp. Drain and immediately dip in the warm syrup for a few seconds.",
                    "Serve hot or at room temperature."
                ]
            }
        },
        {
            "id": 14,
            "category": "dessert",
            "food_name": "Kheer",
            "imgUrl": "https://i.ibb.co/Y75wKgb/kheer-feat.webp",
            "description": {
                "ingredients": [
                    "1/2 cup basmati rice",
                    "1 liter whole milk",
                    "1/2 cup sugar",
                    "1/4 cup chopped nuts (almonds, pistachios, cashews)",
                    "1/4 cup raisins",
                    "1/2 teaspoon cardamom powder",
                    "saffron strands"
                ],
                "steps": [
                    "Wash rice and soak in water for 30 minutes. Drain.",
                    "In a large pan, bring milk to a boil. Add rice and simmer on low heat, stirring occasionally, until the rice is cooked and the mixture thickens.",
                    "Add sugar, nuts, raisins, cardamom powder, and saffron. Cook for another 5-10 minutes.",
                    "Serve hot or cold."
                ]
            }
        },
        {
            "id": 15,
            "category": "dessert",
            "food_name": "Kulfi",
            "imgUrl": "https://i.ibb.co/6D82RHb/kulfi.webp",
            "description": {
                "ingredients": [
                    "2 liters whole milk",
                    "1/2 cup sugar",
                    "1/2 cup condensed milk",
                    "1/4 cup milk powder",
                    "1/2 teaspoon cardamom powder",
                    "2 tablespoons chopped nuts (pistachios, almonds)"
                ],
                "steps": [
                    "In a heavy-bottomed pan, boil milk until it reduces to half its quantity, stirring frequently.",
                    "Add sugar, condensed milk, milk powder, cardamom powder, and nuts. Mix well and simmer for another 5 minutes.",
                    "Pour the mixture into kulfi molds or popsicle molds. Freeze for at least 6 hours or overnight.",
                    "To serve, dip the molds in warm water for a few seconds and unmold the kulfi."
                ]
            }
        },
        {
            "id": 16,
            "category": "dessert",
            "food_name": "Ladoo",
            "imgUrl": "https://i.ibb.co/BnVT5r4/Ladoo.jpg",
            "description": {
                "ingredients": [
                    "1 cup besan (gram flour)",
                    "1/2 cup ghee",
                    "1/2 cup powdered sugar",
                    "2 tablespoons chopped nuts (almonds, pistachios)",
                    "1/2 teaspoon cardamom powder"
                ],
                "steps": [
                    "Heat ghee in a pan. Add besan and roast on low heat until golden brown and aromatic.",
                    "Remove from heat and let it cool slightly. Add powdered sugar, chopped nuts, and cardamom powder. Mix well.",
                    "Shape the mixture into small round balls (ladoos).",
                    "Let the ladoos cool completely before serving."
                ]
            }
        },
        {
            "id": 17,
            "category": "dessert",
            "food_name": "Mango Flavor Soan Papdi",
            "imgUrl": "https://i.ibb.co/6m1CmHd/mango-flavor-soan-papdi.webp",
            "description": {
                "ingredients": [
                    "1 cup besan (gram flour)",
                    "1 cup ghee",
                    "1 1/4 cups sugar",
                    "1/2 cup water",
                    "1/2 teaspoon cardamom powder",
                    "1/4 teaspoon mango essence",
                    "silvered almonds for garnishing"
                ],
                "steps": [
                    "Heat ghee in a pan. Add besan and roast on low heat until golden brown and aromatic.",
                    "In another pan, combine sugar and water. Cook until it reaches one string consistency.",
                    "Add cardamom powder and mango essence to the sugar syrup. Mix well.",
                    "Pour the sugar syrup into the besan mixture. Mix well until it forms a smooth dough.",
                    "Spread the mixture on a greased plate. Sprinkle silvered almonds on top and press gently.",
                    "Let it cool completely, then cut into squares."
                ]
            }
        },
        {
            "id": 18,
            "category": "dessert",
            "food_name": "Mango Sorbet Dreamsicle",
            "imgUrl": "https://i.ibb.co/pZTQS05/Mango-Sorbet-Dreamsicle.jpg",
            "description": {
                "ingredients": [
                    "3 cups ripe mango, diced",
                    "1/2 cup sugar",
                    "1/4 cup water",
                    "1/4 cup lime juice",
                    "1 cup coconut milk"
                ],
                "steps": [
                    "Combine mango, sugar, water, and lime juice in a blender. Blend until smooth.",
                    "Pour mixture into a shallow dish and freeze for 2 hours.",
                    "Scoop the partially frozen mixture into a blender. Add coconut milk and blend until smooth.",
                    "Pour mixture into popsicle molds and freeze until firm."
                ]
            }
        },
        {
            "id": 19,
            "category": "dessert",
            "food_name": "Milk Burfi",
            "imgUrl": "https://i.ibb.co/TBmK9BM/milk-burfi.jpg",
            "description": {
                "ingredients": [
                    "1 liter whole milk",
                    "1/2 cup sugar",
                    "1/2 cup milk powder",
                    "1/4 teaspoon cardamom powder",
                    "2 tablespoons ghee",
                    "2 tablespoons chopped nuts (almonds, pistachios)"
                ],
                "steps": [
                    "In a heavy-bottomed pan, bring milk to a boil. Reduce heat and simmer until it reduces to half its quantity, stirring frequently.",
                    "Add sugar, milk powder, and cardamom powder. Mix well and cook until the mixture thickens.",
                    "Add ghee and chopped nuts. Cook for another 2-3 minutes.",
                    "Pour the mixture into a greased plate. Spread evenly and let it cool.",
                    "Cut into squares and serve."
                ]
            }
        },
        {
            "id": 20,
            "category": "dessert",
            "food_name": "Mohanthal",
            "imgUrl": "https://i.ibb.co/HFn8JfF/Mohanthal.webp",
            "description": {
                "ingredients": [
                    "1 cup besan (gram flour)",
                    "1/2 cup ghee",
                    "1 cup sugar",
                    "1/2 cup water",
                    "1/2 teaspoon cardamom powder",
                    "2 tablespoons chopped nuts (almonds, pistachios)"
                ],
                "steps": [
                    "Heat ghee in a pan. Add besan and roast on low heat until golden brown and aromatic.",
                    "In another pan, combine sugar and water. Cook until it reaches one string consistency.",
                    "Add cardamom powder to the sugar syrup. Mix well.",
                    "Pour the sugar syrup into the besan mixture. Mix well until it forms a smooth dough.",
                    "Spread the mixture on a greased plate. Sprinkle chopped nuts on top and press gently.",
                    "Let it cool completely, then cut into squares."
                ]
            }
        },
        {
            "id": 21,
            "category": "dessert",
            "food_name": "Mysore Pak",
            "imgUrl": "https://i.ibb.co/zJmnq4X/mysore-pak.webp",
            "description": {
                "ingredients": [
                    "1 cup besan (gram flour)",
                    "1 cup ghee",
                    "1 cup sugar",
                    "1/2 cup water"
                ],
                "steps": [
                    "Heat ghee in a heavy-bottomed pan. Add besan and roast on low heat until golden brown and aromatic.",
                    "In another pan, combine sugar and water. Cook until it reaches one string consistency.",
                    "Add the sugar syrup to the besan mixture. Mix well until it forms a smooth paste.",
                    "Pour the mixture into a greased plate. Let it set for a few hours.",
                    "Cut into squares and serve."
                ]
            }
        },
        {
            "id": 22,
            "category": "dessert",
            "food_name": "Panna Cotta",
            "imgUrl": "https://i.ibb.co/qCpXxxz/Panna-Cotta.webp",
            "description": {
                "ingredients": [
                    "2 cups heavy cream",
                    "1/2 cup white sugar",
                    "1/2 teaspoon vanilla extract",
                    "1/2 cup milk",
                    "2 1/4 teaspoons unflavored gelatin"
                ],
                "steps": [
                    "Pour milk into a small bowl, and stir in the gelatin powder. Set aside.",
                    "In a saucepan, stir together the heavy cream and sugar, and set over medium heat. Bring to a full boil, watching carefully, as the cream will quickly rise to the top of the pan.",
                    "Pour the gelatin and milk into the cream, stirring until completely dissolved. Cook for one minute, stirring constantly.",
                    "Remove from heat, stir in the vanilla extract, and pour into six individual ramekin dishes.",
                    "Cool the ramekins uncovered at room temperature. When cool, cover with plastic wrap, and refrigerate for at least 4 hours, but preferably overnight before serving."
                ]
            }
        },
        {
            "id": 23,
            "category": "dessert",
            "food_name": "Peda",
            "imgUrl": "https://i.ibb.co/f9BWpPF/peda-milk-peda-recipe.jpg",
            "description": {
                "ingredients": [
                    "1 liter milk",
                    "1/2 cup sugar",
                    "1/4 teaspoon cardamom powder",
                    "2 tablespoons ghee",
                    "2 tablespoons chopped nuts (pistachios, almonds)"
                ],
                "steps": [
                    "Boil milk in a heavy-bottomed pan. Simmer on low heat, stirring frequently, until it reduces to half its quantity.",
                    "Add sugar and cardamom powder. Cook until the mixture thickens.",
                    "Add ghee and chopped nuts. Cook for another 2-3 minutes.",
                    "Remove from heat and let it cool slightly.",
                    "Shape the mixture into small round discs (pedas).",
                    "Let the pedas cool completely before serving."
                ]
            }
        },
        {
            "id": 24,
            "category": "dessert",
            "food_name": "Profiteroles",
            "imgUrl": "https://i.ibb.co/WzYD9zS/Profitroles.jpg",
            "description": {
                "ingredients": [
                    "1/2 cup water",
                    "1/4 cup butter",
                    "1/2 cup all-purpose flour",
                    "2 large eggs",
                    "1/2 cup heavy cream",
                    "1 tablespoon powdered sugar",
                    "1/2 teaspoon vanilla extract",
                    "1/2 cup chocolate chips"
                ],
                "steps": [
                    "Preheat oven to 425 degrees F (220 degrees C). Line a baking sheet with parchment paper.",
                    "In a medium saucepan, combine water and butter. Bring to a boil, stirring until butter melts completely.",
                    "Reduce heat to low, and add flour all at once. Stir vigorously until mixture forms a ball. Remove from heat and let cool for 5 minutes.",
                    "Add eggs, one at a time, beating well to incorporate after each addition. Drop dough by tablespoonfuls onto prepared baking sheet.",
                    "Bake in preheated oven for 20 to 25 minutes, or until puffed and golden brown. Centers should be dry.",
                    "Using a sharp knife, make a small slit in the side of each puff to allow steam to escape. Place on wire racks to cool completely.",
                    "In a medium bowl, whip cream until soft mounds form. Add sugar and vanilla, and continue to whip until stiff peaks form. Slice off tops of puffs, and fill with whipped cream. Replace tops and dust with powdered sugar. Serve with chocolate sauce."
                ]
            }
        },
        {
            "id": 25,
            "category": "dessert",
            "food_name": "Rasmalai",
            "imgUrl": "https://i.ibb.co/C6Ctf6j/Rasmalai.jpg",
            "description": {
                "ingredients": [
                    "4 cups whole milk",
                    "1/4 cup lemon juice",
                    "1/4 cup water",
                    "1/2 cup sugar",
                    "4 cups water",
                    "1/2 cup sugar",
                    "1/4 teaspoon cardamom powder",
                    "2 tablespoons chopped nuts (pistachios, almonds)"
                ],
                "steps": [
                    "Boil milk in a heavy-bottomed pan. Add lemon juice and water, stirring continuously, until the milk curdles.",
                    "Strain the curdled milk through a muslin cloth. Rinse the cheese under cold water to remove the lemon flavor.",
                    "Press the cheese in the muslin cloth to remove excess water. Knead the cheese until smooth.",
                    "Divide the cheese into equal portions and shape into small discs.",
                    "In a separate pan, bring water, sugar, and cardamom powder to a boil. Add the cheese discs and cook for 10-15 minutes.",
                    "Let the rasmalai cool in the syrup. Serve chilled, garnished with chopped nuts."
                ]
            }
        },
        {
            "id": 26,
            "category": "dessert",
            "food_name": "Semolina Halwa",
            "imgUrl": "https://i.ibb.co/N9Dj7D1/semolina-halwa.webp",
            "description": {
                "ingredients": [
                    "1 cup semolina",
                    "1/2 cup ghee",
                    "1 cup sugar",
                    "2 cups water",
                    "1/4 teaspoon cardamom powder",
                    "2 tablespoons chopped nuts (cashews, almonds, raisins)"
                ],
                "steps": [
                    "Heat ghee in a pan. Add semolina and roast on low heat until golden brown and aromatic.",
                    "In another pan, combine sugar and water. Cook until it reaches one string consistency.",
                    "Add cardamom powder to the sugar syrup. Mix well.",
                    "Pour the sugar syrup into the semolina mixture. Mix well until it forms a smooth paste.",
                    "Add chopped nuts and mix well.",
                    "Serve hot or at room temperature."
                ]
            }
        },{
            "id": 28,
            "category": "dessert",
            "food_name": "Shrikhand",
            "imgUrl": "https://i.ibb.co/x2DtWh9/shrikhand.jpg",
            "description": {
                "ingredients": [
                    "4 cups plain yogurt",
                    "1/2 cup powdered sugar",
                    "1/2 teaspoon cardamom powder",
                    "2 tablespoons chopped nuts (pistachios, almonds)"
                ],
                "steps": [
                    "Hang the yogurt in a muslin cloth for 3-4 hours to remove excess water.",
                    "Transfer the thickened yogurt to a bowl. Add powdered sugar and cardamom powder. Mix well.",
                    "Refrigerate for 1-2 hours.",
                    "Garnish with chopped nuts before serving."
                ]
            }
        }
]



const Desserts = () => {
  return (
    <>
    <Header/>
    <div className='main-container'>
    </div>
    <div className='items-container'>
    <h1 className='item-card-heading'>Desserts</h1>
      <ul className='item-card-list'>
        {DessertsList.map(eachItem=> (
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

export default Desserts
