const http = require('http')
const fs = require('fs')
const url = require('url')

const port = process.argv[2]

const parseTime = function(time){
    return {
        'hour' : time.getHours(),
        'minute' : time.getMinutes(),
        'second' : time.getSeconds(),
    }
}

const unixTime = function(time){
    return {'unixtime' : time.getTime(),}
}

const server = http.createServer((req, res) => {
    let newUrl =  url.parse(req.url, true)
    let time = new Date(newUrl.query['iso'])

    if (req.method === 'GET'){
        if (newUrl.pathname === '/api/parsetime'){
            res.end(JSON.stringify(parseTime(time))) 
        }
        else if (newUrl.pathname === '/api/unixtime'){
            res.end(JSON.stringify(unixTime(time))) 
        }
    }else{
        return res.end('You should be requesting info here\n')
    }    
})
server.listen(port)

// OFFICIAL SOLUTION

// const http = require('http')
    
//     function parsetime (time) {
//       return {
//         hour: time.getHours(),
//         minute: time.getMinutes(),
//         second: time.getSeconds()
//       }
//     }
    
//     function unixtime (time) {
//       return { unixtime: time.getTime() }
//     }
    
//     const server = http.createServer(function (req, res) {
//       const parsedUrl = new URL(req.url, 'http://example.com')
//       const time = new Date(parsedUrl.searchParams.get('iso'))
//       let result
    
//       if (/^\/api\/parsetime/.test(req.url)) {
//         result = parsetime(time)
//       } else if (/^\/api\/unixtime/.test(req.url)) {
//         result = unixtime(time)
//       }
    
//       if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(result))
//       } else {
//         res.writeHead(404)
//         res.end()
//       }
//     })
//     server.listen(Number(process.argv[2]))