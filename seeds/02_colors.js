'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('colors').del()
    .then(function () {
      return Promise.all([
        knex('colors').insert({
          id: 1,
          theme_name: 'cool_tones'
        }),
        knex('colors').insert({
          id: 2,
          theme_name: 'warm_tones'
        }),
        knex('colors').insert({
          id: 3,
          theme_name: 'springtime'
        })
      ]);
    });
};
