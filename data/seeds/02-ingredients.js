
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Baguette'},
        {name: 'Butter'},
        {name: 'Ham'},
        {name: 'Creme Fraische'},
        {name: 'Boudin Sausage'},
        {name: 'Sourdough Bread'},
        {name: 'Ground Beef'},
        {name: 'Sloppy Joe Mix'},
        {name: 'Hoagie Rolls'},
        {name: 'Eggs'},
        {name: 'Salt & Pepper'},
      ]);
    });
};
