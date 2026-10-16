"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navs = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
  { href: "/classroom", label: "Classroom" },
];

const Navbar = () => {
  const pathname = usePathname();
  const navigate = useRouter();

  return (
    <nav>
      <div className="flex gap-6">
        {navs.map((nav) => {
          const isActive =
            nav.href === "/"
              ? pathname === "/"
              : pathname === nav.href || pathname.startsWith(`${nav.href}/`);

          return (
            <Link
              className={isActive ? "text-red-600 font-bold" : ""}
              href={nav.href}
              key={nav.href}
            >
              {nav.label}
            </Link>
          );
        })}

        <button onClick={() => navigate.push("/login")}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
