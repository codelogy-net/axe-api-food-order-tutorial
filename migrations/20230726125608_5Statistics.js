/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('statistics', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.string('uid').notNullable().unique().index();
    table.integer('total').notNullable();
    table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('statistics');
};
