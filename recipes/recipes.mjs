import recipes from './recipes.mjs';

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    return list[random(list.length)];
}

function recipeTemplate(recipe) {
    return `<figure class="recipe">
        <img src="${recipe.image}" alt="image of ${recipe.name}" />
        <figcaption>
            <ul class="recipe__tags">${tagsTemplate(recipe.tags)}</ul>
            <h2><a href="#">${recipe.name}</a></h2>
            <p class="recipe__ratings">${ratingTemplate(recipe.rating)}</p>
            <p class="recipe__description">${recipe.description}</p>
        </figcaption>
    </figure>`;
}

function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    html += `</span>`;
    return html;
}

function renderRecipes(recipeList) {
    const outputElement = document.querySelector('#recipes'); // Assume #recipes is the container ID
    outputElement.innerHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
}

function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

init();

function filterRecipes(query) {
    return recipes
        .filter(recipe =>
            recipe.name.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.tags.find(tag => tag.toLowerCase().includes(query))
        )
        .sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(e) {
    e.preventDefault();
    const query = document.querySelector('#search-input').value.toLowerCase(); // Assume #search-input is the input ID
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}

document.querySelector('#search-button').addEventListener('click', searchHandler); // Assume #search-button is the button ID

export const recipes = [
    {
        author: 'Provo High Culinary Students',
        url: '',
        isBasedOn: '',
        cookTime: '30 Min',
        datePublished: '2016-10-16',
        tags: ['Waffles', 'Sweet Potato', 'Side'],
        description: 'Savory waffles made with Sweet potato with a hint of Ginger',
        image: './images/sweet-potato-waffle-md.jpg',
        recipeIngredient: [
            '2 separated eggs',
            '1/4 C Oil',
            '1/4 tsp salt',
            '1/4 tsp Cayenne pepper',
            '3/4 C milk',
            '1 Tbsp Brown Sugar',
            '2 tsp Shredded Ginger',
            '3/4 C Mashed Sweet Potatoes',
            '1 Tbsp Minced Shallots',
            '1 Tbsp Baking Powder',
            '1 Tbsp Chives',
            '1/4 C Cornmeal',
            '1 C Flour'
        ],
        name: 'Sweet Potato Waffles',
        prepTime: '30 Min',
        recipeInstructions: [
            'Add the egg yolks, oil, salt, cayenne, sugar, ginger, shallots, sweet potatoes (steam and mash before), and milk and mix well.',
            'Next add the cornmeal, chives, and flour and baking powder',
            'Whip the egg whites until stiff and fold in',
            'Cook until golden brown in a waffle iron. Serve with butter and Wilted Greens or Honey.'
        ],
        recipeYield: '6 waffles',
        rating: 4
    },
    {
        author: 'Shane Thompson',
        url: '',
        isBasedOn: '',
        cookTime: '20 min',
        datePublished: '',
        tags: ['Chicken', 'Entree'],
        description:
            'Delicious quick and easy creamy rice dish. The mustard, mushrooms, and lemon all blend together wonderfully',
        image: './images/escalopes-de-poulet-a-la-creme.webp',
        recipeIngredient: [
            '2 Chicken Tenders, Cubed',
            '4 Mushrooms, Sliced',
            '1/2 C Whipping Cream',
            '1-2 Tbsp Stone Ground Mustard',
            '1 tsp Lemon Juice',
            'Salt and Pepper to taste',
            '1 C Rice, uncooked',
            '4-5 oz Fresh Green Beans'
        ],
        name: 'Escalope de Poulet a la Creme with steamed green beans (Chicken with Cream)',
        prepTime: '10 min',
        recipeInstructions: [
            'Add 1 1/2 cups of water to a pan and bring to a boil.  Add the rice and reduce heat to low and simmer for 10-15 minutes or until all the moisture is gone.',
            'Cube chicken then cook over medium high heat in a fry pan, add the mushrooms about halfway through. (10 minutes). ',
            'Pour in cream, mustard and salt and pepper.  Stir.  On medium heat, simmer until it thickens (5 minutes)',
            'While preparing sauce: wash the beans, then trim the ends and snap (or cut) into 2in lengths.  In a sauce pan with a colander add about 1 cup water and steam the beans (10-15 minutes)',
            'Serve sauce over rice, with the Green beans on the side.'
        ],
        recipeYield: '3 servings',
        rating: 4.5
    },
    {
        author: 'Shane Thompson',
        url: '',
        isBasedOn: '',
        cookTime: '30 min',
        datePublished: '2018-09-19',
        tags: ['Potatoes', 'side'],
        description:
            'Easy and delicious oven roasted potatoes that go great with almost anything.',
        image: './images/roasted-potatoes.webp',
        recipeIngredient: [
            '3-4 Medium Potatoes',
            '1 Tbsp Olive oil',
            '2 tsp Italian Seasoning',
            '1/2 tsp Salt',
            '1/2 tsp Ground Black Pepper',
            '1-2 tsp Hot Sauce (optional)'
        ],
        name: 'Oven Roasted potato slices',
        prepTime: '10 min',
        recipeInstructions: [
            'Preheat oven to 400 deg F',
            'Wash and thinly slice the potatoes (I usually slice the potato in half lengthwise, then thinly slice the halves, again lengthwise)',
            'Mix together the oil, salt, pepper, Italian seasoning, and hot sauce.',
            'Toss the potatoes in the spice mixture to evenly coat then spead over a baking sheet',
            'Bake for 30 min or until the desired level of crispyness is achieved.'
        ],
        recipeYield: '',
        rating: 4
    },
    {
        author: 'Shane Thompson',
        url: '',
        isBasedOn: '',
        cookTime: '20 min',
        datePublished: '2018-09-19',
        tags: ['Southwest', 'entree'],
        description:
            'Black beans and tomatoes served over a bed of rice. Top with cheese and scoop up with tortilla chips for maximum enjoyment.',
        image: './images/black-beans-and-rice.jpg',
        recipeIngredient: [
            '1 Medium Onion, diced',
            '2 Cloves Garlic, minced',
            '1 Tbsp Olive oil',
            '1 Can Black Beans (15oz)',
            '1 Can Diced Tomatoes (15oz)',
            '1/8 tsp Cayenne Pepper (optional)',
            '2 C Brown Rice (uncooked)',
            'Grated Cheese',
            'Tortilla Chips'
        ],
        name: 'Black Beans and Rice',
        prepTime: '10 min',
        recipeInstructions: [
            'Add 4 cups water to a saucepan and bring to a boil. Add Rice, stir, cover, and reduce heat to low. Cook until moisture is gone. (20-30 minutes)',
            'In another saucepan heat the oil and add the diced onion and garlic. Cook until tender.',
            'Stir in the drained Black beans, Undrained tomatoes, and Cayenne.',
            'Bring to a boil, then reduce heat and simmer uncovered for 15 min.',
            'Serve over rice, topped with grated cheese and Tortilla chips.'
        ],
        recipeYield: '4 servings',
        rating: 3
    },
    {
        author: 'Shane Thompson',
        url: '',
        isBasedOn: '',
        cookTime: '30 min',
        datePublished: '2018-09-19',
        tags: ['chicken', 'entree', 'Indian'],
        description:
            'Quick and easy Chicken curry recipe made with easy to find ingredients.',
        image: './images/chicken-curry.webp',
        recipeIngredient: [
            '4 Slices Bacon',
            '1 clove Garlic',
            '2 Tbsp Flour',
            '1 C water',
            '1 C Milk',
            '3 Tbsp Tomato Paste',
            '1/2 C Apple Sauce',
            '3-4 tsp Curry Powder',
            '2 tsp Chicken Bouillion',
            '3/4 C Sour Cream',
            '1-2 C Chicken, cubed',
            '2 C Rice, uncooked'
        ],
        name: 'Chicken Curry',
        prepTime: '5 min',
        recipeInstructions: [
            'Add bacon to frying pan and cook, then remove bacon and cut into pieces.',
            'Add minced garlic to bacon grease and cook.',
            'Add Flour, curry powder, and chicken bouillon.',
            'Stir in tomato paste and apple sauce.',
            'Add the milk, water, and sour cream.',
            'Stir until sauce thickens, and chicken is cooked.',
            'Serve over rice with crumbled bacon.'
        ],
        recipeYield: '4 servings',
        rating: 4.5
    }
];
