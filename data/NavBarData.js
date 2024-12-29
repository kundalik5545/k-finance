import {
  Calculator,
  GraduationCap,
  House,
  LayoutDashboard,
  User,
} from "lucide-react";

export const privateNavlinks = [
  { href: "/dashboard", linkText: "Dashboard" },
  { href: "/services", linkText: "Services" },
  { href: "/calculators", linkText: "Calculators" },
  { href: "/blog", linkText: "Blog" },
];

export const publicNavlinks = [
  { href: "/", linkText: "Home" },
  { href: "/services", linkText: "Services" },
  { href: "/calculators", linkText: "Calculators" },
  { href: "/about-us", linkText: "About" },
  { href: "/blog", linkText: "Blog" },
];

export const privateMobNavlinks = [
  { href: "/dashboard", linkText: <House size={35} /> },
  { href: "/services", linkText: <LayoutDashboard size={35} /> },
  { href: "/calculators", linkText: <Calculator size={35} /> },
  { href: "/blog", linkText: <GraduationCap size={35} /> },
];
