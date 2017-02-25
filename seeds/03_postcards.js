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
          notes: "this is a poscard with no name.",
          thumbnail_url: "https://s3-us-west-2.amazonaws.com/assets.lob.com/psc_194c9b2f4789fd0e_thumb_large_1.png?AWSAccessKeyId=AKIAIILJUBJGGIBQDPQQ&Expires=1490566083&Signature=VF%2BXAzctzw7JrJEpldY5yGsfc80%3D"
        })
      ]);
    });
};
