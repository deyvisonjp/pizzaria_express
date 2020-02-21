//Incluindo o express
const express = require('express');

//Incluindo roteadores
const staticRouter = require('./routes/static');
const pizzasRouter = require('./routes/pizzasRoutes');

//Criando o app
const app = express();

app.use('/', staticRouter)
    .use('/sobre', staticRouter)
    .use('/pizzas', pizzasRouter)

//Iniciandoo servidor web
app.listen(3000, () => {
    console.log("Iniciando o Servidor...");
})