const server = require("./server.js")

const port = 4000

server.listen(port, () => port, console.log(`SERVER RUNNING AT PORT ${port}`))