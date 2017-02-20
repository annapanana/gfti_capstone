'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('images', table => {
    table.increments().primary();
    table.string('url');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('images');
};
