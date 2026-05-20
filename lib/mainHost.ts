"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * Build URLs that point to the main frontend app from inside the docs app.
 *
 * The docs app is reachable two ways:
 *   1. Proxied through the main host at /docs (e.g. localhost:3000/docs).
 *      Relative paths like "/tools" stay on the same origin.
 *   2. Directly on the docs domain (e.g. auto-offensive-document.vercel.app).
 *      Relative paths land on the docs origin -> 404.
 *      Must prefix with the configured main host URL.
 *
 * SSR + first client render emit relative paths so hydration matches.
 * A useEffect then checks the origin and, if we're NOT on the configured
 * main host, flips state to start emitting absolute URLs.
 */

const MAIN_HOST_RAW = (process.env.NEXT_PUBLIC_APP_URL ?? "").replace(/\/$/, "");

function getMainHostOrigin(): string | null {
    if (!MAIN_HOST_RAW) return null;
    try {
        return new URL(MAIN_HOST_RAW).origin;
    } catch {
        return null;
    }
}

export function useMainHostHref(): (path: string) => string {
    const [shouldPrefix, setShouldPrefix] = useState(false);

    useEffect(() => {
        const mainOrigin = getMainHostOrigin();
        if (!mainOrigin) return;
        if (typeof window === "undefined") return;
        if (window.location.origin !== mainOrigin) {
            setShouldPrefix(true);
        }
    }, []);

    return useCallback(
        (path: string) => {
            const normalized = path.startsWith("/") ? path : `/${path}`;
            if (shouldPrefix && MAIN_HOST_RAW) {
                return `${MAIN_HOST_RAW}${normalized}`;
            }
            return normalized;
        },
        [shouldPrefix],
    );
}

export function useMainHostRoot(): string {
    const [root, setRoot] = useState<string>("/");

    useEffect(() => {
        const mainOrigin = getMainHostOrigin();
        if (!mainOrigin) return;
        if (typeof window === "undefined") return;
        if (window.location.origin !== mainOrigin) {
            setRoot(MAIN_HOST_RAW || "/");
        }
    }, []);

    return root;
}
