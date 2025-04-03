import { useState, type PropsWithChildren, type ReactNode } from "react";

interface Props extends PropsWithChildren {
    icon?: string;
    url?: string;
}

export default function DoubleStackButton({
    children,
    icon,
    url = "#",
}: Props) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            className="group relative inline-block cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
        >
            {/* Bottom rectangle (always visible) */}
            <div className="flex items-center justify-start gap-2 border border-catpuccin-text px-4 py-2 group-hover:border-catpuccin-yellow group-hover:text-catpuccin-yellow group-focus:border-catpuccin-yellow">
                {icon && <span>{icon}</span>}
                <div>{children}</div>
            </div>

            {/* Top rectangle (animates down on hover) */}
            <a
                className={`absolute left-0 top-0 flex w-full items-center justify-start gap-2 border border-catpuccin-text bg-[#1a1b26] px-4 py-2 text-white transition-all duration-200 ${
                    isHovered
                        ? "translate-y-0 opacity-0"
                        : "-translate-x-1 -translate-y-1"
                }`}
                href={url}
            >
                {icon && <span>{icon}</span>}
                <div>{children}</div>
            </a>
        </div>
    );
}
