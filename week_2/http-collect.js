const http = require('http')
const url = process.argv[2]

http.get(url, function callback (response) {
    response.setEncoding('utf8')

    let data = ''

    response.on('data', function (chunk) {
        data += chunk
    })

    response.on('end', function(){
        console.log(data.length)
        console.log(data)
    })
})

