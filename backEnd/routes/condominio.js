const { Router } = require("express")
const connect = require("./../config/db")
let router = Router()

router.get("/", async (req, res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM condominio;'); 
    res.send(rows)
})

router.post("/", async (req, res) => {
    const body = req.body;
    const conn = await connect();
    const retorno = await conn.query('INSERT INTO condominio (Nome, CEP, UF, Cidade, Bairro, Rua, Numero) values (?, ?, ?, ?, ?, ?, ?);', [body.nome, body.cep, body.uf, body.cidade, body.bairro, body.rua, body.numero]); 
    res.send(retorno)
})

module.exports = router