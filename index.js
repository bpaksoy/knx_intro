const env = "development";
const config = require("./knexfile.js")[env];
const knex = require("knex")(config)

knex("car").then(function(result) {
 console.log(result);
 knex.destroy();
})
.catch(function(err) {
  console.log(err);
  knex.destroy();
  process.exit(1);
})
