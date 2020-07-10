// =====================
// Puerto
// =====================
process.env.PORT = process.env.PORT || 3001;

// =====================
// Entorno
// =====================
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

// =====================
// Base de datos
// =====================
let urlDB;

if (process.env.NODE_ENV === "dev") {
  urlDB = "mongodb://localhost:27017/grupo_tech";
} else {
  urlDB =
    "mongodb+srv://dparrales:yDMsXlhgL2O1OuWQ@cluster0.rcdmz.mongodb.net/GRUPO-TECH";
}

process.env.URLDB = urlDB;
