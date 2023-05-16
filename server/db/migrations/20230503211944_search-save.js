/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('save-search', (table) => {
      table.increments('id').primary()
      table.string('src')
      table.string('url')
      table.string('category').defaultTo(null)
      table.string('description')
    })
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('save-search')
  }