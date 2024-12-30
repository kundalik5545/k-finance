import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ServicePage = () => {
  const allServices = [
    { href: "/contact-list", linkText: "Contact List" },
    { href: "/testPage", linkText: "testPage" },
  ];
  return (
    <div>
      <nav className="flex space-x-2 p-3 sm:p-0">
        {allServices.map((link, i) => (
          <Link key={i} href={link.href}>
            <Button className="">{link.linkText}</Button>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default ServicePage;
