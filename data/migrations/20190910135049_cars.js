
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl
            .string('vin')
            .unique()
            .notNullable();
        tbl.string('make', 36).notNullable();
        tbl.string('model', 36).notNullable();
        tbl.integer('mileage').notNullable();
        tbl.string('drivetrain', 36);
        tbl.string('titleStatus');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
