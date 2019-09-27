const sql = require('mssql')

const config = {
    user: 'sa',
    password: '123$%^qwe',
    server: 'dmpfra.vinceredev.com',
    database: 'oakstone',
    options: {
        //encrypt: true // Use this if you're on Windows Azure
    }
}

async function getData() {
    try {
        let pool = await sql.connect(config)
        let result1 = await pool.request()
            .query(`
            select
            c.*
            , l.BusinessStreet, l.BusinessCity, l.BusinessState, l.BusinessPostalCode, l.BusinessCountry, l.BusinessPhone, l.BusinessFax
            , u.UserName
            from Companies c
            left join Relation_CompanyToDefaultLocation dl on c.ItemId = dl.CompanyId
            left join Locations l on dl.LocationId = l.ItemId
            left join Users u on c.OwnerId = u.ItemId
            `)

        console.dir(result1)

        // Stored procedure

        // let result2 = await pool.request()
        //     .input('input_parameter', sql.Int, value)
        //     .output('output_parameter', sql.VarChar(50))
        //     .execute('procedure_name')
        // console.dir(result2)
    } catch (err) {
        // ... error checks
        console.error('There are some errors', err)
    }
}

getData()
sql.on('error', err => {
    // ... error handler
    console.log('Error on sql')
})




