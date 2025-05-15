import { PrismaClient } from "@/generated/prisma"; 
// Importing PrismaClient from the generated client

const prismaClientSingleton = () => {
    return new PrismaClient({
        log: ['query', 'info', 'warn', 'error']
    });
}; 
// Function that creates and returns a new PrismaClient instance with logging enabled

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}  
// Declares a global variable 'prisma' with the type matching the Prisma client instance 

const prisma = globalThis.prisma ?? prismaClientSingleton();
// If a global Prisma client already exists, reuse it; otherwise, create a new instance

export default prisma;
// Export the Prisma client instance for use in the app

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
// In development, assign the Prisma client to globalThis to preserve it during hot reloads
