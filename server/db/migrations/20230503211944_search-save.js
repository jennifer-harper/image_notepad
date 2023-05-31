/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('save-search', (table) => {
      table.increments('id').primary('id')
      table.text('src')
      table.text('url')
      table.string('category').defaultTo(null)
      table.text('description')
      table.text('notes')
    })
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('save-search')
  }