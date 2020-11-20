exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('recipe_components')
		.truncate()
		.then(function () {
			// Inserts seed entries
			return knex('recipe_components').insert([
				{
					recipe_id: 1,
					instructions: 'Slice baguette in half lengthwise',
					ingredient_id: 1,
					ingredient_amount: 'as many as you like',
				},
				{
					recipe_id: 1,
					instructions:
						'Spread butter evenly across top and bottom of baguette',
					ingredient_id: 2,
					ingredient_amount: 'Apx. 2tbsp',
				},
				{
					recipe_id: 1,
					instructions:
						'Place ham in an even layer atop the lower section of baguette',
					ingredient_id: 3,
					ingredient_amount: 'As much as you are comfy with',
				},

				{
					recipe_id: 2,
					instructions:
						'Heat eggs and butter in saucepan over med-low heat, stirring frequently',
					ingredient_id: 10,
					ingredient_amount: '2 large',
				},
				{
					recipe_id: 2,
					instructions:
						'Steam boudin over med-high heat until casing removes itself',
					ingredient_id: 5,
					ingredient_amount: 'Apx. 2tbsp',
				},
				{
					recipe_id: 2,
					instructions: 'Toast sourdough until desired toastiness',
					ingredient_id: 6,
					ingredient_amount: '1 slice, toasted',
				},
				{
					recipe_id: 2,
					instructions:
						'Eggs should be a custardy texture. Remove from heat and mix in creme fraische',
					ingredient_id: 4,
					ingredient_amount: 'Apx. 1tbsp',
				},
				{
					recipe_id: 2,
					instructions:
						'With all components finished, plate by schmearing the boudin over the toast and covering with eggs. S&P to taste.',
					ingredient_id: 11,
					ingredient_amount: 'Serves you',
				},

				{
					recipe_id: 3,
					instructions: 'Put ground beef in a skillet and cook until brown',
					ingredient_id: 7,
					ingredient_amount: '1lb',
				},
				{
					recipe_id: 3,
					instructions: 'Add in packet of Sloppy Joe mix',
					ingredient_id: 8,
					ingredient_amount: '1 or 2 if you feel some kinda way',
				},
				{
					recipe_id: 3,
					instructions:
						'Butter and toast your hoagie roll if you are sober enough',
					ingredient_id: 9,
					ingredient_amount: '1 package',
				},
				{
					recipe_id: 3,
					instructions: 'Slop your Joe onto the hoagie roll',
					ingredient_id: 7,
					ingredient_amount: 'As much as you can fit',
				},
				{
					recipe_id: 3,
          instructions: 'Try not to choke',
          ingredient_id: 11,
					ingredient_amount:
						'Turn off the range or you will burn your kitchen down',
				},
			]);
		});
};
