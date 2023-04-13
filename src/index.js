const app = require("./server")
const config = require("./config/config")

const connect = require("./db/connect")

function onInitServer(){
    console.log("database is connected")
    app.listen(config.app.PORT, () => {
        console.log(`Server is running on Port ${config.app.PORT}`)
    })
}

connect().then(onInitServer())


