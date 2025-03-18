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

const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
    // Get the session claims and userId from the auth object
    const { userId, redirectToSignIn } = await auth();
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
        return redirectToSignIn();
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
