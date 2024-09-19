import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    console.log(request.cookies.get("token"));
    const admin = false;
    const url = request.nextUrl.clone();

    // if (request.cookies.has("token")) {
    //     if (!admin && request.url.startsWith("/admin")) {
    //         url.pathname = "/";
    //         return NextResponse.redirect(url);
    //     }
    //     return NextResponse.next();
    // } else {
    //     url.pathname = "/signin";
    //     return NextResponse.redirect(url);
    // }
}

export const config = {
    matcher: ["/", "/home/:path*", "/admin/:path*"],
};
