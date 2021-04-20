const http = require('http')
const fs = require('fs')


const server = http.createServer(function (req, res) {  
const file = process.argv[3]

const stream = fs.createReadStream(file)

stream.on('open', function (){
    stream.pipe(res)
})

stream.on('error', function(err){
    res.end(err)
})

})  
server.listen(process.argv[2]) 



// Official Solution

// const http = require('http')
//     const fs = require('fs')
    
//     const server = http.createServer(function (req, res) {
//       res.writeHead(200, { 'content-type': 'text/plain' })
    
//       fs.createReadStream(process.argv[3]).pipe(res)
//     })
    
//     server.listen(Number(process.argv[2]))