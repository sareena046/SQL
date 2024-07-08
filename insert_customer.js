var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    var sql = "INSERT INTO Customers (name, address) VALUES ?";
    var values = [
        ['Taey', 'Krabi'],
        ['nana', 'Satun'],
        ['supphawit', 'Phatthalung'],
        ['sareena', 'Trang'],
        ['Luka', 'Songkala']
    ];

    con.query(sql, [values], function(err, result) {
        if (err) throw err;
        console.log("Customer Created.");
    });

});