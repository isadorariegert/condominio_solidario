const { Router } = require("express")
const connect = require("./../config/db")

let router = Router()

router.get("/", async (req, res) => {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM estado;'); 
    res.send(rows)
})

module.exports = router