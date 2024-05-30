const db = require("./db");

const UsersController = {
  getAllUsers: (req, res) => {
    // check //console.log("get users");
    let qr = `SELECT * FROM users `;
    db.query(qr, (err, result) => {
      if (err) {
        console.log(err, " errors");
      }
      if (result.length > 0) {
        res.send({
          message: "all user data",
          data: result,
        });
      }
    });
  },

  getSingleUser: (req, res) => {
    //check //console.log(req.params.id, "getid ==>");
    //req.params.id = /:id
    let getId = req.params.id;

    let qr = `SELECT * FROM users WHERE id =?`;

    db.query(qr, [getId], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send({
          message: "Error fetching user data",
        });
      }

      if (typeof result !== "undefined" && result.length > 0) {
        res.send({
          message: "get single id",
          data: result,
        });
      } else {
        res.send({
          message: "data not found",
        });
      }
    });
  },

  createUser: (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let pword = req.body.pword;

    let query = `INSERT INTO users(name, email, pword) 
    values(?, ?, ?)`;

    db.query(query, [name, email, pword], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send({
          message: "Error inserting user data",
        });
      }
      res.send({
        message: "Data inserted",
      });
    });
  },

  //update user
  updateUser: (req, res) => {
    console.log(req.body, "updatedata");

    let id = req.params.id;
    let name = req.body.name;
    let email = req.body.email;
    let pword = req.body.pword;

    let query = `UPDATE users SET 
    name = ?, 
    email = ?, 
    pword = ?
    WHERE id = ${id}`;

    db.query(query, [name, email, pword], (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.send({
        message: "data updated",
      });
    });
  },

  deleteUser: (req, res) => {
    //check //console.log("delete works")
    let id = req.params.id;

    let query = `DELETE FROM users WHERE id = ?`;
    db.query(query, [id], (err, result) => {
      if (err) {
        console.log(id);
        console.log(err);
      }
      res.send({
        message: "data deleted",
      });
    });
  },

  getUserByEmail: (req, res) => {
    let email = req.params.email;

    let query = "SELECT * FROM users WHERE email = ?";

    db.query(query, [email], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send({
          message: "Error fetching user data",
        });
      }

      if (result.length > 0) {
        res.send({
          message: "User found",
          data: result,
        });
      } else {
        res.send({
          message: "User not found",
        });
      }
    });
  },
};

module.exports = UsersController;
