"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ArrowRight, MoveUpRight } from "lucide";
import Image from "next/image";
import { RiArrowRightUpLine } from "react-icons/ri";
import { IconX } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

const sidebarMenu = [
    {
        label: "Platform",
        items: [
            { label: "Overview", href: "/docs" },
            { label: "About", href: "/about" },
        ],
    },
    {
        label: "Getting Started",
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

interface SidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    const pathname = usePathname();

    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
                    onClick={onClose}
                />
            )}
            <aside
                className={cn(
                    "bg-sidebar w-64 border-r border-border min-h-[calc(100vh-64px)] px-2 py-4 flex flex-col",
                    "fixed md:static top-[57px] left-0 z-50 transition-transform duration-200 ease-in-out",
                    "md:translate-x-0",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex items-center justify-between md:hidden px-3 pb-4 border-b border-border mb-4">
                    <span className="font-medium text-sm">Menu</span>
                    <Button variant="ghost" size="icon" className="rounded-sm" onClick={onClose}>
                        <IconX className="h-4 w-4" />
                    </Button>
                </div>
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
                                        onClick={onClose}
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
                        onClick={onClose}
                        className="px-3 h-8 items-center flex rounded-sm text-xs text-foreground/70 hover:text-foreground"
                    >
                        <div className="flex items-center w-full justify-between gap-2">
                            <span>Changelog</span>
                            <RiArrowRightUpLine className="size-3" />
                        </div>
                    </Link>
                    <Link
                        href="/report"
                        onClick={onClose}
                        className="px-3 h-8 items-center flex rounded-sm text-xs text-foreground/70 hover:text-foreground"
                    >
                        <div className="flex items-center w-full justify-between gap-2">
                            <span>Report a Bug</span>
                            <RiArrowRightUpLine className="size-3" />
                        </div>
                    </Link>
                </div>
            </aside>
        </>
    );
}

