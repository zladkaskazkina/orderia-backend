const Sequelize = require('sequelize');
const test = new Sequelize(
  "Orderia",
  "postgres",
  "example", 
  {
    host: "localhost",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  },
);
console.log(test);
test.authenticate().catch((error)=>{console.log(error)});