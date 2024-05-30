const express = require("express");
const db = require("./db");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const mysql = require("mysql2");
const PORT = 3000;

const userController = require("./userController");

// http://localhost:3000/api/v1/imeResursa
// od http pa do api je deo koji se zove socket

// middlewear
app.use(cors());
app.use(express.json()); //umesto bodyparsera zbog kukuja
app.use(morgan("tiny"));

// oslusavanje servera na port lokalni default je 3000
app.listen(PORT, () => {
  console.log("api works");
});

//provera konekcije
db.connect((err) => {
  if (err) {
    console.log(err, "database not connected");
  } else {
    console.log("database connected");
  }
});

app.get(`/api/v1/users`, userController.getAllUsers);
app.delete(`/api/v1/users/:id`, userController.deleteUser);
//ne koristimo ${id} jer podatak nije promenljiva vec je
//placeholder za vredonsot koje ce doci iz req.params.id
app.get(`/api/v1/users/:id`, userController.getSingleUser);
app.post(`/api/v1/users/`, userController.createUser); 
app.get(`/api/v1/users/email/:email`, userController.getUserByEmail);
app.put(`/api/v1/users/:id`, userController.updateUser);
