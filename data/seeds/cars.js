
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: '1234567890', make: 'Ford', model: 'F-150', mileage: 120000, drivetrain: 'Automatic', titleStatus: 'clean'}
      ]);
    });
};
