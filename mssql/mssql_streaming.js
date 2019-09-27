sql_command = require("./sql_command");
sql = require("mssql");

const config = {
    user: 'sa',
    password: '123$%^qwe',
    server: 'dmpfra.vinceredev.com',
    database: 'oakstone',
    options: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
};

sql.connect(config, err => {
    if (err) {
        console.error(err)
    }

    const request = new sql.Request();
    request.stream = true
    request.query(sql_command.queryDummyData);

    request.on('recordset', columns => {
        // Emitted once for each recordset in a query
        // console.log(columns)
    });

    let rowsToProcess = [];
    request.on('row', row => {
        // console.log(row)
        rowsToProcess.push(row);
        /**
         * When streaming large sets of data you want to back-off or chunk the amount of data you're processing to prevent memory exhaustion issues;
         * you can use the Request.pause() function to do this.
         * Here is an example of managing rows in batches of 15:
         */
        if (rowsToProcess.length >= 15) {
            request.pause();
            processRow();
        }
    });

    request.on('error', err => {
        // May be emitted multiple times
    });

    request.on('done', result => {
        // Always emitted as the last one
        processRow();
    });

    function processRow() {
        // print the processed rows to console
        console.log(rowsToProcess);
        console.log("------------------------------------------------------");
        // reset the rowsToProcess array
        rowsToProcess = [];
        // resume the rows processing
        request.resume();
    }
});

sql.on('error', err => {
    console.error(err)
});
