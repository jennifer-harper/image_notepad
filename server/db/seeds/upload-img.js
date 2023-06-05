/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = (knex) => {
  return knex('upload-img').insert([
    {id: 1, image: 'x', category:'x', notes:'x', user_id:'auth0|643f1b86097f35165998f052'},
  ]);
};

