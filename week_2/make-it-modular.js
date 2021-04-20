const mymodule = require('./mymodule')

data = process.argv[2]
let extension = process.argv[3]

mymodule(data, extension, function(err, list){
    if (err) throw err

    list.forEach(file => {if (file.endsWith(extension)){
        console.log(file)
    }})
})
