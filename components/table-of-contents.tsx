"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Find all headings in the main content area
    const elements = document.querySelectorAll("main h1, main h2, main h3");
    const items: TocItem[] = [];

    elements.forEach((el) => {
      // Generate an id if one doesn't exist
      if (!el.id) {
        el.id = el.textContent?.toLowerCase().replace(/\s+/g, "-") || "";
      }
      items.push({
        id: el.id,
        text: el.textContent || "",
        level: parseInt(el.tagName[1]),
      });
    });

    setHeadings(items);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden lg:block w-56 shrink-0 sticky top-20 h-fit max-h-[calc(100vh-5rem)] overflow-y-auto p-4">
      <p className="text-sm font-semibold text-foreground mb-3">On this page</p>
      <ul className="space-y-2 text-sm border-l border-border">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={cn(
                "block py-1 pl-3 -ml-px border-l-2 transition-colors",
                heading.level === 1 && "font-medium",
                heading.level === 2 && "pl-3",
                heading.level === 3 && "pl-5",
                activeId === heading.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground/70 hover:border-border"
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

