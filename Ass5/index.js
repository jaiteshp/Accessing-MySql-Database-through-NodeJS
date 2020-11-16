var mysql = require('mysql');
var { teachingQuery, query1, query2 } = require('./queries');

var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);

// app.use(express.bodyParser());
// app.post('/', function(req, res) {
//   console.log(req.body);
//   res.send(200);
// });

server.listen(process.env.PORT, process.env.IP);
server.close();

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