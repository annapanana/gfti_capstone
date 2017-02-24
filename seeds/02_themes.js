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
        })
      ]);
    });
};
