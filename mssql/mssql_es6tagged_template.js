const sql = require("mssql")

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
}

sql.connect(config).then(() => {
    return sql.query`
            select
            c.*
            , l.BusinessStreet, l.BusinessCity, l.BusinessState, l.BusinessPostalCode, l.BusinessCountry, l.BusinessPhone, l.BusinessFax
            , u.UserName
            from Companies c
            left join Relation_CompanyToDefaultLocation dl on c.ItemId = dl.CompanyId
            left join Locations l on dl.LocationId = l.ItemId
            left join Users u on c.OwnerId = u.ItemId
            `
}).then(result => {
    console.dir(result)
}).catch(err => {
    console.error("---------------- error --------------")
    console.error(err)
    process.exit()
})

sql.on('error', err => {
    console.error("================= ERROR ================")
    console.error(err)
})
