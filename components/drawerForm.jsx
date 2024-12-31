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
  drawerCss = "container mx-auto w-[350px] sm:w-[500px] md:w-[700px] lg:w-[900px]",
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{drawerFormTrigger}</DrawerTrigger>
      <DrawerContent className={drawerCss}>
        <DrawerHeader>
          <DrawerTitle className="gradient-subTitle pb-3 text-2xl">
            {drawerTitle}
          </DrawerTitle>
        </DrawerHeader>
        <div className={`${drawerTitle}`}>{children}</div>
      </DrawerContent>
    </Drawer>
  );
};
export default DrawerForForm;
