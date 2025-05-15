import { NextRequest, NextResponse } from "next/server";
import prismaClient from '../../../../db'
import argon2 from 'argon2'


export async function POST(req: NextRequest) {

    const data = await req.json()

    const hashedPassword = await argon2.hash(data.password)

    await prismaClient.user.create({
        data: {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: hashedPassword
        }
    })

    return NextResponse.json({
        message: "You have Signed Up!"
    })
}