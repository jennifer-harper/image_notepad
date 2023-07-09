/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = (knex) => {
  return knex('upload-img').insert([
    {id: 1, image: 'x', category:'Tea', notes:'Love this tea set, would be a great birthday present for someone, or maybe me', user_id:'auth0|643f1b86097f35165998f052'},
    {id: 2, image: 'x', category:'Cakes', notes:'This cake wasn\'t GF but would adapt well, use banana and yogurt too. Link: greatcakes.com/vanilla', user_id:'auth0|643f1b86097f35165998f052'},
    {id: 3, image: 'x', category:'Tarts', notes:'Mum suggested these tarts from Dish magazine, issue 109. Should be able to find them online', user_id:'auth0|643f1b86097f35165998f052'},
    {id: 4, image: 'x', category:'Tea', notes:'Loved the tea at Olive Cafe, maybe tea and cake with Lisa next time we get togther.', user_id:'auth0|643f1b86097f35165998f052'},
    {id: 5, image: 'x', category:'Baking', notes:'Do the macaroon making course at Wellington High School sometime this year!', user_id:'auth0|643f1b86097f35165998f052'},
    {id: 6, image: 'x', category:'Cocktails', notes:'Cocktails with rosemary are amazing, make a gin cocktails at Christmas time?', user_id:'auth0|643f1b86097f35165998f052'},
  ]);
};


