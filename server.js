const http = require("http")
const axios = require("axios")

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json")
    res.end()

axios.get('/api/users?page=2')
        
    .then(resp => {
         console.log(resp.data);
    })
    
}

const host = 'localhost'
const port = 8000

const server = http.createServer(requestListener)
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
});