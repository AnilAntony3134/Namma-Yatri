"use client";

import { motion, LayoutGroup } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

const navItems = [
  { path: "/", name: "home" },
  { path: "/work", name: "work" },
  { path: "/projects", name: "projects" },
  { path: "/guestbook", name: "guestbook" }
];

const cx = (...classes: any[]) => classes.filter(Boolean).join(" ");

export default function NavBar() {
  return (
    <aside className="mb-20">
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
            <div className="flex flex-row space-x-0 pr-10">
              <Suspense fallback={"null"}>
                {navItems.map((item, ind) =>
                  <NavItem name={item.name} path={item.path} key={ind} />
                )}
              </Suspense>
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}

function NavItem({ name, path }: { name: string; path: string }) {
  const pathname = usePathname();
  const isActive = pathname === path;
  return (
    <Link
      href={path}
      className={cx("flex align-middle hover:text-neutral-500 transition", {
        "text-neutral-500": isActive
      })}
    >
      <span className="relative py-1 px-2">
        {name}
        {path === pathname
          ? <motion.div
              className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
              layoutId="sidebar"
              transition={{
                type: "spring",
                stiffness: "damping",
                damping: "30"
              }}
            />
          : null}
      </span>
    </Link>
  );
}
