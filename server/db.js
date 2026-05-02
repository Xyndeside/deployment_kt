const {Pool} = require('pg');

const pool = new Pool({
    host: 'db',
    user: 'admin_kov',
    password: 'Admin123!',
    database: 'sockets_db',
    port: 5432,
});

module.exports = pool;