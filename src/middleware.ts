import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define a type for session claims
interface SessionClaims {
    metadata?: {
        role?: string;
    };
}

// Define route matchers
const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
    try {
        // Get authentication data
        const { userId, redirectToSignIn, sessionClaims } = await auth();

        // Ensure sessionClaims has the expected type
        const claims = sessionClaims as SessionClaims;
        const userRole = claims?.metadata?.role;

        // Restrict admin routes to users with 'admin' role
        if (isAdminRoute(req) && userRole !== "admin") {
            return NextResponse.redirect(new URL("/", req.url));
        }

        // Redirect unauthenticated users trying to access protected routes
        if (!userId && !isPublicRoute(req)) {
            return redirectToSignIn();
        }
    } catch (error) {
        console.error("Middleware error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
});

// Matcher configuration to specify which routes to apply middleware
export const config = {
    matcher: [
        // Exclude Next.js internals and static files
        "/((?!_next/static|_next/image|favicon.ico).*)",
        // Always apply middleware for API routes
        "/(api|trpc)(.*)",
    ],
};
