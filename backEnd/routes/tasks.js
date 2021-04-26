const { Router } = require("express")
const connect = require("./../config/db")

let router = Router()

router.get("/", async (req, res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM tarefas;'); 
    res.send(rows)
})

router.post("/", async (req, res) => {
    const body = req.body;
    const conn = await connect();
    const retorno = await conn.query('INSERT INTO tarefas (idCondominio, idVoluntario, idApoiado, idServico, idEstado) values (?, ?, ?, ?, ?);', [body.condominio, body.voluntario, body.apoiado, body.servico, body.estado]); 
    res.send(retorno)
})


module.exports = router