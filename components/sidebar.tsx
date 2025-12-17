"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ArrowRight, MoveUpRight } from "lucide";
import Image from "next/image";
import { RiArrowRightUpLine } from "react-icons/ri";

const sidebarMenu = [
    {
        label: "Platform",
        items: [
            { label: "Overview", href: "/docs" },
            { label: "About", href: "/about" },
        ],
    },
    {
        label: "Gettiing Started",
        items: [
            { label: "Quickstart", href: "/docs/quickstart" },
            { label: "Core Workflow", href: "/docs/workflow" },
            { label: "CLI Reference", href: "/docs/cli" },
            { label: "Examples", href: "/docs/examples" },
        ],
    },
    {
        label: "Understanding & Trust",
        items: [
            { label: "Concepts", href: "/docs/concepts" },
            { label: "Limitations & Assumptions", href: "/docs/limitations" },
            { label: "FAQ", href: "/docs/faq" },
        ],
    },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="bg-sidebar w-64 border-r border-border min-h-[calc(100vh-64px)] px-2 py-4 flex flex-col">
            <nav className="space-y-6 flex-1">
                {sidebarMenu.map((group) => (
                    <div key={group.label}>
                        <h4 className="px-3 mb-2 text-xs text-muted-foreground/70">
                            {group.label}
                        </h4>
                        <div className="space-y-1">
                            {group.items.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "px-3 h-8 items-center flex rounded-sm text-sm transition-colors",
                                        pathname === item.href
                                            ? "bg-border/50 text-foreground"
                                            : "text-foreground/70 hover:text-foreground hover:bg-sidebar-accent"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </nav>
            <div className="sticky bottom-4">
                <Link
                    href="/changelog"
                    className="px-3 h-8 items-center flex rounded-sm text-sm text-foreground/70 hover:text-foreground"
                >
                    <div className="flex items-center w-full justify-between gap-2">
                        <span>Changelog</span>
                        <RiArrowRightUpLine className="size-4" />
                    </div>
                </Link>
                <Link
                    href="/report"
                    className="px-3 h-8 items-center flex rounded-sm text-sm text-foreground/70 hover:text-foreground"
                >
                    <div className="flex items-center w-full justify-between gap-2">
                        <span>Report a Bug</span>
                        <RiArrowRightUpLine className="size-4" />
                    </div>
                </Link>
            </div>
        </aside>
    );
}

