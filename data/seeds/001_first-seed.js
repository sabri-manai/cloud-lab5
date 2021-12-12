const { default: knex } = require("knex")

const profiles = [
  {
    name:'Imen'
  },
  {
    name:'Aymen'
  },
  {
    name:'Fares'
  },
  {
    name:'Nadia'
  },
  {
    name:'Mohamed'
  }
];
exports.seed=function(Knex){
  return knex('profile').del()
  .then(()=>{
    return knex('profiles').insert(profiles)
  })
};