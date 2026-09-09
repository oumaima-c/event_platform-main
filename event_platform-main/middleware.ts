import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/events/:id',
  '/api/webhooks/clerk',
  '/api/webhooks/stripe',
  '/api/uploadthing'
]);

export default clerkMiddleware({
  publicRoutes: isPublicRoute
});

export const config = {
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'
  ],
};