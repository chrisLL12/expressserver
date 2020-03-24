// Create tables for drink descriptions and favorites
exports.up = async knex => {
    await knex.schema.dropTableIfExists('drink_description');
    await knex.schema.createTable('drink_description', table => {
        table.increments();
        table.string('drink_title', 100).notNullable();
        table.unique(['drink_title']);
        table.string('drink_bio', 500)
            .unique().notNullable();
    });
    await knex.schema.dropTableIfExists('questions');
    await knex.schema.createTable('questions', table => {
        table.increments();
        table.string('question_title', 500).notNullable();
        table.unique(['question_title']);
    });
  
};

exports.down = async knex => {
    await knex.schema.dropTableIfExists('drink_description');
    await knex.schema.createTable('drink_description', table => {
        table.specificType('id', 'serial');
        table.string('drink_title', 100);
        table.string('drink_bio', 500);
    });
    await knex.schema.dropTableIfExists('questions');
    await knex.schema.createTable('questions', table => {
        table.specificType('id', 'serial');
        table.string('question_title', 500);
    });
};
