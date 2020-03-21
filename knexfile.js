module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'coffeereviews',
      user: 'chris',
      password: 'coffee'
    }
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  },
  test: {
    client: 'postgresql',
    connection: {
      database: 'drink-test',
      user: 'chris',
      password: 'coffee'
    }
  }
};
