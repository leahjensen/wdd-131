document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('#search-button');
    const searchInput = document.querySelector('#search-input');
    const recipesContainer = document.querySelector('#recipes');

    const allRecipes = [
        {
            name: 'Oven Roasted Potato Slices',
            description: 'Tossed in a savory spice mixture, these crispy potato slices are perfect for a quick and tasty snack.',
            tags: ['side dish'],
            image: 'roasted-potatoes.webp'
        },
        {
            name: 'Black Beans and Rice',
            description: 'Black beans and tomatoes served over a bed of rice. Top with cheese and scoop up with tortilla chips for maximum enjoyment.',
            tags: ['Southwest', 'entree'],
            image: 'black-beans-and-rice.jpg'
        },
        {
            name: 'Chicken Curry',
            description: 'Quick and easy chicken curry recipe made with easy-to-find ingredients.',
            tags: ['chicken', 'entree', 'Indian'],
            image: 'chicken-curry.webp'
        },
        {
            name: 'Chocolate Chip Cookies',
            description: 'Delicious soft chocolate chip cookies with coconut for a unique twist.',
            tags: ['dessert'],
            image: 'chocolate-chip-cookies.jpg'
        },
        {
            name: 'Gooseberry Cake with Vanilla Cream and Crumble',
            description: 'This gooseberry cake combines a tart filling with a sweet crumble topping for the perfect dessert.',
            tags: ['dessert', 'German'],
            image: 'german-gooseberry-cake.jpg'
        },
        {
            name: 'Apple Crisp',
            description: 'This apple crisp recipe is a simple yet delicious fall dessert that\'s great served warm with vanilla ice cream.',
            tags: ['dessert'],
            image: 'apple-crisp.jpg'
        }
    ];

    displayResults(allRecipes);

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const filteredRecipes = allRecipes.filter(recipe =>
            recipe.name.toLowerCase().includes(query) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(query))
        );

        displayResults(filteredRecipes);
    });

    function displayResults(recipes) {
        recipesContainer.innerHTML = '';

        if (recipes.length === 0) {
            recipesContainer.innerHTML = '<p>No recipes found.</p>';
            return;
        }

        recipes.forEach(recipe => {
            const recipeElement = document.createElement('section');
            recipeElement.classList.add('recipe-card');

            recipeElement.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <div class="recipe-details">
                    <div class="tags">${recipe.tags.map(tag => `<span>${tag}</span>`).join(' ')}</div>
                    <h2>${recipe.name}</h2>
                    <div class="rating">★★★★☆</div>
                    <p>${recipe.description}</p>
                </div>
            `;

            recipesContainer.appendChild(recipeElement);
        });
    }
});
