const { Router } = require("express")
const {Add_Task} = require("./controller")
let app = Router()

app.post('/add_task', Add_Task)

module.exports = app;