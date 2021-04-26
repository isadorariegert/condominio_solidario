const { Router } = require("express")
const connect = require("./../config/db")

let router = Router()

router.get("/", async (req, res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM usuario;'); 
    res.send(rows)
})

router.post("/", async (req, res) => {
    const body = req.body;
    const conn = await connect();
    const retorno = await conn.query('INSERT INTO usuario (idCondominio, Administrador, Ativo, Nome, Bloco, Apartamento, Telefone, Documento) values (?, ?, ?, ?, ?, ?, ?, ?);', [body.condominio, body.administrador, body.ativo, body.nome, body.bloco, body.apartamento, body.telefone, body.documento]); 
    res.send(retorno)
})

router.put("/", async (req, res) => {
    const body = req.body;
    const conn = await connect();
    const retorno = await conn.query('UPDATE usuario SET idCondominio=?, Administrador=?, Ativo=?, Nome=?, Bloco=?, Apartamento=?, Telefone=?, Documento=? WHERE idUsuario=?;', [body.condominio, body.administrador, body.ativo, body.nome, body.bloco, body.apartamento, body.telefone, body.documento, body.usuario]); 
    res.send(retorno)
})

router.patch("/ativo", async (req, res) => {
    const body = req.body;
    const conn = await connect();
    const retorno = await conn.query('UPDATE usuario SET Ativo=? WHERE idUsuario=?;', [body.ativo, body.usuario]); 
    res.send(retorno)
})

module.exports = router