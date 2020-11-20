const express = require('express');
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

module.exports = router;
