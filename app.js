const express = require("express");
const {} = require('./controllers/app.controllers');
const { getAllUsers, postUser, patchUser, deleteUser } = require("./controllers/users.controllers");
const { getAllGrades, getGrade } = require("./controllers/grades.controllers");
const { getWalls } = require('./controllers/walls.controllers');

const app = express()

app.use(express.json()) //edit as we go!! :)


//get, post, patch, delete

//USERS
app.get("/api/users", getAllUsers)

app.post("/api/users", postUser)

app.patch("/api/users/:user_id", patchUser)

app.delete("/api/users/:user_id", deleteUser)




//SESSIONS







//CLIMBS




//GRADES

app.get("/api/grades", getAllGrades)
app.get("/api/grades/:grade_id", getGrade)

//WALLS
app.get("/api/walls", getWalls);
// app.get("/api/walls/:id", getWallsById);
// app.get("/api/walls/user/:user_id", getWallsByUser);

//handles when path is incorrect
app.all('*', (req, res) => {
    res.status(404).send({msg: "Not Found"})
      })
//psql errors
app.use((err, req, res, next) => {
  if (err.code === "22P02"){
    res.status(400).send({msg: "Bad Request"})
  } else {
    next(err)
  }
})
//custom errors
app.use((err, req, res, next) => {
  if (err.msg) {
    res.status(err.status).send({ msg: err.msg})
  } else {
    next(err)
  }
})
//server errors
app.use((err, req, res, next) => {
console.log(err, "<<------ from our 500")
res.status(500).send({ msg: "Internal Server Error"})
})

module.exports = app;
