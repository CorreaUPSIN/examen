// Importar el módulo body-parser y el framework Express
const bodyParser = require("body-parser");
const express = require("express");

// Crear una instancia de Router
const router = express.Router();
  
// Ruta principal que muestra una página con los datos del array "datos"
router.get("/", (req, res) => {
    res.render("index.html", {
      Header: "Viajes el Destino Feliz",
      Footer: "@Derechos Reservados Bryan Gonzalez",
    });
});

// Ruta que muestra una página con una tabla vacía que espera un parámetro llamado "numero" en la URL
router.get("/tabla", (req, res) => {
    const params = {
     numero: req.query.numero
    };
    res.render("tabla.html", params);
});

// Ruta que recibe el número enviado a través del formulario de la página "/tabla" y lo muestra en una tabla
router.post("/tabla", (req, res) => {
    const params = {
        numero: req.body.numero
    };
    res.render("tabla.html", params);
});

// Exportar el módulo Router para que pueda ser utilizado en otros archivos
module.exports = router;