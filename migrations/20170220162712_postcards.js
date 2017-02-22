'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('postcards', table => {
    table.increments().primary();
    table.string('template_name').notNullable();
    table.integer('color_id').notNullable();
    table.integer('theme_id').notNullable();
    table.string('greetings_subtext').notNullable();
    table.string('image_url').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('postcards');
};
