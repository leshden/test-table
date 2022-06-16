const Pool = require('pg').Pool
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'my_database',
  password: 'root',
  port: 5432,
});

const getData= () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM my_table ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  })
}

const getFilterData = (filter) => {
  return new Promise(function(resolve, reject) {
    const { column, condition, value } = filter;
    let whereStr = `${column} ${condition} ${value}`;
    const isString = typeof value == "string"

    if (isString) {
      whereStr = `${column} ${condition} '${value}'`;
    }

    if (condition === 'includes') {
      if (isString) {
        whereStr = `${column} LIKE '%${value}%'`;
      } else {
        whereStr = `${column} >= ${value}`;
      }
    }

    pool.query(`SELECT * FROM my_table WHERE ${whereStr} ORDER BY id ASC`, (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  })
}

const createData = (body) => {
  return new Promise(function(resolve, reject) {
    const { date, name, quantity, distance } = body
    pool.query('INSERT INTO my_table (date, name, quantity, distance) VALUES ($1, $2, $3, $4)', [date, name, quantity, distance], (error, results) => {
      if (error) {
        reject(error)
      }
      console.log('A new data has been added');
    })
  })
}

const deleteData = () => {
  return new Promise(function(resolve, reject) {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM my_table WHERE id = $1', [id], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Data deleted with ID: ${id}`)
    })
  })
}

module.exports = {
  getData,
  getFilterData,
  createData,
  deleteData,
}
