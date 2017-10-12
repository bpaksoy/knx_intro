
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("car").del()
    .then(function () {
      // Inserts seed entries
      return knex("car").insert([
        {
         make: "Nissan",
         year: 2013,
         model: "Rogue",
         color: "white",
         runs: true
       },
        {
          make: "BMW",
          year: 1970,
          model: "2002",
          color: "light blue",
          runs: true
       },
        {
          make: "Honda",
          year: 1993,
          model: "Civic",
          color: "Rust",
          runs: false
       }
      ]);
    });
};
