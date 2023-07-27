/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('menu_items', function (table) {
    table.increments();
    table.string('name').notNullable().unique().index();
    table.string('price').notNullable();
    table.integer('menu_id').unsigned().notNullable();
    table.timestamps();
    table
      .foreign('menu_id')
      .references('menus.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('menu_items');
};
