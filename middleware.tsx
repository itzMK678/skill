import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the token from cookies
  const token = request.cookies.get('token')?.value

  // Check if the request is for the dashboard
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // If no token exists, redirect to login page
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // Allow the request to proceed if authenticated or not accessing dashboard
  return NextResponse.next()
}

export const config = {
  matcher: '/dashboard/:path*',
}