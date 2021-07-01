require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./src/middleware/error-handler");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/users", require("./src/controller/user"));
//app.use("/employee", require("./src/controller/employee.controller"));
app.use("/employee", require("./src/controller/employee"));
app.use("/notification", require("./src/controller/dbt"));

app.use(errorHandler); //eeror production...
const port = process.env.NODE_ENV === "" ? process.env.PORT || 80 : 4000;
app.listen(port, () => console.log("Server listening on port " + port));
