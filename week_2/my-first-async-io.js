const fs = require('fs');
let file = process.argv[2]

fs.readFile(file, (err, data) =>{
    let lines = data.toString().split('\n').length -1
    if (err) throw err;
    console.log(lines)
})
