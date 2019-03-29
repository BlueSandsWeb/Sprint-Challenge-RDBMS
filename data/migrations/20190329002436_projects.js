// new changes we need to make
exports.up = function (knex) {                   // make sure you return from this!
  return knex.schema.createTable('projects', function (tbl) {
    // primary key to configure table: called id and make it auto-increment
    tbl.increments();

    tbl.string('name', 128)
      .notNullable()
      .unique() // <type> (<column name>, <size>)

    tbl.text('project_description')
      .notNullable()

    tbl.boolean('finished')
      .notNullable()
  })

    .createTable('actions', function (tbl) {
      tbl.increments();

      tbl.integer('project_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      tbl.text('action_description')
        .notNullable()

      tbl.text('notes')

      tbl.boolean('action_finished')
        .notNullable()
    })
};

// how to undo the changes made in the up function
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('actions').dropTableIfExists('projects');
};
