const express = require('express');
const dbConfig = require('../data/db-config');
const Recipes = require('./helpers');

const router = express.Router();

router.get('/', (req, res) => {
	Recipes.getRecipes()
		.then((recipes) => {
			res.status(200).json(recipes);
		})
		.catch((err) => {
			res.status(500).json({
				message: 'Unable to retrieve recipes',
				error: err,
			});
		});
});

router.get('/:id/shoppinglist', (req, res) => {
	Recipes.getShoppinglist(req.params.id)
		.then((list) => {
			res.status(200).json(list);
		})
		.catch((err) => {
			res.status(500).json({
				message: 'Unable to retrieve shopping list',
				error: err,
			});
		});
});

router.get('/:id/instructions', (req, res) => {
	const { id } = req.params
	Recipes.getInstructions(id)
		.then(instructions => {
			res.status(200).json(instructions)
		})
		.catch(err => {
			res.status(500).json({
				message: 'Unable to retrieve instructions',
				error: err
			})
		})
})

module.exports = router;
