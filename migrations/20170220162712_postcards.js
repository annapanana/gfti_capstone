'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('postcards', table => {
    table.increments().primary();
    table.integer('template_id').notNullable().notNullable().references('id').inTable('templates').onDelete('CASCADE');
    table.integer('color_id').notNullable().notNullable().references('id').inTable('colors').onDelete('CASCADE');
    table.integer('theme_id').notNullable().notNullable().references('id').inTable('themes').onDelete('CASCADE');
    table.string('greetings_subtext').notNullable();
    table.string('image_url').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('postcards');
};
