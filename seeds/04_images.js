'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      return Promise.all([
        knex('images').insert({
          id: 1,
          url: 'https://digital-photography-school.com/wp-content/uploads/2011/11/square-format-06.jpg'
        }),
        knex('images').insert({
          id: 2,
          url: 'http://images.fineartamerica.com/images-medium-large/little-pup-square-dog-photography.jpg'
        })
      ]);
    });
};
