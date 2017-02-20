'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('colors', table => {
    table.increments().primary();
    table.string('theme_name').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('colors');
};
