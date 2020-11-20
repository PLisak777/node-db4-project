exports.up = function (knex) {
	return knex.schema
		.createTable('recipes', (tbl) => {
			tbl.increments();
			tbl.string('name', 128).notNullable().unique();
			tbl.string('description', 128);
		})

		.createTable('ingredients', (tbl) => {
			tbl.increments();
			tbl.string('name', 128).notNullable();
		})

		.createTable('recipe_components', (tbl) => {
			tbl.increments();
			tbl
				.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('recipes');
			tbl.string('instructions').notNullable();
			tbl
				.integer('ingredient_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('ingredients');
			tbl.string('ingredient_amount').notNullable();
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('recipe_components')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('recipes');
};
