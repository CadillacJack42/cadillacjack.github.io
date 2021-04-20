const net = require('net') 
const portNum = process.argv[2]

const server = net.createServer(function (socket) {
    let date = new Date() 


    let y = date.getFullYear()  
    let m = zeroes(date.getMonth() + 1) // starts at 0
    
    let d = zeroes(date.getDate()) // returns the day of month  
    
    let h = zeroes(date.getHours())  
    
    let min = date.getMinutes() 

    let result = `${y}-${m}-${d} ${h}:${min}`
 

    socket.write(result)
    socket.end('\n')
})  
server.listen(portNum)

const zeroes = (x) => {
    return (x < 10 ? "0" : "") + x;
  };