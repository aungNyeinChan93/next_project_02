import { NextRequest, NextResponse } from "next/server";



export async function GET(request: NextRequest) {
    const { pathname } = request.nextUrl;
    if (pathname === '/api/tests') {
        return NextResponse.redirect(new URL('/api/users', request.url))
    }
    return NextResponse.json({ pathname })
}