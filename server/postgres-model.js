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

const createData = (body) => {
  return new Promise(function(resolve, reject) {
    const { name, email } = body
    pool.query('INSERT INTO my_table (date, name, quantity, distance) VALUES ($1, $2, $3, $4) RETURNING *', [date, name, quantity, distance], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A new data has been added added: ${results.rows[0]}`)
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
  createData,
  deleteData,
}
