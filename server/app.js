const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("./modals/Employee");
const PORT = 4565;

app.use(bodyParser.json());

const Employee = mongoose.model("employee");
const mongoUrl =
  "mongodb+srv://dbuser:passwordpassword@cluster0.s93gl.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to Employee App !");
});

mongoose.connection.on("error", (err) => {
  console.log("Error", err);
});
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/send", (req, res) => {
  const employee = new Employee({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    salary: req.body.salary,
    picture: req.body.picture,
    position: req.body.position,
  });
  employee
    .save()
    .then((data) => {
      console.log(data);
      res.send("Posted");
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

app.post("/delete", (req, res) => {
  Employee.findByIdAndRemove(req.body.id)
    .then((data) => {
      console.log(data);
      res.send("deleted");
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

app.listen(PORT, () => {
  console.log("App is running on port " + PORT);
});

// {
// 	"name" : "zohaib",
// 	"email" : "zohaib@zohaib.com",
// 	"phone" : "03106212262",
// 	"salary" : "5 lpa",
// 	"picture" : "some url",
// 	"position" : "developer"
// }
