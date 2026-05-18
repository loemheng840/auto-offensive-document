export default function Loading() {
    return (
        <div className="min-h-screen bg-[#FCFCFA] dark:bg-[#09090B] px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="border-b border-[#E8E5DE] dark:border-white/10 pb-10">
                    <div className="h-6 w-32 rounded-full bg-[#F0EDE6] dark:bg-white/5 animate-pulse mb-4" />
                    <div className="h-12 w-2/3 rounded-2xl bg-[#F0EDE6] dark:bg-white/5 animate-pulse mb-4" />
                    <div className="h-5 w-1/2 rounded-xl bg-[#F0EDE6] dark:bg-white/5 animate-pulse" />
                </div>
                <div className="mt-10 grid gap-5 md:grid-cols-2">
                    {[0, 1, 2, 3].map((i) => (
                        <div key={i} className="rounded-3xl border border-[#E7E3DA] dark:border-white/10 bg-white dark:bg-[#101114] p-6">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="h-11 w-11 rounded-2xl bg-[#F0EDE6] dark:bg-white/5 animate-pulse shrink-0" />
                                <div className="flex-1">
                                    <div className="h-3 w-20 rounded bg-[#F0EDE6] dark:bg-white/5 animate-pulse mb-2" />
                                    <div className="h-7 w-40 rounded-xl bg-[#F0EDE6] dark:bg-white/5 animate-pulse" />
                                </div>
                            </div>
                            <div className="space-y-2 mb-6">
                                <div className="h-4 w-full rounded bg-[#F0EDE6] dark:bg-white/5 animate-pulse" />
                                <div className="h-4 w-5/6 rounded bg-[#F0EDE6] dark:bg-white/5 animate-pulse" />
                            </div>
                            <div className="border-t border-[#F0EBE2] dark:border-white/8 pt-4 space-y-2">
                                {[0, 1, 2].map((j) => (
                                    <div key={j} className="h-9 w-full rounded-2xl bg-[#F0EDE6] dark:bg-white/5 animate-pulse" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
