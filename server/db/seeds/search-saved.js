/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('save-search').del()
  await knex('save-search').insert([
    {id: 1, src: 'x', url:'x', category:'x'},

  ]);
};
