const fs = require('fs')

const ext = '.' + process.argv[3]
const dataPath = process.argv[2]

fs.readdir(dataPath, function(err, list){
    if (err) throw err;
    
    list.forEach(file => {if (file.endsWith(ext)){
        console.log(file)
    }})
})
