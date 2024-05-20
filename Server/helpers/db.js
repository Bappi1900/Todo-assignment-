const { Pool } = require('pg');


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


  



module.exports = { query };