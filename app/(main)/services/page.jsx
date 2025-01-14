import { Button } from "@/components/ui/button";
import { servicesNavLinks } from "@/data/NavBarData";
// Import specific icons
import Link from "next/link";
import React from "react";

const ServicePage = () => {
  return (
    <div>
      <nav className="flex flex-wrap gap-6 p-3 sm:p-0">
        {servicesNavLinks.map((link, i) => {
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
