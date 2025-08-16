"use client";

import Link from "next/link";

export function NavigationMenu() {
  return (
    <nav className="flex gap-6 text-white">
      <Link href="#univers" className="hover:text-pink-400">
        Univers
      </Link>
      <Link href="#music" className="hover:text-pink-400">
        Musique
      </Link>
      <Link href="#shop" className="hover:text-pink-400">
        Merch
      </Link>
    </nav>
  );
}
