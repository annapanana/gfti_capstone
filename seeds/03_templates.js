'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('templates').del()
    .then(function () {
      return Promise.all([
        knex('templates').insert({
          id: 1,
          source: 'front.html',
          greetings_phrase: 'HELLO'
        })
      ]);
    });
};
