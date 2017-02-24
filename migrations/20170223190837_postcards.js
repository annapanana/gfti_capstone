'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('postcards', table => {
    table.increments().primary();
    table.string('template_name').notNullable();
    table.integer('filter_id').notNullable().references('id').inTable('filters').onDelete('CASCADE');
    table.integer('theme_id').notNullable().references('id').inTable('themes').onDelete('CASCADE');
    table.string('greetings_subtext').notNullable();
    table.string('image_url').notNullable();
    table.string('from_zip').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('postcards');
};
