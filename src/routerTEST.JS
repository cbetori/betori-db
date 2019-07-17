require('dotenv').config('.env')
const {Client } = require('pg')


// console.log(process.env.DB_HOST_H)

// const client = new Client({
//     user: process.env.DB_USER_H,
//     host: process.env.DB_HOST_H,
//     database: process.env.DB_DATABASE_H,
//     password: process.env.DB_PASSWORD_H,
//     port: process.env.DB_PORT_H,
//   })

const client = new Client({
  connectionString: process.env.DB_URL,
  ssl: true
})

  client.connect()
  
  client.query('SELECT * FROM "tblIDB_Funds"', (err, res) => {
    if (err) throw err
    res.rows.map((rows)=>{
      console.log(JSON.stringify(rows))
    })
    client.end()
  })