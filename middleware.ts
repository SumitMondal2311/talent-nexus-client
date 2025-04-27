import { errors, jwtVerify } from 'jose';
import { NextRequest, NextResponse } from 'next/server';

const NEXT_PUBLIC_REFRESH_SECRET = process.env.NEXT_PUBLIC_REFRESH_SECRET;
if (!NEXT_PUBLIC_REFRESH_SECRET) {
    throw new Error(
        'Invalid or missing NEXT_PUBLIC_REFRESH_SECRET env variable'
    );
}

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const refreshToken = request.cookies.get('__refresh_token__')?.value;
    const homeRoute = pathname === '/';
    const isAuthRoute = pathname.startsWith('/auth');
    if (isAuthRoute && !homeRoute && refreshToken) {
        try {
            await jwtVerify(
                refreshToken,
                new TextEncoder().encode(NEXT_PUBLIC_REFRESH_SECRET)
            );

            return NextResponse.redirect(new URL('/dashboard', request.url));
        } catch (error) {
            if (
                error instanceof errors.JWTExpired ||
                error instanceof errors.JWTInvalid
            ) {
                const response = NextResponse.redirect(
                    new URL('/auth/login', request.url)
                );

                return response.cookies.delete('__refresh_token__');
            }
        }
    }

    if (!isAuthRoute && !homeRoute && !refreshToken) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
