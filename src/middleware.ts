import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define the SessionClaims type to include metadata and role.
interface SessionClaims {
    sessionClaims?: {
        metadata?: {
            role?: string; // Role is optional, depending on your setup.
        };
    };
    userId?: string; // Add other necessary properties based on your Clerk session object.
}

// Define route matchers for public and admin routes
const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
    try {
        // Get session data from auth
        const { userId, redirectToSignIn } = await auth(); // Get redirectToSignIn here
        const sessionClaims = await auth() as SessionClaims;

        // Check if it's an admin route and if the user's role is not "admin"
        if (
            isAdminRoute(req) &&
            sessionClaims.sessionClaims?.metadata?.role !== "admin"
        ) {
            const url = new URL("/", req.url);
            return NextResponse.redirect(url);
        }

        // If the user is not authenticated and the route is not public, redirect to sign-in
        if (!userId && !isPublicRoute(req)) {
            return redirectToSignIn(); // This works because redirectToSignIn is obtained from auth()
        }

        // If everything is good, proceed to the next response
        return NextResponse.next();
    } catch (error) {
        console.error("Error in middleware:", error);
        return NextResponse.error(); // Return a generic error response
    }
});

// Matcher configuration to specify which routes to apply the middleware to
export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        // Always run for API routes
        "/(api|trpc)(.*)",
    ],
};
