// @ts-nocheck
const { Pool } = require('pg');
const { Client } = require ('pg');
const dotenv = require('dotenv');


const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Todo",
  password: "1234",
  port: 5432
});

const query = (sql, values = []) => 
{
  return new Promise((resolve, reject) => 
  {
    pool.query(sql, values)

      .then(res => resolve(res))
      
      .catch(err => reject(err));
  });
};

// connect to the database 

//  Const.connect()
//    .then(() => console.log('connect to the database'))
//    .catch(err => console.error('connection error',err.stack));
   
  



module.exports = { query };