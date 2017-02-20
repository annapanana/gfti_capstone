'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('postcards_images').del()
    .then(function () {
      return Promise.all([
        knex('postcards_images').insert({
          id: 1,
          postcard_id: 1,
          image_id: 1
        }),
        knex('postcards_images').insert({
          id: 2,
          postcard_id: 1,
          image_id: 2
        }),
        knex('postcards_images').insert({
          id: 3,
          postcard_id: 1,
          image_id: 2
        }),
        knex('postcards_images').insert({
          id: 4,
          postcard_id: 1,
          image_id: 1
        }),
        knex('postcards_images').insert({
          id: 5,
          postcard_id: 1,
          image_id: 1
        })
      ]);
    });
};
