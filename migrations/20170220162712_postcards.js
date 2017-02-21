'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('postcards', table => {
    table.increments().primary();
    table.string('title').notNullable();
    table.string('search_word').notNullable();
    table.string('maker');
    table.string('notes');
    table.integer('times_used').notNullable().defaultsTo(1);
    table.integer('template_id').notNullable().notNullable().references('id').inTable('templates').onDelete('CASCADE');
    table.integer('color_id').notNullable().notNullable().references('id').inTable('colors').onDelete('CASCADE');
    table.integer('theme_id').notNullable().notNullable().references('id').inTable('themes').onDelete('CASCADE');
    table.string('greetings_subtext').notNullable();
    table.bool('is_location').notNullable().defaultTo(false);
    table.string('send_to').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('postcards');
};
