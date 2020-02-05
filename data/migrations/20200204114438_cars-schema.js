
exports.up = function(knex) {
  return knex.schema.createTable('car-dealer', tbl => {
      tbl.increments();
      tbl.integer('VIN').unique().notNullable();
      tbl.text('Make', 20).notNullable();
      tbl.text('Model', 20).notNullable();
      tbl.decimal('Mileage').notNullable();
      tbl.text('Transmission Type');
      tbl.text('Title Status');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('car-dealer');
};
