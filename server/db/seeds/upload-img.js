/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = (knex) => {
  return knex('upload-img').insert([
    {id: 1, image: 'x', category:'x', notes:'harper.jens google auth', user_id:'google-oauth2|111770166611151486153'},
    {id: 2, image: 'x', category:'Harold', notes:'Has auth0', user_id:'auth0|643f1b86097f35165998f052'},
    {id: 3, image: 'x', category:'x', notes:'No auth0', user_id:'x'}
  ]);
};

