import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

const SUPPORTED_LOCALES = ["en", "kh"] as const;
type Locale = (typeof SUPPORTED_LOCALES)[number];

export default getRequestConfig(async () => {
    const cookieStore = await cookies();
    const rawLocale = cookieStore.get("locale")?.value;

    // Default to 'en' if cookie is missing or invalid
    const locale: Locale =
        rawLocale && SUPPORTED_LOCALES.includes(rawLocale as Locale)
            ? (rawLocale as Locale)
            : "en";

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default,
    };
});
