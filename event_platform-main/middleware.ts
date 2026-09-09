import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/events/:id',
  '/api/webhooks/clerk',
  '/api/webhooks/stripe',
  '/api/uploadthing'
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth(); // This forces the user to sign in if they aren't already
  }
});

export const config = {
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'
  ],
};