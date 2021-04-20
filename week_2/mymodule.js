const fs = require('fs')
const path = require('path')



module.exports = function(data, extension, callback){
    result = []
    extension = "." + extension
    fs.readdir(data, function(err, list){
        if (err)
            return callback(err)
    
        list.forEach(function(file){
            if (file.endsWith(extension)){
            result.push(file) 
        }})
        callback(err, result)
        return result
    })
}
