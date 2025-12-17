"use client";

import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="border-t border-border py-6 mt-auto">
            <div className="max-w-4xl mx-auto px-4 md:px-6 flex items-center justify-between text-muted-foreground text-xs">
                <span>© {new Date().getFullYear()} Invariance Inc.</span>
                <div className="flex items-center gap-4">
                    <a
                        href="https://x.com/invariancesh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors"
                    >
                        <BsTwitterX className="w-3 h-3" />
                    </a>
                    <a
                        href="https://github.com/invariance-engine"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors"
                    >
                        <FaGithub className="w-3 h-3" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

