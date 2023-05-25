/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = (knex) => {
  return knex('user-login').insert([
    {id: 1, email: 'x', password:'x', username:'x'},
  ]);
};