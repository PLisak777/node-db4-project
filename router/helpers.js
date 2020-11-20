const db = require('../data/db-config');

module.exports = {
	getRecipes,
	getShoppinglist,
};

async function getRecipes() {
	try {
		return db('recipes');
	} catch (err) {
		throw err;
	}
}

async function getShoppinglist() {
	try {
		return db('recipe_components as rc')
			.join('recipes as r', 'rc.recipe_id', 'r.id')
			.join('ingredients as i', 'rc.ingredient_id', 'i.id')
			.select(
				'r.name as recipe',
				'i.name as ingredient',
				'rc.ingredient_amount'
			)
			.where({ recipe_id: recipe_id });
	} catch (err) {
		throw err;
	}
}
