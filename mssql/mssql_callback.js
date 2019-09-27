const mssql = require('mssql')

const config = {
    user: 'sa',
    password: '123$%^qwe',
    server: 'dmpfra.vinceredev.com',
    database: 'oakstone',
    options: {
        //encrypt: true // Use this if you're on Windows Azure
    }
}

mssql.connect(config, function (error) {
    if (error) {
        console.error(error)
    }
    new mssql.Request()
        .query(`
            select
            c.*
            , l.BusinessStreet, l.BusinessCity, l.BusinessState, l.BusinessPostalCode, l.BusinessCountry, l.BusinessPhone, l.BusinessFax
            , u.UserName
            from Companies c
            left join Relation_CompanyToDefaultLocation dl on c.ItemId = dl.CompanyId
            left join Locations l on dl.LocationId = l.ItemId
            left join Users u on c.OwnerId = u.ItemId
            `, (err, data) => {
            if (err) {
                console.error(err)
            }
            console.dir(data)
        })
})

mssql.on('error', err => {
    console.error(err)
})
