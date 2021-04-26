const { Router } = require("express")
const connect = require("./../config/db")

let router = Router()

router.get("/", async (req, res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM servicos;'); 
    res.send(rows)
})

router.post("/", async (req, res) => {
    const body = req.body;
    const conn = await connect();
    const retorno = await conn.query('INSERT INTO servicos (idCondominio, Nome, Descricao, idPrioridade) values (?, ?, ?, ?);', [body.condominio, body.nome, body.descricao, body.prioridade]); 
    res.send(retorno)
})


module.exports = router