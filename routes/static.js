//Incluido express
const express = require('express');

//Criando router
const router = express.Router();

//Incluindo o StaticController
const staticController = require("../controllers/staticController");

//const staticRoutes
router.get('/', staticController.home);

router.get('/sobre', staticController.sobre)

module.exports = router;