"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, BookOpen } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();

  const linkClass = (path) =>
    `flex items-center gap-2 p-2 rounded hover:bg-gray-100 ${
      pathname === path ? "text-blue-600 font-semibold" : "text-gray-700"
    }`;

  return (
    <aside className="w-64 bg-white border-r p-6 hidden md:block shadow-lg">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <nav className="flex flex-col gap-4">
        <Link href="/" className={linkClass("/")}>
          <BookOpen size={20} />
          Blogs
        </Link>
        <Link href="/contact" className={linkClass("/contact")}>
          <Mail size={20} />
          Contact
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
