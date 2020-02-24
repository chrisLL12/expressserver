// Up migration
// Users table
exports.up = async knex => {
    await knex.schema
        .dropTableIfExists('users');
    await knex.schema.createTable('users',
        table => {
            table.increments();
            table.string('display_name', 100)
                .unique().notNullable();
            table.string('username', 25)
                .unique().notNullable();
            ['created_on', 'last_login'].forEach(column =>
                table.timestamp(column)
                    .defaultTo(knex.fn.now())
                    .notNullable()
            );
        });

    // Drinks table
    await knex.schema.dropTableIfExists('drinks');
    await knex.schema.createTable('drinks', table => {
       table.increments();
       table.string('drinks_name', 100).notNullable();
       table.unique(['drinks_name']);
    });

    // Reviews table
    await knex.schema
        .dropTableIfExists('reviews');
    await knex.schema.createTable('reviews',
        table => {
            table.increments();
            table.string('title', 100)
                .unique().notNullable();
            table.string('reviews_comment', 500)
                .unique().notNullable();
            table.integer('created_by').notNullable();
            table.timestamp('created_on')
                .defaultTo(knex.fn.now())
                .notNullable();
        });

    // Rating table
    await knex.schema.dropTableIfExists('rating');
    await knex.schema.createTable('rating', table => {
        table.increments();
        table.integer('rating_number').notNullable();
    });

    // Drinks_categories table
    await knex.schema.dropTableIfExists('drinks_categories');
    await knex.schema.createTable('drinks_categories', table => {
        table.integer('drinks_id');
        table.integer('rating_id');
        table.integer('reviews_id');
        table.integer('users_id');
        table.foreign('drinks_id')
            .references('drinks.id')
            .onDelete('cascade');
        table.foreign('rating_id')
            .references('rating.id')
            .onDelete('cascade');
        table.foreign('reviews_id')
            .references('reviews.id')
            .onDelete('cascade');
        table.foreign('users_id')
            .references('users.id')
            .onDelete('');
        table.primary(['drinks_id', 'rating_id', 'reviews_id', 'users_id']);
    });
};

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

// Down migration
// Users table
exports.down = async knex => {
    await knex.schema
        .dropTableIfExists('users');
    await knex.schema.createTable(
        'users', table => {
            table.specificType('id', 'serial');
            table.string('display_name', 100);
            table.string('username', 25);
            ['created_on', 'last_login'].forEach(column =>
                table.timestamp(column)
            );
        }
    );

    // Drinks table
    await knex.schema.dropTableIfExists('drinks');
    await knex.schema.createTable('drinks', table => {
        table.specificType('id', 'serial');
        table.string('drinks_name', 100);
    });

    // Reviews table
    await knex.schema
        .dropTableIfExists('reviews');
    await knex.schema.createTable('reviews',
        table => {
            table.specificType('id', 'serial');
            table.string('title', 100);
            table.string('reviews_comment', 500);
            table.integer('created_by');
            table.timestamp('created_on');
        });

    // Rating table
    await knex.schema.dropTableIfExists('rating');
    await knex.schema.createTable('rating', table => {
        table.specificType('id', 'serial');
        table.integer('rating_number');
    });

    // Drinks_categories table
    await knex.schema.dropTableIfExists('drinks_categories');
    await knex.schema.createTable('drinks_categories', table => {
        table.integer('drinks_id');
        table.integer('rating_id');
        table.integer('reviews_id');
        table.integer('users_id');
    });

};
