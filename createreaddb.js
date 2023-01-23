const sqlite3 = require('sqlite3').verbose();

let sql;
// open database
const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.error(err);
  }
  else {
    console.log('connected');
  }
});

// create table
// let sql = `Create TABLE friendsdb(last_name, first_name, date_of_birth, email)`;
// db.run(sql);


// insert data
// sql = `INSERT INTO friendsdb(last_name, first_name, date_of_birth, email) VALUES (?, ?, ?, ?)`;
/* db.run(sql, [], (err) => {
    if (err) {
        return console.error(err);
    }
    else {
        console.log('data added.');
    }
});
*/

const friends = {};
// show the table.
db.all(`SELECT * FROM friendsdb`, {}, (err, rows) => {
  if (err) {
    return console.error(err)
  }
  else {

    let id = 1;
    rows.forEach((row => {
        
      friends[id] = {

        last_name: `${row.last_name}`,
        first_name: `${row.first_name}`,
        date_of_birth: `${row.date_of_birth}`,
        email: `${row.email}`
      }
    
      id++; 
    }));
  }
  // console.log(friends)
});


// close database
db.close((err) => {
  if (err) {
    return console.error(err)
  }
  else {
    console.log('closed')
  }});
  
  module.exports = {
    friends
  };
