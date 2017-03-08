'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('postcards', table => {
    table.increments().primary();
    table.string('template_name').notNullable();
    table.integer('filter_id').notNullable();
    table.integer('theme_id').notNullable();
    table.integer('frame_id').notNullable();
    table.integer('color_id').notNullable();
    table.integer('font_id').notNullable();
    table.integer('font_size').notNullable();
    table.float('image_scale').notNullable();
    table.integer('image_pos_x').notNullable();
    table.integer('image_pos_y').notNullable();
    table.integer('text_pos').notNullable();
    table.string('greetings_subtext').notNullable();
    table.string('image_url').notNullable();
    table.string('name');
    table.string('notes');
    table.string('thumbnail_url').notNullable();
    table.string('pdf_url').notNullable();
    table.bool('is_saved').notNullable().defaultsTo(false);
    table.integer('times_used').notNullable().defaultsTo(1);
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.string('order_id').notNullable();
    table.string('delivery_date').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('postcards');
};
