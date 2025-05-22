import { NextRequest, NextResponse } from "next/server";
import argon2 from 'argon2'
import prismaClient from '../../../db'

export async function POST (req: NextRequest){
    const { firstname, lastname, email, password } = await req.json()

    const hashedPassword = await argon2.hash(password);

    try{
        await prismaClient.user.create({
            data: {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: hashedPassword
                }
        })
        return NextResponse.json(true)
    }catch(e){
        return NextResponse.json(false)
    }

}