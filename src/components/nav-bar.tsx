"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";
import navRoutes from "@/content/nav-routes";
import externalLinks from "@/content/external-links";
import { ExternalLink } from "@/components/external-link";

function Navbar() {
  return (
    <aside className="-ml-2 mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav className="flex flex-row items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
          <div className="flex flex-1 flex-row space-x-0 pr-10">
            <Suspense fallback={null}>
              {Object.entries(navRoutes).map(([path, { name }]) => (
                <NavItem key={path} path={path} name={name} />
              ))}
            </Suspense>
          </div>
          <div className="flex gap-2 text-left">
            <Suspense fallback={null}>
              {Object.entries(externalLinks)
                .slice(0, 3)
                .map(([link, name]) => (
                  <ExternalLink href={name} key={name}>
                    {link}
                  </ExternalLink>
                ))}
            </Suspense>
          </div>
        </nav>
      </div>
    </aside>
  );
}

export default Navbar;

function NavItem({ path, name }: { path: string; name: string }) {
  let pathname = usePathname() || "/";
  if (pathname.includes("/solutions/")) {
    pathname = "/solutions";
  }

  return (
    <Link
      key={path}
      href={path}
      className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle"
    >
      <span className="relative py-1 px-2">
        {name}
        {path === pathname ? (
          <div className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 -z-1 dark:bg-gradient-to-r from-transparent to-green-900" />
        ) : null}
      </span>
    </Link>
  );
}
