'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('postcards').del()
    .then(function () {
      return Promise.all([
        knex('postcards').insert({
          id: 1,
          search_word: 'boulder',
          maker: 'anna',
          times_used: 3,
          template_id: 1,
          color_id: 1,
          theme_id: 1,
          greetings_subtext: 'greetings from boulder, co',
          is_location: true
        })
      ]);
    });
};
