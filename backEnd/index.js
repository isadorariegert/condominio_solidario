const express = require("express")
const bodyParser = require("body-parser")
var cors = require("cors")
const estado = require("./routes/estado") 
const condominio = require("./routes/condominio") 
const prioridade = require("./routes/prioridade") 
const servicos = require("./routes/servicos") 
const tasks = require("./routes/tasks") 
const usuario = require("./routes/usuario") 
const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use("/estado", estado)
app.use("/condominio", condominio)
app.use("/prioridade", prioridade)
app.use("/servicos", servicos)
app.use("/tasks", tasks)
app.use("/usuario", usuario)

app.listen(3000, () => {
    console.log("started")
})