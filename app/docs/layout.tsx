"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import TableOfContents from "@/components/table-of-contents";
import Footer from "@/components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
            <div className="flex flex-1">
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                <main className="flex-1 p-4 md:p-6 max-w-4xl mx-auto mt-4 flex flex-col">
                    <div className="flex-1">{children}</div>
                    <Footer />
                </main>
                <TableOfContents />
            </div>
        </div>
    )
}