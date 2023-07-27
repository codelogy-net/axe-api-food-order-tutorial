/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('orders', function (table) {
    table.increments();
    table.integer('menu_item_id').unsigned().notNullable();
    table.integer('user_id').unsigned().notNullable();
    table.integer('quantity').notNullable().defaultTo(1);
    table.timestamps();

    table
      .foreign('menu_item_id')
      .references('menu_items.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    table
      .foreign('user_id')
      .references('users.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('orders');
};
