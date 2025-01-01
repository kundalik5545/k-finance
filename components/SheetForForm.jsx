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
  formOpen,
  setFormOpen,
  sheetCss = "mx-auto container",
}) => {
  return (
    <div>
      <Sheet open={formOpen} onOpenChange={setFormOpen}>
        <SheetTrigger asChild>{sheetFormTrigger}</SheetTrigger>
        <SheetContent className={sheetCss}>
          <SheetHeader>
            <SheetTitle className="gradient-subTitle pb-3 text-2xl">
              {sheetFormTitle}
            </SheetTitle>
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
