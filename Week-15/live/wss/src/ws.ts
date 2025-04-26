import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port :8080})

// //event handler
// wss.on('connection', (socket) => {        {/* similar to app.get('/users', (req, res) => { })  */}
//     setInterval(() => {
//         socket.send(`Current Price of Solana is ${Math.random() * 1000}`)  //send data to all the connected clients
//     }, 1)

//     socket.on('message', (e) => {
//         console.log(e.toString())  //prints all the data sent from clients to the WS server
//     })

// })


wss.on('connection', (socket) => { 
    socket.on('message', (e) => {
        if(e.toString() === 'ping'){
            socket.send('pong')
        }
    })

})