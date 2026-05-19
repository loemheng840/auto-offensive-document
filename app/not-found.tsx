"use client";

import Link from "next/link";
import { Home, ArrowLeft, Lock } from "lucide-react";
import { useLocale } from "next-intl";

export default function NotFound() {
    const locale = useLocale();
    const isKhmer = locale === "kh";

    const copy = isKhmer
        ? {
            title: "ទំព័ររកមិនឃើញ",
            description: "ទំព័រដែលអ្នកកំពុងរកមិនមានទេ ឬបានផ្លាស់ទីហើយ ។",
            goHome: "ទៅទំព័រដើម",
            goBack: "ត្រឡប់ក្រោយ",
        }
        : {
            title: "Page Not Found",
            description: "The page you're looking for doesn't exist or has been moved.",
            goHome: "Go Home",
            goBack: "Go Back",
        };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F7F5F0] dark:bg-[#09090B] px-4">
            <div className="text-center space-y-8">
                <div className="relative">
                    <h1 className="text-[180px] md:text-[200px] font-bold text-[#1A1714]/10 dark:text-white/10 leading-none select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-[#1A1714] dark:bg-white/10 rounded-full flex items-center justify-center shadow-lg">
                            <Lock className="w-12 h-12 text-white dark:text-[#00BCA1]" />
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-[#1A1714] dark:text-white">
                        {copy.title}
                    </h2>
                    <p className="text-[#88837B] dark:text-[#A1A1AA] max-w-md mx-auto text-base md:text-lg">
                        {copy.description}
                    </p>
                </div>

                <div className="flex gap-4 justify-center flex-wrap">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#00BCA1] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#00a88e] shadow-sm"
                    >
                        <Home className="h-4 w-4" />
                        {copy.goHome}
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 rounded-lg border border-[#E2DDD5] dark:border-white/10 bg-white dark:bg-[#121214] px-5 py-2.5 text-sm font-semibold text-[#1A1714] dark:text-white transition-colors hover:bg-[#F0EDE6] dark:hover:bg-white/5 shadow-sm cursor-pointer"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        {copy.goBack}
                    </button>
                </div>
            </div>
        </div>
    );
}
