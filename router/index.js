// Importar el módulo body-parser y el framework Express
const bodyParser = require("body-parser");
const express = require("express");

// Crear una instancia de Router
const router = express.Router();
// Ruta principal que muestra una página con los datos del array "datos"
router.get("/", (req, res) => {
    res.render("entrada.html", {
    Header: "SISTEMAS MICROINFORMATICA",
    Footer: "@Derechos Reservados JORGE SAID CORREA SANCHEZ",
    });
});
router.get('/entrada', (req, res) => {
    const datos = {
        nombre: req.query.nombre,
        nivelestudios: req.query.nivelestudios,
        pagodiario: req.query.pagodiario,
        diastrabajados: req.query.diastrabajados
    };
    res.render('resultados.html', datos );
  

});


router.post("/entrada", (req, res) => {
    const datos = {
        nombre: req.body.nombre,
        nivelestudios: req.body.nivelestudios,
        pagodiario: req.body.pagodiario,
        diastrabajados: req.body.diastrabajados
    };
    res.render("resultados.html", datos);


});
router.get("/resultados", (req, res) => {
    const datos = {
        nombre: req.query.nombre,
        nivelestudios: req.query.nivelestudios,
        pagodiario: req.query.pagodiario,
        diastrabajados: req.query.diastrabajados
    };
    res.render("resultados.html", datos);
  

    });
    router.post("/resultados", (req, res) => {
        const datos = {
        nombre: req.body.nombre,
        nivelestudios: req.body.nivelestudios,
        pagodiario: req.body.pagodiario,
        diastrabajados: req.body.diastrabajados
        };
        res.render("resultados.html", datos);
    });

// Exportar el módulo Router para que pueda ser utilizado en otros archivos
module.exports = router;