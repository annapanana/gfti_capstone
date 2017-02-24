'use strict'
exports.seed = function(knex, Promise) {
  return knex('themes').del()
    .then(function () {
      return Promise.all([
        knex('themes').insert({
          id: 1,
          path_id: 0,
          asset_name: "pattern.svg"
        }),
        knex('themes').insert({
          id: 2,
          path_id: 1,
          asset_name: "pattern.svg"
        }),
        knex('themes').insert({
          id: 3,
          path_id: 1,
          asset_name: "pattern.svg"
        }),
        knex('themes').insert({
          id: 4,
          path_id: 1,
          asset_name: "pattern.svg"
        }),
        knex('themes').insert({
          id: 5,
          path_id: 1,
          asset_name: "pattern.svg"
        }),knex('themes').insert({
          id: 6,
          path_id: 1,
          asset_name: "pattern.svg"
        })
      ]);
    });
};
