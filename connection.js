require('dotenv').config();
const mysql = require('mysql');

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect();

function queryDB(query, valores) {
    return new Promise((resolve, reject) => {
        connection.query(query, valores, function (err, resultados) {
            if (err)
                reject(err);
            else
                resolve(resultados);
        })
    })
}

module.exports = {queryDB, connection};