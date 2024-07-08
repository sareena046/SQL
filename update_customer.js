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

  const sql = "UPDATE customers SET address = 'Thailand' WHERE name = 'nana'";

  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});
