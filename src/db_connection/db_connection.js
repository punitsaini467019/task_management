const mongoose = require("mongoose")
const connection_url = process.env.CONNECTION_URL
mongoose.connect(connection_url).then(() => {
    console.log("Coneection successfully")
}).catch((error) => {
    console.log("Database Coneection Error" + error)
})