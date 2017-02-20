'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('templates', table => {
    table.increments().primary();
    table.string('source').notNullable();
    table.string('greetings_phrase').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('templates');
};
