const sql = require('mssql')

var config = {
    user: 'sa',
    password: '123$%^qwe',
    server: 'localhost',
    database: 'testdb',
    port: 1433
};

function getTestTable() {
    // connect to your database
    sql.connect(config, function (err) {
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
        // query to the database and get the records
        request.query(`
        select * from test_table
        ;
    `, function (err, recordset) {
            if (err) console.log(err)
            // send records as a response
            console.log(recordset);
        });
    });
}
getTestTable() 