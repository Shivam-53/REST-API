const express = require("express");
const app = express()
const router=require("./routers/routers")
require("./src/mongoose")
require("./src/models/model")
app.use(express.json())
app.use(router)


app.listen(3000, (req, res) => {
    console.log("Server is running")
})
