import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (socket) => {
    setInterval(() => {
        socket.send(`Solana Price: ${Math.random() * 1000}`)
    }, 1000)

    socket.on('message', (message) => {
        if(message.toString() === 'ping'){
            socket.send('pong')
        }
    })
})