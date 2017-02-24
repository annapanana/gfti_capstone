'use strict'
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('filters').del()
    .then(function () {
      return Promise.all([
        knex('filters').insert({
          id: 1,
          name: "",
          asset_name: "color.svg"
        }),
        knex('filters').insert({
          id: 2,
          name: "#pictureFilter",
          asset_name: "color.svg"
        }),
      ]);
    });
};
