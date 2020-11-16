console.log('Server-side code running');
var mysql = require('mysql');
var { teachingQuery, query1, query2 } = require('./queries');

const express = require('express');

const app = express();

// serve files from the public directory
app.use(express.static('public'));

// start the express web server listening on 8080
app.listen(8080, () => {
  console.log('listening on 8080');
});

// serve the homepage
app.get('/', (req, res) => {
    console.log('got a get / request ');
    // console.log(req);
  res.sendFile(__dirname + '/index.html');
});

app.get('/query1', (req, res) => {
    console.log('got request for query 1');
    makeQuery1();
    resp1Printer();
    // res.sendFile(__dirname + '/index.html');
    res.send(resp1);
})

app.get('/query2', (req, res) => {
    console.log('got request for query 2');
    makeQuery2();
    resp2Printer();
    // res.sendFile(__dirname + '/index.html');
    res.send(resp2);
})

app.get('/query3', (req, res) => {
    console.log('got request for query 3');
    makeQuery3();
    // res.sendFile(resp2);
    resp3Printer();
    // res.sendFile(__dirname + '/index.html');
    res.send(resp3);
})


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "academic_insti",
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySql server!");
  });
  
  var resp1, resp2, resp3;
  
  function makeQuery1() {
    con.query(query1,
      function(err, result, fields) {
         if (err) {
             return console.log(err);
         }
         resp1 = result;
         resp1Printer();
         return result;
         // return console.log(result);
     });
  }
  
  
  function makeQuery2() {
    con.query(query2,
    function(err, result, fields) {
        if (err) {
          return console.log(err);
        }
        resp2 = result;
        resp2Printer();
        return result;
        // return console.log(result);
    });
  }
  
  function makeQuery3() {
    con.query(teachingQuery,
    function(err, result, fields) {
        
        if (err) {
          return console.log(err);
        }
        resp3 = result;
        resp3Printer();
        return result;
        // return console.log(result);
    });
  }
  
  function resp1Printer() {
    console.log('Printing resp1 : ');
    console.log(resp1);
  }
  
  function resp2Printer() {
    console.log('Printing resp2 : ');
    console.log(resp2);
  }
  
  function resp3Printer() {
    console.log('Printing resp3 : ');
    console.log(resp3);
  }
  
  // makeQuery1();
  // makeQuery2();
  // makeQuery3();
  // console.log(teachingQuery);
  
  // con.end();