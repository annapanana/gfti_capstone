'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('filters', table => {
    table.increments().primary();
    table.string('name').notNullable();
    table.string('asset_name').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('filters');
};
