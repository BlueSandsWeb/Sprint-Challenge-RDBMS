module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/rolex.db3',
    },
    useNullAsDefault: true, // needed for sqlite
    migrations: {
      directory: './data/migrations'
    },
    // seeds: {
    //   directory: './data/seeds'
    // },
    // by default SQLite will not enforce foreign keys!
    pool: {
      afterCreate: (connection, done) => {
        connection.run('PRAGMA foreign_keys = ON', done);
      }
    }
  }

};