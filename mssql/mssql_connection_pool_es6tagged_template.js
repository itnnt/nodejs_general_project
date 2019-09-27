const sqlCommand = require("./sql_command");
const sql = require('mssql');

const config = {
    user: 'sa',
    password: '123$%^qwe',
    server: 'dmpfra.vinceredev.com',
    database: 'oakstone',
    options: {
        //encrypt: true // Use this if you're on Windows Azure
    }
};
/**
 * Using a single connection pool for your application/service is recommended.
 * Instantiating a pool with a callback, or immediately calling .connect
 * , is asynchronous to ensure a connection can be established before returning.
 * From that point, you're able to acquire connections as normal:
 */
new sql.ConnectionPool(config).connect().then(pool => {
    // return pool.query`select 17 as id, 'user1' as username, 'user1@email.com' as email`
    return pool.query(sqlCommand.queryDummyData)
}).then(result => {
    console.dir(result)
}).catch(err => {
    // ... error checks
    console.error(err)
})
