const home = (req,res) => {
    res.send("Bem vindo a pizzaria SC05!")
}

const sobre = (req, res) => {
    res.send("84 anos produzindo a melhor pizzas de São Paulo");
}

module.exports = {home, sobre};