const express = require("express");
const _ = require("underscore");
const Impresora = require("../models/impresora");

const app = express();

app.get("/", function (req, res) {
  res.json("Hello World");
});

app.get("/impresora", function (req, res) {
  Impresora.find({}, "marca modelo serie color ip precio").exec(
    (err, impresora) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }

      Impresora.count({}, (err, conteo) => {
        res.json({
          ok: true,
          impresora,
          conteo,
        });
      });
    }
  );
});

app.post("/impresora", function (req, res) {
  let body = req.body;

  let impresora = new Impresora({
    marca: body.marca,
    modelo: body.modelo,
    serie: body.serie,
    color: body.color,
    ip: body.ip,
    contador: body.contador,
    precio: body.precio,
  });

  impresora.save((err, impresoraDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }
    res.json({
      ok: true,
      impresora: impresoraDB,
    });
  });
});

app.put("/impresora/:id", function (req, res) {
  let id = req.params.id;
  let body = _.pick(req.body, ["modelo", "color", "ip", "precio"]);

  Impresora.findByIdAndUpdate(
    id,
    body,
    { new: true, runValidators: true },
    (err, impresoraDB) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }
      res.json({
        ok: true,
        impresora: impresoraDB,
      });
    }
  );
});

app.delete("/impresora", function (req, res) {
  res.json("delete Usuario");
});

module.exports = app;
