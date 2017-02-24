'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('themes', table => {
    table.increments().primary();
    table.integer('path_id').notNullable();
    table.string('asset_name').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('themes');
};
