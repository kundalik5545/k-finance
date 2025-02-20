import {
  DollarSign,
  Shield,
  Briefcase,
  FileText,
  CreditCard,
  BarChart2,
  Award,
  Home,
  File,
  PlusCircle,
  IndianRupee,
} from "lucide-react";

export const allItems = [
  {
    id: 1,
    topTitle: "Stocks",
    iconName: <DollarSign />,
    MainAmt: 400,
    href: "/stocks",
    bgColor: "bg-green-50",
    statTextColor: "text-green-600",
    statsChange: "+2.5% from last month",
  },
  {
    id: 2,
    topTitle: "NPS",
    iconName: <Shield />,
    MainAmt: 2508,
    href: "/",
    bgColor: "bg-red-50",
    statTextColor: "text-red-600",
    statsChange: "-2.5% from last month",
  },
  {
    id: 3,
    topTitle: "EPF",
    iconName: <Briefcase />,
    MainAmt: 74610,
    href: "/epf",
    bgColor: "bg-purple-50",
    statTextColor: "text-purple-600",
    statsChange: "+2.5% from last month",
  },
  {
    id: 4,
    topTitle: "PPF",
    iconName: <FileText />,
    MainAmt: 5300,
    href: "/",
    bgColor: "bg-gray-50",
    statTextColor: "text-gray-600",
    statsChange: "+2.5% from last month",
  },
  {
    id: 5,
    topTitle: "FD",
    iconName: <CreditCard />,
    MainAmt: 8920,
    href: "/",
    bgColor: "bg-yellow-50",
    statTextColor: "text-yellow-600",
    statsChange: "+2.5% from last month",
  },
  {
    id: 6,
    topTitle: "Mutual Funds",
    iconName: <BarChart2 />,
    MainAmt: 75300,
    href: "/",
    bgColor: "bg-blue-50",
    statTextColor: "text-blue-600",
    statsChange: "+2.5% from last month",
  },
  {
    id: 7,
    topTitle: "Gold & Silver",
    iconName: <Award />,
    MainAmt: 84500,
    href: "/",
    bgColor: "bg-green-50",
    statTextColor: "text-green-600",
    statsChange: "+2.5% from last month",
  },
  {
    id: 8,
    topTitle: "Real Estate",
    iconName: <Home />,
    MainAmt: 23400,
    href: "/",
    bgColor: "bg-red-50",
    statTextColor: "text-red-600",
    statsChange: "+2.5% from last month",
  },
  {
    id: 9,
    topTitle: "Bonds",
    iconName: <File />,
    MainAmt: 3500,
    href: "/",
    bgColor: "bg-purple-50",
    statTextColor: "text-purple-600",
    statsChange: "+2.5% from last month",
  },
  {
    id: 10,
    topTitle: "Add",
    iconName: <PlusCircle />,
    MainAmt: "Any Amt",
    href: "/",
    bgColor: "bg-red-50",
    statTextColor: "text-red-600",
    statsChange: "+2.5% from last month",
  },
];

export const quickStats = [];

export const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
