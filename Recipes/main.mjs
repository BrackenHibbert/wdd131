// Import and check to make sure it was imported correctly
import { recipes } from './recipes.mjs';
// console.log('Imported Recipes', recipes);

// Randum number function generator and test
function getRandomNumber(num) {
	return Math.floor(Math.random() * num);
}
// console.log('random number (0-9):', getRandomNumber(10));

// function that will retrun a random recipe and tests the function
function getRandomRecipe() {
	const randomIndex = getRandomNumber(recipes.length);
	return recipes[randomIndex];
}
// console.log('Random Recipe:', getRandomRecipe());

// The function that makes the template for html
function createRecipeTemplate(recipe) {
	return `
	  <div class="recipe">
		<img src="${recipe.image}" alt="Image of ${recipe.name}">
		<div class="content">
		  <div class="tags">
			${createTagsTemplate(recipe.tags)}
		  </div>
		  <h1>${recipe.name}</h1>
		  <span
			class="rating"
			role="img"
			aria-label="Rating: ${recipe.rating} out of 5 stars"
		  >
			${createRatingTemplate(recipe.rating)}
		  </span>
		  <p class="description">${recipe.description}</p>
		</div>
	  </div>
	`;
  }

// functino for the tags and test
function createTagsTemplate(tags) {
	return tags.map(tag => `<p>${tag}</p>`).join('');
}
// console.log('Tags Markup', createTagsTemplate(['Waffles', 'Sweet potato']));

// function that will help make the stars for the template and test log
function createRatingTemplate(rating) {
	const maxStars = 5;
	let starsMarkup = '';
  
	for (let i = 1; i <= maxStars; i++) {
	  if (i <= rating) {
		// Full star
		starsMarkup += '<span aria-hidden="true" class="icon-star">⭐</span>';
	  } else {
		// Empty star
		starsMarkup += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
	  }
	}
  
	return `
	  <span
		class="rating"
		role="img"
		aria-label="Rating: ${rating} out of ${maxStars} stars"
	  >
		${starsMarkup}
	  </span>
	`;
  }
//   console.log('Rating Markup for 4 stars:', createRatingTemplate(4));

// function that renders the recipes
function renderRecipes(recipeList) {
	// Get the element we will output the recipes into
	const recipeContainer = document.getElementById('recipe-container');

	// Use the recipeTemplate function to transform recipe objects into recipe HTML strings
	const recipesHTML = recipeList.map(recipe => createRecipeTemplate(recipe)).join('');

	// Set the HTML strings as the innerHTML of our output element
	recipeContainer.innerHTML = recipesHTML;
}


// function for when the page loads to run the right functions
function init() {
	// Get a random recipe
	const randomRecipe = getRandomRecipe(); // Using existing getRandomRecipe function

	// Render the recipe with renderRecipes
	renderRecipes([randomRecipe]);
}
init();

// SEARCH FORM

// Add an event listener
document.querySelector('.search-form').addEventListener('submit', searchHandler);

// Function for Search
function searchHandler(event) {
	event.preventDefault();
	
	// get and convert originial search to lowercase
	const query = document.querySelector('.search-input').value.toLowerCase();

	// give query to the filter function
	const filteredRecipes = filterRecipes(query);
	renderRecipes(filteredRecipes);
}

// Function to filter the recipes
function filterRecipes(query) {
	return recipes
		.filter(recipe => {
			return (
				recipe.name.toLowerCase().includes(query) ||
				recipe.description.toLowerCase().includes(query) ||
				recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
				recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query))
			);
		})
		.sort((a, b) => a.name.localeCompare(b.name));
}