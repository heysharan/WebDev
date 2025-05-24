import 'dotenv/config'
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
import argon2d from 'argon2'
import prismaClient from '../../../db'

const JWT_SECRET = process.env.JWT_SECRET

export async function POST(req: NextRequest) {
    const { email, password } = await req.json()

    const user = await prismaClient.user.findFirst({
        where: {
            email: email
        }
    })

    if(user === null) {
        return NextResponse.json({
            message: 'User not found!'
        })
    }

    const verifiedUser = await argon2d.verify(user?.password!, password)

    if(verifiedUser){
        const token = await jwt.sign({ 
            email
        }, JWT_SECRET!)

        return NextResponse.json({
            token
        })
    }
    else{
        return NextResponse.json({
            message: 'Invalid password'
        })
    }

}