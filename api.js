require("dotenv").config();
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
require("./src/db_connection/db_connection")
let router = require("./src/task_management/routes")
app.use(router)
app.listen(PORT, () => {
    console.log(`Server Listen On Port No ${PORT}`)
})