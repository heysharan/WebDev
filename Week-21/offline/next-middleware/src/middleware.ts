import { NextRequest, NextResponse } from "next/server";

let requestCount = 0

export function middleware(req: NextRequest) {
    console.log(req.nextUrl.pathname)
    if(req.nextUrl.pathname.startsWith('/admin')){
        return NextResponse.redirect(new URL('/signin', req.url))
    }
    if(req.nextUrl.pathname.startsWith('/api')){
        requestCount++
        console.log(`Request Count Of API Routes: ${requestCount}`)
        return NextResponse.next()

    }
}
