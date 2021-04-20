const http = require('http')
const fs = require('fs')

const port = process.argv[2]

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    req.on("data", chunk => {
        res.write(chunk.toString().toUpperCase());
    req.on("end", () => res.end());
    })
})
server.listen(port)

// Official Solution

// const http = require('http')
// const map = require('through2-map')

// const server = http.createServer(function (req, res) {
//   if (req.method !== 'POST') {
//     return res.end('send me a POST\n')
//   }

//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })

// server.listen(Number(process.argv[2]))