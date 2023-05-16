/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = (knex) => {
  return knex('upload-img').insert([
    {id: 1, image: 'x', category:'x'},
  ]);
};

