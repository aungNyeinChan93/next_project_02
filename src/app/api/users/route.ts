import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const url = request.nextUrl.clone();
    const url_class = new URL('/api/testing', request.nextUrl)
    return NextResponse.json({ url, url_class, searchParmas: url.searchParams.get('name') })
}