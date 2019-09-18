const sql = require('mssql')

let config = {
    user: 'sa',
    password: '123$%^qwe',
    server: 'localhost',
    database: 'testdb',
    port: 1433
};

async function getTestTable() {
    try {
        await sql.connect(config)
        const result = await sql.query`select * from test_table`
        console.log(result)
    } catch (err) {
        // ... error checks
        console.log(err)
    }
}

getTestTable()