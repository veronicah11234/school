// const express = require('express');
// const db = require('./config/db.js');
// const app = express()
// require('dotenv').config();

// //accept json objects
// app.use(express.json());


// // // CREATE
// app.post('/employees', (req, res) => {
//   const { first_name,salary } = req.body; 
//   db.query(`INSERT INTO emp (first_name,salary) VALUES ('${first_name}', ${salary})`, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(401).send(err);
//     } else {
//       console.log(result);
//       res.status(200).send('Employee created successfully');
//     }
//   });
// });

// // READ ALL
// app.get('/employees', (req, res) => {
//   db.query("SELECT * FROM emp", (err, result) => {
//     if (err) {
//       res.status(401).json(err)
//     }else{
//       res.status(200).json(result);
//     }
//   });
// })

// // READ
// app.get('/employees/:id', (req, res) => {
//   const id = req.params.id;
//   db.query(`SELECT * FROM emp WHERE employee_id = ${id}`, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(401).send(err);
//     } else {
//       console.log(result);
//       res.status(200).json(result);
//     }
//   });
// });

// // UPDATE
// app.put('/employees/:id', (req, res) => {
//   const id = req.params.id;
//   const { first_name, email, salary } = req.body;
//   db.query(`UPDATE emp SET name = '${first_name}', age = ${email}, salary = ${salary} WHERE id = ${id}`, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(401).send(err);
//     } else {
//       console.log(result);
//       res.status(200).send('Employee updated successfully');
//     }
//   });
// });

// // DELETE
// app.delete('/employees/:id', (req, res) => {
//   const id = req.params.id;
//   db.query(`DELETE FROM emp WHERE employee_id = ${id}`, (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send('Error deleting employee');
//     } else {
//       console.log(result);
//       res.status(200).send('Employee deleted successfully');
//     }
//   });
// });

// const port = process.env.PORT;

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })






const express = require('express')
const dotenv=require('dotenv');
const userRoutes=require('./routes/userRoutes.js');

const app=express();
dotenv.config();

app.use(express.json());

app.use('/api/v1',userRoutes);

const port =process.env.PORT;
app.listen(port,()=>{
  console.log(`Example app listening on port ${port}`);
  
})