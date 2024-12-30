"use client";
import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
const DrawerForForm = ({
  children,
  drawerTitle,
  drawerFormTrigger,
  drawerCss = "w-96 sm:w-[500px] md:w-[700px] lg:w-[1000px] mx-auto container",
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{drawerFormTrigger}</DrawerTrigger>
      <DrawerContent className={drawerCss}>
        <DrawerHeader>
          <DrawerTitle>{drawerTitle}</DrawerTitle>
        </DrawerHeader>
        <div className={`${drawerTitle} p-2`}>{children}</div>
      </DrawerContent>
    </Drawer>
  );
};
export default DrawerForForm;
