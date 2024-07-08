var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    var sql = "SELECT * FROM Customers WHERE address = 'Songkhla'";

    con.query(sql, function (err, result, fields) {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }

        console.log("Query result:");
        console.log(result);  // Output the entire result for debugging

        // Iterate through each row in the result set
        result.forEach((row) => {
            console.log(`ID: ${row['id']}, NAME: ${row['name']}, ADDRESS: ${row['address']}`);
        });
    });
});
