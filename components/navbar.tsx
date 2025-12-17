"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaGithub } from "react-icons/fa";
import { IconSearch, IconCommand } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex items-center gap-3">
                <Link href="/docs">
                    <Image src="/invarianceLogo.png" alt="Logo" width={150} height={150} />
                </Link>
                <div className="flex items-center gap-1 pl-1">
                    <Separator orientation="vertical" className="h-6" />
                </div>
                <div className="flex items-center gap-1">
                    <Link href="/docs">
                        <Button size="sm" variant={pathname.startsWith("/docs") ? "secondary" : "ghost"} className={pathname.startsWith("/docs") ? "text-foreground" : "text-muted-foreground hover:text-foreground"}>
                            Docs
                        </Button>
                    </Link>
                    <Link href="/playground">
                        <Button size="sm" variant={pathname.startsWith("/playground") ? "secondary" : "ghost"} className={pathname.startsWith("/playground") ? "text-foreground" : "text-muted-foreground hover:text-foreground"}>
                            Playground
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <button className="relative group flex items-center gap-2 h-8 w-64 rounded-sm border border-input bg-muted/40 px-3 text-sm text-muted-foreground hover:bg-accent transition-colors">
                    <IconSearch className="h-4 w-4" />
                    <span>Search documentation...</span>
                    <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                        <IconCommand className="h-3 w-3" />K
                    </kbd>
                </button>
                <div className="flex items-center gap-1 pl-1">
                    <Separator orientation="vertical" className="h-6" />
                </div>
                <Link href="https://github.com/invariance-engine" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary rounded-sm">
                        <FaGithub className="h-5 w-5" />
                    </Button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
