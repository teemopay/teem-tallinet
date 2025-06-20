import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
const validPaths = ["/", "/About", "/Service", "/Case"];
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (!validPaths.includes(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
