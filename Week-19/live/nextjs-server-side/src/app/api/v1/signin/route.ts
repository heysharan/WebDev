import 'dotenv/config'
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import prismaClient from '../../../../db'
import argon2 from 'argon2'


const JWT_SECRET = process.env.JWT_SECRET

export async function POST (req: NextRequest) {

    const data = await req.json();
    console.log(data)
    const user = await prismaClient.user.findFirst({
        where:{
            email: data.email
        }
    })
    if(user === null){
        return NextResponse.json({
            message: 'User Not found!'
        })
    }

    const verifiedUser = await argon2.verify(user.password, data.password)

    if(verifiedUser){
        const token = jwt.sign({
            email: data.email
        }, JWT_SECRET!)

        return NextResponse.json({
            token
        })

    }else {
        return NextResponse.json({
            message: 'Invalid Password!'
        })
    }

}