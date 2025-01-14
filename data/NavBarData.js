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
  BriefcaseBusiness,
  Car,
  Contact,
  CreditCard,
  DollarSign,
  FlaskConical,
  Hospital,
  IndianRupee,
  Landmark,
  LandPlot,
  PlaneTakeoff,
  Receipt,
  Shield,
  User,
  Settings,
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
  {
    url: "/services",
    linkText: "Services",
    icon: <Settings />,
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

export const servicesNavLinks = [
  {
    href: "/contact-list",
    linkText: "Contact List",
    iconName: <Contact size={23} />,
  },
  {
    href: "/testPage",
    linkText: "Test Page",
    iconName: <FlaskConical size={23} />,
  },
  { href: "/insurance", linkText: "Insurance", iconName: <Shield size={23} /> },
  {
    href: "/basic-details",
    linkText: "Basic Details",
    iconName: <User size={23} />,
  },
  {
    href: "/bank-details",
    linkText: "Bank Details",
    iconName: <Landmark size={23} />,
  },
  {
    href: "/patience",
    linkText: "Credit Card Details",
    iconName: <CreditCard size={23} />,
  },
  {
    href: "/patience",
    linkText: "Debit Card Details",
    iconName: <CreditCard size={23} />,
  },
  {
    href: "/patience",
    linkText: "Loans & EMI",
    iconName: <DollarSign size={23} />,
  },
  {
    href: "/patience",
    linkText: "Hospital List",
    iconName: <Hospital size={23} />,
  },
  {
    href: "/patience",
    linkText: "Gold & Silver",
    iconName: <IndianRupee size={23} />,
  },
  {
    href: "/calculators",
    linkText: "Calculators",
    iconName: <Calculator size={23} />,
  },
  {
    href: "/patience",
    linkText: "Documents",
    iconName: <BriefcaseBusiness size={23} />,
  },
  {
    href: "/patience",
    linkText: "Holiday Planning",
    iconName: <PlaneTakeoff size={23} />,
  },
  {
    href: "/patience",
    linkText: "Land & Flats",
    iconName: <LandPlot size={23} />,
  },
  { href: "/patience", linkText: "Vehicle", iconName: <Car size={23} /> },
  { href: "/patience", linkText: "Bills", iconName: <Receipt size={23} /> },
];
