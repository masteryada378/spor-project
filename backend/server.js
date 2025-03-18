const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

const db = require("./app/models");

db.sequelize.sync().then(() => {
    console.log("b.sequelize.sync().then(() ");
});

// db.sequelize.sync();

//--------------
// const express = require("express");
// const cors = require("cors");

// const app = express();

// var corsOptions = {
//     origin: "http://localhost:8081",
// };

// app.use(cors(corsOptions));

// // parse requests of content-type - application/json
// app.use(express.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

// // simple route
// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to bezkoder application." });
// });

// const db = require("./app/model"); // ----- увага

// // const db = require("./app/config/db.config");

// db.sequelize
//     .authenticate()
//     .then(() => console.log("Connected to database!"))
//     .catch((err) => console.error("Database connection failed:", err));

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

// // db.sequelize.sync();

// // db.sequelize.sync({ force: true }).then(() => {
// //     console.log("Drop and re-sync db.");
// // });

// // set port, listen for requests
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}.`);
// });
