import { createI18nMiddleware } from 'next-international/middleware'
import {NextRequest, NextResponse} from 'next/server'
import {redirect} from "next/navigation";

const I18nMiddleware = createI18nMiddleware({
    locales: ['en', 'ru'],
    defaultLocale: 'en'
})

const isAccessUrl = (url: string[]): boolean => {
    if (url.join('').length === 0 || url.length === 2) {
        return false;
    }

    if (url[2] === 'register') {
        return false;
    }

    return true
};

export function middleware(request: NextRequest) {
    const {pathname} = request.nextUrl;

    if (!request.cookies.get('token') && isAccessUrl(pathname.split('/'))) {
        return NextResponse.redirect(new URL('/?non-token=true', request.url))
    }

    return I18nMiddleware(request)
}

export const config = {
    matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
}