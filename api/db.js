import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ".12112403@htPmysql",
    database: "blog"
})