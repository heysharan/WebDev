'use server'
import 'dotenv/config'
import prismaClient from '../db'
import argon2 from 'argon2'
import jwt from 'jsonwebtoken';


export async function signup (firstname: string, lastname: string, email: string, password: string) {
    const hashedPassword = await argon2.hash(password)

    try{
        await prismaClient.user.create({
            data: {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: hashedPassword
            }
        })
        return true
    }catch(e){
        return false
    }
}


export async function signin (email: string, password: string) {
    
    const JWT_SECRET = process.env.JWT_SECRET

    try{
        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(user === null){
            return 'User Not found!'
        }

        const verifiedUser = await argon2.verify(user.password, password)
        
        if(verifiedUser){
            const token = jwt.sign({
                email: email
            }, JWT_SECRET!)
    
            return token
    
        }else {
            return 'Invalid Password!'
        }

    }catch(e){
        return 'Error Connecting to DB'
    }
}