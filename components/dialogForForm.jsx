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
  formOpen,
  setFormOpen,
  dialogCss = "mx-auto container",
}) => {
  return (
    <div>
      <Dialog open={formOpen} onOpenChange={setFormOpen}>
        <DialogTrigger asChild>{dialogFormTrigger}</DialogTrigger>
        <DialogContent className={dialogCss}>
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
