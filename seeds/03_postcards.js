'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('postcards').del()
    .then(function () {
      return Promise.all([
        knex('postcards').insert({
          id: 1,
          template_name: "no_image",
          filter_id: 1,
          theme_id: 1,
          greetings_subtext: 'greetings from boulder, co',
          image_url: 'http://www.boulderco.com/uploads/slideshow/1354198589.jpg',
          from_zip: '80304',
          name: "no name",
          notes: "this is a poscard with no name."
        })
      ]);
    });
};
