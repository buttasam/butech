"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { href: "#kontakty", label: "Kontakty" },
  { href: "#projekty", label: "Projekty" }
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-(--line) bg-white">
      <div className="mx-auto max-w-6xl px-6 py-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between">
          <a href="#" aria-label="BuTech">
            <Image
              src="/butech-logo.svg"
              alt="BuTech s.r.o."
              width={320}
              height={94}
              priority
              className="h-auto w-38 sm:w-45 lg:w-55"
            />
          </a>

          <nav aria-label="Hlavní menu" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm font-medium uppercase tracking-[0.14em] text-slate-500">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a className="transition hover:text-(--brand)" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:hidden">
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Zavřít menu" : "Otevřít menu"}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-(--line) bg-white text-(--brand) shadow-[0_10px_30px_rgba(11,40,56,0.08)] transition hover:border-(--brand)"
            >
              <span className="sr-only">{isMenuOpen ? "Zavřít menu" : "Otevřít menu"}</span>
              <span className="flex w-5 flex-col gap-1.5">
                <span
                  className={`block h-0.5 rounded-full bg-current transition ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
                />
                <span
                  className={`block h-0.5 rounded-full bg-current transition ${isMenuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 rounded-full bg-current transition ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out md:hidden ${
            isMenuOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
          }`}
        >
          <nav
            id="mobile-menu"
            aria-label="Mobilní menu"
            className="overflow-hidden border-t border-(--line)"
          >
            <div
              className={`pt-4 transition-transform duration-300 ease-out ${
                isMenuOpen ? "translate-y-0" : "-translate-y-3"
              }`}
            >
              <ul className="text-right">
                {navItems.map((item, index) => (
                  <li
                    key={item.href}
                    className={`transition-[transform,opacity] duration-300 ease-out ${
                      isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                    }`}
                    style={{ transitionDelay: isMenuOpen ? `${index * 60}ms` : "0ms" }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block w-full py-3 text-sm font-semibold uppercase tracking-[0.14em] text-(--brand) transition hover:text-slate-700"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
