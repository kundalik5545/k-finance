import {
  Calculator,
  GraduationCap,
  House,
  LayoutDashboard,
  CircleDollarSign,
  TrendingUp,
  ShieldCheck,
  HandCoins,
  FileChartColumnIncreasing,
  Gem,
} from "lucide-react";

export const dashboardNavlinks = [
  {
    url: "/dashboard",
    linkText: "Dashboard",
    icon: <LayoutDashboard />,
  },
  {
    url: "#transactions",
    linkText: "Transactions",
    icon: <CircleDollarSign />,
  },
  {
    url: "#investments",
    linkText: "Investments",
    icon: <TrendingUp />,
  },
  {
    url: "#insurance",
    linkText: "Insurance",
    icon: <ShieldCheck />,
  },
  {
    url: "#loans",
    linkText: "Loans",
    icon: <HandCoins />,
  },
  {
    url: "#assets",
    linkText: "Assets",
    icon: <Gem />,
  },
  {
    url: "#reports",
    linkText: "Reports",
    icon: <FileChartColumnIncreasing />,
  },
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
