'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('themes').del()
    .then(function () {
      return Promise.all([
        knex('themes').insert({
          id: 1,
          source: 'zigzag'
        })
      ]);
    });
};
