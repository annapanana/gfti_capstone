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
          frame_id: 1,
          color_id: 1,
          greetings_subtext: 'greetings from boulder, co',
          image_url: 'http://www.boulderco.com/uploads/slideshow/1354198589.jpg',
          from_zip: '80304',
          name: "no name",
          notes: "special card description",
          thumbnail_url: "https://s3-us-west-2.amazonaws.com/assets.lob.com/psc_194c9b2f4789fd0e_thumb_large_1.png?AWSAccessKeyId=AKIAIILJUBJGGIBQDPQQ&Expires=1490566083&Signature=VF%2BXAzctzw7JrJEpldY5yGsfc80%3D",
          is_saved: false
          // order_id: 'psc_e9ca887117c14134',
          // image_processed: true
        }),
        knex('postcards').insert({
          id: 3,
          template_name: "no_image",
          filter_id: 1,
          theme_id: 1,
          frame_id: 1,
          color_id: 1,
          greetings_subtext: 'greetings from boulder, co',
          image_url: 'http://www.boulderco.com/uploads/slideshow/1354198589.jpg',
          from_zip: '80304',
          name: "anna",
          notes: "Hello friends!",
          thumbnail_url: "https://s3-us-west-2.amazonaws.com/assets.lob.com/psc_2c52672d5a1cdbb0_thumb_large_1.png?AWSAccessKeyId=AKIAIILJUBJGGIBQDPQQ&Expires=1491086457&Signature=umo%2BDK3fkboW5DYyqK1mhqWmGEQ%3D",
          is_saved: true
          // order_id: 'psc_e9ca887117c14134',
          // image_processed: true
        }),
        knex('postcards').insert({
          id: 4,
          template_name: "no_image",
          filter_id: 1,
          theme_id: 1,
          frame_id: 1,
          color_id: 1,
          greetings_subtext: 'greetings from boulder, co',
          image_url: 'http://www.boulderco.com/uploads/slideshow/1354198589.jpg',
          from_zip: '80304',
          name: "no name",
          notes: "this is a poscard with no name.",
          times_used: 3,
          thumbnail_url: "https://s3-us-west-2.amazonaws.com/assets.lob.com/psc_b7418da7d488089b_thumb_large_1.png?AWSAccessKeyId=AKIAIILJUBJGGIBQDPQQ&Expires=1491086067&Signature=62xw%2FofL5GN6midwzynldBIXtGM%3D",
          is_saved: true
          // order_id: 'psc_e9ca887117c14134',
          // image_processed: true
        }),
        knex('postcards').insert({
          id: 5,
          template_name: "no_image",
          filter_id: 1,
          theme_id: 1,
          frame_id: 1,
          color_id: 1,
          greetings_subtext: 'greetings from boulder, co',
          image_url: 'http://www.boulderco.com/uploads/slideshow/1354198589.jpg',
          from_zip: '80304',
          name: "no name",
          notes: "this is a poscard with no name.",
          thumbnail_url: "https://s3-us-west-2.amazonaws.com/assets.lob.com/psc_5a33d027ebc40de7_thumb_large_1.png?AWSAccessKeyId=AKIAIILJUBJGGIBQDPQQ&Expires=1491083303&Signature=fsT3GxrH2bCM1wjf3l%2FCHiRizjg%3D",
          is_saved: true
          // order_id: 'psc_e9ca887117c14134',
          // image_processed: true
        }),
        knex('postcards').insert({
          id: 6,
          template_name: "no_image",
          filter_id: 1,
          theme_id: 1,
          frame_id: 1,
          color_id: 1,
          greetings_subtext: 'greetings from boulder, co',
          image_url: 'http://www.boulderco.com/uploads/slideshow/1354198589.jpg',
          from_zip: '80304',
          name: "no name",
          notes: "this is a poscard with no name.",
          thumbnail_url: "https://s3-us-west-2.amazonaws.com/assets.lob.com/psc_279dafd01b5c19ee_thumb_large_1.png?AWSAccessKeyId=AKIAIILJUBJGGIBQDPQQ&Expires=1491087267&Signature=MZFEpsO8lwLCBYioLVEF3jaBviw%3D",
          is_saved: true
          // order_id: 'psc_e9ca887117c14134',
          // image_processed: true
        }),
        knex('postcards').insert({
          id: 7,
          template_name: "no_image",
          filter_id: 2,
          theme_id: 2,
          frame_id: 1,
          color_id: 1,
          greetings_subtext: 'greetings from boulder, co',
          image_url: 'http://www.boulderco.com/uploads/slideshow/1354198589.jpg',
          from_zip: '80304',
          name: "no name",
          notes: "this is a poscard with no name.",
          thumbnail_url: "https://s3-us-west-2.amazonaws.com/assets.lob.com/psc_a123788ea1242f06_thumb_large_1.png?AWSAccessKeyId=AKIAIILJUBJGGIBQDPQQ&Expires=1491087120&Signature=SnShVnO17%2BCMlQ00zGTm3hfHI2g%3D",
          is_saved: true
          // order_id: 'psc_e9ca887117c14134',
          // image_processed: true
        }),
        knex('postcards').insert({
          id: 8,
          template_name: "no_image",
          filter_id: 3,
          theme_id: 3,
          frame_id: 1,
          color_id: 1,
          greetings_subtext: 'greetings from boulder, co',
          image_url: 'http://www.boulderco.com/uploads/slideshow/1354198589.jpg',
          from_zip: '80304',
          name: "no name",
          notes: "this is a poscard with no name.",
          thumbnail_url: "https://s3-us-west-2.amazonaws.com/assets.lob.com/psc_c7e076d1c78e2ce0_thumb_large_1.png?AWSAccessKeyId=AKIAIILJUBJGGIBQDPQQ&Expires=1491087012&Signature=VkAfCUCwn68sZERuOyJmFFCcvDQ%3D",
          is_saved: true
          // order_id: 'psc_e9ca887117c14134',
          // image_processed: true
        })
      ]);
    });
};
