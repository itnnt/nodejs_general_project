var express = require('express');
/**
 * Express is a minimal and flexible Node.js web application framework 
 * that provides a robust set of features to develop web and mobile applications. 
 * It facilitates the rapid development of Node based Web applications. 
 * Following are some of the core features of Express framework −
Allows to set up middlewares to respond to HTTP Requests.

Defines a routing table which is used to perform different actions based on HTTP Method and URL.

Allows to dynamically render HTML Pages based on passing arguments to templates.
 */
var app = express();

/**
 * have imported mssql module and called connect() method to connect with database. 
 * We have passed config object which includes database information 
 * such as userName, password, database server and database name. 
 * On successful connection with the database, 
 * use sql.request object to execute query to any database table and fetch the records.
 */

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: '123$%^qwe',
        server: 'dmpfra.vinceredev.com', 
        database: 'strivesales' 
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query(`
        select
        com.clientCorporationID as company_externalid
        , com.name as company_name
        , com.dateAdded
        , com.address1
        , com.address2
        , com.city
        , com.state
        , com.phone
        , com.zip
        , c.COUNTRY
        , com.billingContact
        , com.billingPhone
        , com.companyDescription
        , com.competitors
        , com.customText1
        , com.feeArrangement
        , com.numOffices
        , com.revenue
        , com.status
        , com.twitterHandle
        , com.billingAddress1
        , com.billingAddress2
        , com.billingCity
        , com.billingState
        , com.billingZip
        , c1.COUNTRY as billingCountry
        , com.businessSectorList
        , com.companyURL as website
        , com.facebookProfileName
        , com.linkedinProfileName
        , com.numEmployees as employees_number
        , com.parentClientCorporationID as parent_externalid
        from bullhorn1.BH_ClientCorporation com
        join bullhorn1.BH_Department de on com.departmentID = de.departmentID
        left join tmp_country c on com.countryID = c.CODE
        left join tmp_country c1 on com.billingCountryID = c1.CODE
        where com.status != 'Archive'
        and de.name = 'Strive Sales'
        ;
        `, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});