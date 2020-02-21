const jsonPizza = require('../database/pizzas');

const listarPizzas = (req, res) => {
    res.send(jsonPizza);
};

const buscar = (req, res) => {
    let {busca} = req.params;
    const resultado = jsonPizza.filter(pizza => {
        return pizza.nome.includes(busca);
    });
    return res.send(resultado);
}

module.exports = {listarPizzas, buscar};