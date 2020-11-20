
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Jambon Buerre', description: 'Beautiful buttered baguette with fresh-cut ham'},
        {id: 2, name: 'Scrambled Eggs w/ Boudin', description: 'Creamy and unctious eggs over spicy cajun boudin'},
        {id: 3, name: 'Sloppy Joe', description: 'Pile of greasy meat on a hoagie roll. Best eaten inebriated'}
      ]);
    });
};
