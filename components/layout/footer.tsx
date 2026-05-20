"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { useTheme } from "@/components/theme-provider";
import * as React from "react";
import { useTranslations } from "next-intl";

const socialLinks = [
    { icon: FaLinkedin, href: "#" },
    { icon: FaFacebook, href: "#" },
    { icon: FaTwitter, href: "#" },
    { icon: FaGithub, href: "#" },
];

// Main frontend host URL — used for cross-app links (tools, features, about, etc.)
const MAIN_HOST = (process.env.NEXT_PUBLIC_APP_URL ?? '').replace(/\/$/, '');
const toMainUrl = (path: string) => `${MAIN_HOST}${path}`;

export function Footer() {
    const t = useTranslations('footer');
    const { theme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const logoSrc =
        theme === "dark"
            ? "/Auto_Offensive_Dark-mode.png"
            : "/Auto_Offensive_Light-mode.png";

    return (
        <footer className="w-full border-t bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 mt-auto text-xl">
            <div className="max-w-7xl mx-auto px-4 py-12 w-full flex flex-col justify-between gap-7">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
                    <div className="flex flex-col items-center md:items-start">
                        <a href={MAIN_HOST || '/'} className="flex items-center mb-4">
                            <Image src={logoSrc} alt="Auto-Offensive" width={140} height={80} priority style={{ width: 'auto', height: 'auto' }} />
                        </a>
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xs text-center md:text-left">
                            Automated penetration testing platform for developers, security engineers, and DevSecOps teams.
                        </p>
                        <div className="flex items-center gap-3 mt-4">
                            {socialLinks.map((social, index) => (
                                <a key={index} href={social.href} className="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition">
                                    <social.icon className="text-lg text-zinc-700 dark:text-zinc-300" />
                                </a>
                            ))}
                        </div>
                        <p className="text-lg text-zinc-500 dark:text-zinc-400 italic mt-3">&quot;Scan. Detect. Secure.&quot;</p>
                    </div>

                    <div className="flex flex-col gap-4 items-center md:items-start lg:ms-19">
                        <h3 className="text-base font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">{t('sponsoredBy')}</h3>
                        <Image src={theme === "dark" ? "/istad-logo-white.png" : "/istad_logo.png"} alt="ISTAD logo" width={180} height={90} style={{ width: 'auto', height: 'auto' }} />
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 text-center md:text-left">Institute of Science and Technology Advanced Development</p>
                    </div>

                    <div className="text-center md:text-left lg:ms-34">
                        <h3 className="text-base font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4">{t('product')}</h3>
                        <ul className="space-y-2">
                            <li><a href={toMainUrl('/tools')} className="text-lg text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition">{t('tools')}</a></li>
                            <li><a href={toMainUrl('/feature')} className="text-lg text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition">{t('features')}</a></li>
                            <li><a href={toMainUrl('/resource')} className="text-lg text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition">{t('resources')}</a></li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left lg:ms-28">
                        <h3 className="text-base font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4">{t('resources')}</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-lg text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition">{t('documentation')}</Link></li>
                            <li><Link href="/api" className="text-lg text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition">{t('apiReference')}</Link></li>
                            <li><Link href="/cli" className="text-lg text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition">{t('cliGuide')}</Link></li>
                            <li><Link href="/ci-cd" className="text-lg text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition">CI/CD Integration</Link></li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left lg:ms-28">
                        <h3 className="text-base font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4">{t('company')}</h3>
                        <ul className="space-y-2">
                            <li><a href={toMainUrl('/about-us')} className="text-lg text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition">{t('aboutUs')}</a></li>
                            <li><a href={toMainUrl('/contact-us')} className="text-lg text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition">{t('contactUs')}</a></li>
                            <li><a href={toMainUrl('/help-center')} className="text-lg text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition">{t('community')}</a></li>
                            <li><a href={toMainUrl('/privacy')} className="text-lg text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition">{t('legal')}</a></li>
                        </ul>
                    </div>
                </div>

                <hr className="-my-3 border-zinc-300 dark:border-zinc-700" />

                <div className="flex flex-col md:flex-row justify-between items-center text-lg text-zinc-500 dark:text-zinc-400 gap-4 text-center md:text-left">
                    <p>© Copyright 2026, {t('allRightsReserved')} Auto-Offensive <br />Built for Security Engineers &amp; Pentesters</p>
                    <div className="flex gap-6">
                        <a href={toMainUrl('/privacy')} className="hover:text-black dark:hover:text-white transition">{t('privacyPolicy')}</a>
                        <a href={toMainUrl('/terms-of-service')} className="hover:text-black dark:hover:text-white transition">{t('termsOfService')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
