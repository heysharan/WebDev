// import { WebSocketServer } from 'ws';

// const wss = new WebSocketServer({ port: 8080 });

// wss.on('connection', (socket) => {
//     setInterval(() => {
//         socket.send(`Random No: ${Math.floor(Math.random() * 100)}`)
//     }, 1000)
//     socket.on('message', (event) => {
//         if(event.toString() === 'ping'){
//             socket.send('pong')
//         }
//     })
// })



// import { WebSocketServer, WebSocket } from "ws";

// const wss = new WebSocketServer({ port: 8080 });
// let userCount = 0
// let allSockets: WebSocket[] = [];

// wss.on('connection', (socket) => {
//     allSockets.push(socket);
//     userCount = userCount + 1;
//     console.log(`User Connected # ${userCount}`)
//     console.log(`No of Connected Users: ${allSockets.length}`)
//     socket.on('message', (event) => {
//         console.log(`${event.toString()}: sent from server`);
//         allSockets.forEach((s) => {
//             s.send(`Message sent: ${event.toString()}`)
//         })
//     })
//     socket.on('close', () => {
//         allSockets = allSockets.filter(s => s != socket)
//     })
// })


import { WebSocketServer, WebSocket } from 'ws'

const wss = new WebSocketServer({ port: 8080 });
const users = new Map<WebSocket, {socket: WebSocket, room: string}>();

wss.on('connection', (socket) => {
    socket.on('message', (message) => {
        const parsedMessage = JSON.parse(message.toString())

        if( parsedMessage.type === 'join' ){
            users.set(socket, { socket: socket, room: parsedMessage.payload.roomId })
        }

        if( parsedMessage.type === 'chat' ){
            const currentUser = users.get(socket)
            
            if(!currentUser){
                console.log('User not found!')
                return
            }

            const currentRoom = currentUser.room

            users.forEach((u) => {
                if(u.room === currentRoom){
                    u.socket.send(parsedMessage.payload.message)
                }
            })
        }
    })
    socket.on('close', () => {
        users.delete(socket)
    })
})