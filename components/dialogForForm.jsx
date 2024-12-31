"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DialogForForm = ({
  children,
  dialogFormTitle,
  dialogFormTrigger,
  sheetCss = "mx-auto container",
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{dialogFormTrigger}</DialogTrigger>
        <DialogContent className={sheetCss}>
          <DialogHeader>
            <DialogTitle className="gradient-subTitle pb-3 text-2xl">
              {dialogFormTitle}
            </DialogTitle>
            <DialogDescription>
              <div className={`${dialogFormTitle}`}>{children}</div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogForForm;
