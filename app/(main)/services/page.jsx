import { Button } from "@/components/ui/button";
import {
  BriefcaseBusiness,
  Calculator,
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
} from "lucide-react"; // Import specific icons
import Link from "next/link";
import React from "react";

const ServicePage = () => {
  const allServices = [
    { href: "/contact-list", linkText: "Contact List", iconName: <Contact /> },
    { href: "/testPage", linkText: "Test Page", iconName: <FlaskConical /> },
    { href: "/insurance", linkText: "Insurance", iconName: <Shield /> },
    { href: "/basic-details", linkText: "Basic Details", iconName: <User /> },
    { href: "/patience", linkText: "Bank Details", iconName: <Landmark /> },
    {
      href: "/patience",
      linkText: "Credit Card Details",
      iconName: <CreditCard />,
    },
    {
      href: "/patience",
      linkText: "Debit Card Details",
      iconName: <CreditCard />,
    },
    { href: "/patience", linkText: "Loans & EMI", iconName: <DollarSign /> },
    { href: "/patience", linkText: "Hospital List", iconName: <Hospital /> },
    { href: "/patience", linkText: "Gold & Silver", iconName: <IndianRupee /> },
    {
      href: "/calculators",
      linkText: "Calculators",
      iconName: <Calculator size={35} />,
    },
    {
      href: "/patience",
      linkText: "Documents",
      iconName: <BriefcaseBusiness />,
    },
    {
      href: "/patience",
      linkText: "Holiday Planning",
      iconName: <PlaneTakeoff />,
    },
    { href: "/patience", linkText: "Land & Flats", iconName: <LandPlot /> },
    { href: "/patience", linkText: "Vehicle", iconName: <Car /> },
    { href: "/patience", linkText: "Bills", iconName: <Receipt /> },
  ];

  return (
    <div>
      <nav className="flex flex-wrap gap-6 p-3 sm:p-0">
        {allServices.map((link, i) => {
          return (
            <Link key={i} href={link.href}>
              <Button variant="outline" className="flex items-center gap-2">
                {link.iconName}
                {link.linkText}
              </Button>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default ServicePage;
