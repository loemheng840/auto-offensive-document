import { cn } from "@/lib/utils";

interface SkeletonProps {
    className?: string;
}

export default function Skeleton({ className }: SkeletonProps) {
    return (
        <div
            className={cn(
                "animate-pulse rounded-md bg-[#E2DDD5] dark:bg-white/10",
                className
            )}
        />
    );
}
