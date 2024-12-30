"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SheetForForm = ({
  children,
  sheetFormTitle,
  sheetFormTrigger,
  sheetCss = "w-96 sm:w-[500px] md:w-[700px] lg:w-[1000px] mx-auto container",
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>{sheetFormTrigger}</SheetTrigger>
        <SheetContent className={sheetCss}>
          <SheetHeader>
            <SheetTitle>{sheetFormTitle}</SheetTitle>
            <SheetDescription>
              <div className={`${sheetFormTitle} p-2`}>{children}</div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SheetForForm;
