/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('upload-img', (table) => {
      table.increments('id').primary('id')
      table.text('image')
      table.string('category').defaultTo(null)
      table.text('notes')
    })
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('upload-img')
  }
