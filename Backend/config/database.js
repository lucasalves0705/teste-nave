const { Model } = require('objection');
const Knex = require('knex')

const kenx = new Knex({
    client: 'mysql2',
    connection: {
        "host": "127.0.0.1",
        "user": "root",
        "password": "root",
        "database": "dbapi"
    }
});

Model.knex(kenx);

module.exports = Model
