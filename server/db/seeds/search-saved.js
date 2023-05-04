/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = (knex) => {
  return knex('save-search').insert([
    {id: 1, src: 'x', url:'x', category:'x'},

  ]);
};
