'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('postcards_images', table => {
    table.increments().primary();
    table.integer('postcard_id').notNullable().references('id').inTable('postcards').onDelete('CASCADE');
    table.integer('image_id').notNullable().references('id').inTable('images').onDelete('CASCADE');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('postcards_images');
};
