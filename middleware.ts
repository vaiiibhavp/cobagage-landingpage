// middleware.ts

import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "fr"],
  defaultLocale: "en",
  localePrefix: "always", // ensures /en, /fr in URL
});

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - API routes
     * - Next.js internal files (_next)
     * - Static files (images, favicon, etc.)
     */
    "/((?!api|_next|.*\\..*).*)",
  ],
};
