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
  drawerFormTitle,
  drawerFormTrigger,
  formOpen,
  setFormOpen,
  drawerCss = "container mx-auto w-[350px] sm:w-[500px] md:w-[700px] lg:w-[900px]",
}) => {
  return (
    <Drawer open={formOpen} onOpenChange={setFormOpen}>
      <DrawerTrigger asChild>{drawerFormTrigger}</DrawerTrigger>
      <DrawerContent className={drawerCss}>
        <DrawerHeader>
          <DrawerTitle className="gradient-subTitle pb-3 text-2xl">
            {drawerFormTitle}
          </DrawerTitle>
        </DrawerHeader>
        <div className={`${drawerFormTitle} p-3`}>{children}</div>
      </DrawerContent>
    </Drawer>
  );
};
export default DrawerForForm;
