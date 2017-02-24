'use strict'
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('filters').del()
    .then(function () {
      return Promise.all([
        knex('filters').insert({
          id: 1,
          name: "#pictureFilter",
          asset_name: "color.svg"
        }),
        knex('filters').insert({
          id: 2,
          name: "",
          asset_name: "color.svg"
        }),
        knex('filters').insert({
          id: 3,
          name: "",
          asset_name: "color.svg"
        }),
        knex('filters').insert({
          id: 4,
          name: "",
          asset_name: "color.svg"
        }),
        knex('filters').insert({
          id: 5,
          name: "",
          asset_name: "color.svg"
        }),
        knex('filters').insert({
          id: 6,
          name: "",
          asset_name: "color.svg"
        })
      ]);
    });
};
