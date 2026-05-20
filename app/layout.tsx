import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Khmer, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

// Resolve basePath from env so asset URLs work both locally (/docs) and on Vercel (/)
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoKhmer = Noto_Sans_Khmer({
  subsets: ["khmer"],
  variable: "--font-noto-khmer",
  display: "swap",
  weight: ["400", "700"],
});

// JetBrains Mono — used in code blocks across doc pages
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

// Google Sans — used in doc page prose and headings
const googleSans = localFont({
  src: "../public/fonts/GoogleSans-VariableFont_GRAD,opsz,wght.ttf",
  variable: "--font-google-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Auto-Offensive | Documentation",
  description:
    "Professional developer documentation for the Auto-Offensive automated security testing platform",
  keywords: ["security", "testing", "automation", "API", "CLI", "CI/CD"],
  authors: [{ name: "Auto-Offensive Team" }],
  icons: {
    icon: `${BASE_PATH}/favicon.ico`,
    shortcut: `${BASE_PATH}/favicon.ico`,
    apple: `${BASE_PATH}/Auto_Offensive_Light-mode.png`,
  },
  openGraph: {
    title: "Auto-Offensive | Documentation",
    description: "Professional developer documentation for the Auto-Offensive automated security testing platform",
    type: "website",
    siteName: "Auto-Offensive",
    images: [
      {
        url: `${BASE_PATH}/og-image.png`,
        width: 1280,
        height: 720,
        alt: "Auto-Offensive Documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto-Offensive | Documentation",
    description: "Professional developer documentation for the Auto-Offensive automated security testing platform",
    images: [`${BASE_PATH}/og-image.png`],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${notoKhmer.variable} ${jetbrainsMono.variable} ${googleSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
