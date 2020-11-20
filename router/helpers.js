const db = require('../data/db-config');

module.exports = {
	getRecipes,
	getShoppinglist,
	getInstructions,
};

function getRecipes() {
	return db('recipes');
}

function getShoppinglist() {
	return db('recipe_components as rc')
		.join('recipes as r', 'rc.recipe_id', 'r.id')
		.join('ingredients as i', 'rc.ingredient_id', 'i.id')
		.select('r.name as recipe', 'i.name as ingredient', 'rc.ingredient_amount')
		.where({ recipe_id: recipe_id });
}

function getInstructions() {
	return db('recipe_components as rc')
		.select('rc.id', 'rc.instructions')
		.where({ recipe_id: recipe_id });
}
