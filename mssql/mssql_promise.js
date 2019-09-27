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

sql.connect(config).then(pool => {
    // query
    return pool.request()
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
}).then(result => {
    console.dir(result)
}).catch(err => {
    console.error(err)
})

sql.on('error', err => {
    // error handler
    console.error(err)
})




