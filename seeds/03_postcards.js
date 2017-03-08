'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('postcards').del()
    .then(function () {
      return Promise.all([
        knex('postcards').insert({
          id: 1,
          template_name: "classic/classic_01.html",
          filter_id: 4,
          theme_id: 1,
          frame_id: 1,
          color_id: 1,
          font_id: 1,
          font_size: 40,
          image_pos_x: -135,
          image_pos_y: 0,
          image_scale: 2.0,
          text_pos: 0,
          greetings_subtext: 'Greetings from Peru',
          image_url: 'https://gftiresources.s3.amazonaws.com/peru.jpg',
          name: "Peru",
          notes: "A hike through Machu Picchu in summer.",
          thumbnail_url: "https://s3-us-west-2.amazonaws.com/assets.lob.com/psc_1e8a7c957aa97767_thumb_large_1.png?AWSAccessKeyId=AKIAIILJUBJGGIBQDPQQ&Expires=1491513388&Signature=9YSaRSh%2FEppj0y38AOVXm9sVmR0%3D",
          pdf_url: "https://s3-us-west-2.amazonaws.com/assets.lob.com/psc_1e8a7c957aa97767.pdf?AWSAccessKeyId=AKIAIILJUBJGGIBQDPQQ&Expires=1491513388&Signature=jCy4Ik8b5KHFEc02yJzKTf731CE%3D",
          is_saved: true,
          order_id: 'psc_e9ca887117c14134',
          delivery_date: '1234'
        }),
        knex('postcards').insert({
          id: 2,
          template_name: "modern/modern_01.html",
          filter_id: 4,
          theme_id: 3,
          frame_id: 1,
          color_id: 5,
          font_id: 0,
          font_size: 45,
          image_pos_x: -60,
          image_pos_y: -136,
          image_scale: 2.0,
          text_pos: 26,
          greetings_subtext: 'Colorado',
          image_url: 'https://gftiresources.s3.amazonaws.com/colorado.jpg',
          name: "Colorado Card",
          notes: "Come visit me in CO!",
          thumbnail_url: "https://s3-us-west-2.amazonaws.com/assets.lob.com/psc_73abcd0ecb8fef1d_thumb_large_1.png?AWSAccessKeyId=AKIAIILJUBJGGIBQDPQQ&Expires=1491513667&Signature=SFk4UYd2k%2BkP2WUMaUhiMw6GGow%3D",
          pdf_url: "https://s3-us-west-2.amazonaws.com/assets.lob.com/psc_73abcd0ecb8fef1d.pdf?AWSAccessKeyId=AKIAIILJUBJGGIBQDPQQ&Expires=1491513667&Signature=g30DestwsG0BevSvXkujcRC56L8%3D",
          is_saved: true,
          order_id: 'psc_e9ca887117c14134',
          delivery_date: '1234'
          // image_processed: true
        }),
        knex('postcards').insert({
          id: 3,
          template_name: "playful/playful_02.html",
          filter_id: 3,
          theme_id: 2,
          frame_id: 2,
          color_id: 2,
          font_id: 0,
          font_size: 53,
          image_pos_x: -19,
          image_pos_y: -54,
          image_scale: 1.0,
          text_pos: 43,
          greetings_subtext: 'NYC',
          image_url: 'http://media.architecturaldigest.com/photos/5699802bc6772b7614567435/2:1/w_2560/new-york-city-guide.jpg',
          name: "Empire State",
          notes: "What a great city to visit!",
          times_used: 3,
          thumbnail_url: "https://s3-us-west-2.amazonaws.com/assets.lob.com/psc_988d32e00315128d_thumb_large_1.png?AWSAccessKeyId=AKIAIILJUBJGGIBQDPQQ&Expires=1491513955&Signature=lSwIUvr3HbVDCb1kfLewJmNXwwo%3D",
          pdf_url: "https://s3-us-west-2.amazonaws.com/assets.lob.com/psc_988d32e00315128d.pdf?AWSAccessKeyId=AKIAIILJUBJGGIBQDPQQ&Expires=1491513955&Signature=UHQc7yr9LPK2DbHpQPJixUKhdxU%3D",
          is_saved: true,
          order_id: 'psc_e9ca887117c14134',
          delivery_date: '1234'
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('postcards_id_seq', (SELECT MAX(id) FROM postcards))");
    });
};
