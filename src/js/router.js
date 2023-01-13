const express = require('express');
const connection = require('./connection');
const router = express.Router();

router.get('/filter', (req, res) => {
  connection.query('SELECT * FROM filter', 
  (error, result) => {
    error ? res.send('Something went wrong.') : res.send(result);
  });
})
  .get('/filter/:id', (req, res) => {
    const id = req.params.id;
    connection.query(`SELECT * FROM filter WHERE id = ${id}`,
    (error, result) => {
     error ? res.send('Something went wrong.') : res.send(result);
    });
  })
  .post('/filter', (req, res) => {
    const { date_from, date_to } = req.body;
  
    if(!(date_from && date_to)) {
      res.send('There is empty field.');
      return;
    }
  
    connection.query(
      `INSERT INTO filter (id, date_from, date_to) 
      VALUES (DEFAULT, '${date_from}', '${date_to}')`,
    (error) => {
      error ? res.send('Something went wrong.') : res.send('Record has been added');
    });
  })
  .post('/filter/:id', (req, res) => {
    const id = req.params.id;
    const { date_from, date_to } = req.body;
    
    if(!(date_from && date_to)) {
      res.send('There is empty field.');
      return;
    } 
    
    connection.query(
      `INSERT INTO filter (id, date_from, date_to) 
      VALUES (${id}, '${date_from}', '${date_to}')`,
      (error) => {
        error ? res.send('Something went wrong.') : res.send('Record has been added');
      });
  })
  .put('/filter/:id', (req, res) => {
    const id = req.params.id;
    connection.query(`SELECT * FROM filter WHERE id = ${id}`,
    (error, [result]) => {
      if (error) {
        res.send('Something went wrong.');
        return;
      }
      const { date_from, date_to } = req.body;
      connection.query(
        `UPDATE filter SET 
        date_from = '${date_from}', 
        date_to = '${date_to}' 
        WHERE id = ${id}`,
        (error) => {
          console.log(error)
          error ? res.send('Something went wrong.') : res.send('Record has been updated');
        });
    });
  })
  .delete('/filter/:id', (req, res) => {
    const id = req.params.id;
    connection.query(`DELETE FROM filter WHERE id = ${id}`,
    (error) => {
      error ? res.send('Something went wrong.') : res.send('Record has been deleted');
    });
  });

module.exports = router;