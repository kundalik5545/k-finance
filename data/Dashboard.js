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
  { id: 1, items: "Stocks", icon: <DollarSign />, totalAmt: 400, href: "/" },
  { id: 2, items: "NPS", icon: <Shield />, totalAmt: 2508, href: "/" },
  { id: 3, items: "EPF", icon: <Briefcase />, totalAmt: 74610, href: "/" },
  { id: 4, items: "PPF", icon: <FileText />, totalAmt: 5300, href: "/" },
  { id: 5, items: "FD", icon: <CreditCard />, totalAmt: 8920, href: "/" },
  {
    id: 6,
    items: "Mutual Funds",
    icon: <BarChart2 />,
    totalAmt: 75300,
    href: "/",
  },
  {
    id: 7,
    items: "Gold & Silver",
    icon: <Award />,
    totalAmt: 84500,
    href: "/",
  },
  { id: 8, items: "Real Estate", icon: <Home />, totalAmt: 23400, href: "/" },
  { id: 9, items: "Bonds", icon: <File />, totalAmt: 3500, href: "/" },
  {
    id: 10,
    items: "Add",
    icon: <PlusCircle />,
    totalAmt: "Any Amt",
    href: "/",
  },
];
