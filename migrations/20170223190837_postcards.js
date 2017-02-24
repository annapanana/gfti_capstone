'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('postcards', table => {
    table.increments().primary();
    table.string('template_name').notNullable();
    table.integer('filter_id').notNullable();
    table.integer('theme_id').notNullable();
    table.string('greetings_subtext').notNullable();
    table.string('image_url').notNullable();
    table.string('from_zip').notNullable();
    table.string('name');
    table.string('notes');
    table.string('thumbnail_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('postcards');
};
