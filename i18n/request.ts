import { getRequestConfig } from "next-intl/server";
import { defaultLocale } from "../i18n";

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale || defaultLocale;

  return {
    locale: currentLocale, // ✅ REQUIRED
    messages: (await import(`../messages/${currentLocale}.json`)).default,
  };
});
