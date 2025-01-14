import { ServicesSidebar } from "@/components/sidebars/ServicesSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const ServicesLayout = ({ children }) => {
  return (
    <div className="p-5 pt-20">
      <SidebarProvider
        style={{
          "--sidebar-width": "16rem",
          "--sidebar-width-mobile": "10rem",
        }}
      >
        <ServicesSidebar />
        <div>{children}</div>
      </SidebarProvider>
    </div>
  );
};

export default ServicesLayout;
