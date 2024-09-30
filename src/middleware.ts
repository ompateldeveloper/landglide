import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("token");
    const admin = request.cookies.get('admin')?.value==="true"?true:false;
    console.log(Boolean(admin));
    
    const url = request.nextUrl.clone();
    const { pathname } = request.nextUrl;

    if (pathname === "/signin" || pathname === "/signup") {
        const token = request.cookies.get("token");
        if (token) {
            return NextResponse.redirect(new URL("/", request.url));
        }
        return NextResponse.next();
    }

    if (token) {
        if (!admin && pathname.startsWith("/admin")) {
            url.pathname = "/";
            return NextResponse.redirect(url);
        }
        return NextResponse.next();
    } else {
        url.pathname = "/signin";
        return NextResponse.redirect(url);
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/admin/:path*"],
};
