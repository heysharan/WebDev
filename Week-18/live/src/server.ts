// // Create a User
// import { PrismaClient } from "./generated/prisma";

// const client = new PrismaClient


// const createUser = async () => {
//     const response = await client.user.create({
//         data: {
//             username: 'Sharan',
//             password: 'Random1234',
//             age: 21,
//             city: "Bengaluru"
//         }
//     })
//     console.log(response)
// }

// createUser();

// // Read / Get a User from DB
// import { PrismaClient } from "./generated/prisma";

// const client = new PrismaClient


// const createUser = async () => {
//     const response = await client.user.findFirst({
//         where: {
//             id: 1
//         }
//     })
//     console.log(response)
// }

// createUser();

// // Update a User
// import { PrismaClient } from "./generated/prisma";

// const client = new PrismaClient


// const createUser = async () => {
//     const response = await client.user.update({
//         where: {
//             id: 1
//         },
//         data : {
//             username: 'Guhan'
//         }
//     })
//     console.log(response)
// }

// createUser();


// Delete a User
// import { PrismaClient } from "./generated/prisma";

// const client = new PrismaClient


// const createUser = async () => {
//     const response = await client.user.delete({
//         where: {
//             id: 1
//         }
//     })
//     console.log(response)
// }

// createUser();


import { PrismaClient } from "./generated/prisma";

const client = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
})


const createUser = async () => {
    const response = await client.user.findFirst({
        where: {
            id: 2
        },
        include: {
            todos: true
        }
    })
    console.log(response)
}

createUser();