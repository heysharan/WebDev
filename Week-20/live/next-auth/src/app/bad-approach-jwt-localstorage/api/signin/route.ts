import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
    const { email, password } = await req.json()

    const token = await jwt.sign({ 
        email
    }, 'JWT_SECRET_123456')

    return NextResponse.json({
        token
    })
}