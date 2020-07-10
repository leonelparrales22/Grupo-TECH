require("./config/config");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// incluir rutas de /usuario
app.use(require("./routes/impresora"));

mongoose.connect(
  "mongodb://localhost:27017/grupo_tech",
  { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
  (err, res) => {
    if (err) throw err;
    console.log("Base de Datos ONLINE!");
  }
);

app.listen(process.env.PORT, () => {
  console.log("Escuchando del puerto 3001");
});
