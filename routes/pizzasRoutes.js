//Incluido express
const express = require('express');

//Criando router
const router = express.Router();

//Incluindo o pizzaController
const pizzaController = require("../controllers/pizzasController");

//const pizzaRoutes
router.get('/', pizzaController.listarPizzas)
      .get('/:busca', pizzaController.buscar)

module.exports = router;