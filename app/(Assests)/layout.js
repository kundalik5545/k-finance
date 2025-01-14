import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const AssetsLayout = ({ children }) => {
  return (
    <div className="p-5 flex">
      <SidebarProvider
        style={{
          "--sidebar-width": "16rem",
          "--sidebar-width-mobile": "10rem",
        }}
      >
        <AppSidebar />
        <div className="py-3 w-full">{children}</div>
      </SidebarProvider>
    </div>
  );
};

export default AssetsLayout;
