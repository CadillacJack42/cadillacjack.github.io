const http = require('http')
const urls = process.argv.slice(2)

for (let i = 0; i < urls.length; i++){
    result = []
    counter = 0

    http.get(urls[i], function callback (response) {
        response.setEncoding('utf8')

        let data = ''

        response.on('data', function (chunk) {
            data += chunk
        })

        response.on('end', function(){
            result[i] = data
            counter++
            if (counter === urls.length){
              result.forEach(word => {
                  console.log(word)  
                }
              )}
        })
    })
}