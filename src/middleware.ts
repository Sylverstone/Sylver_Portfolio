import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

let locales = ['en','fr']
 
const extInterdite = ["png","jpg","jpeg","json","ico","svg","xml","txt"]
// Get the preferred locale, similar to the above or using a library
async function  getLocale(request : NextRequest)
{
    const headersList = await headers();
    const acceptLanguage = headersList.get('accept-language');
    let locale = acceptLanguage ? acceptLanguage.split('-')[0] : 'en';
    if(!(locale === "en")) 
    {
        locale = "fr";
    }
    return "en";
}
 
export async function middleware(request : NextRequest) {
	// Check if there is any supported locale in the pathname
	const { pathname } = request.nextUrl
	const pathnameHasLocale = locales.some(
	(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	)
	console.log("path : ",pathname);
	const startWithNoRedirect = pathname.startsWith('/noredirect');

	if (pathnameHasLocale) return;

	if(extInterdite.some( ext => pathname.endsWith(ext))) return;
	if(startWithNoRedirect)
	{
		request.nextUrl.pathname = pathname.slice(11);
		console.log("redirecting to",request.nextUrl.pathname)
		return NextResponse.redirect(request.nextUrl)
	}
	// Redirect if there is no locale
	const locale = await getLocale(request)
	request.nextUrl.pathname = `/${locale}${pathname}`
	// e.g. incoming request is /products
	// The new URL is now /en-US/products
	console.log("redirecting to",request.nextUrl.pathname)
	return NextResponse.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}