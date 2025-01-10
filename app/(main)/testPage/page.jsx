"use client";
import { allInsurancePolicyForChart } from "@/actions/Insurance";
import DialogForForm from "@/components/dialogForForm";
import DrawerForForm from "@/components/drawerForm";
import SheetForForm from "@/components/SheetForForm";
import { Button } from "@/components/ui/button";
import { DrawerClose, DrawerFooter } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";

const TestPage = () => {
  const [chartRes, setchartRes] = useState({});
  const drawerFormTitle = "Add Emergency Contacts";
  const drawerFormTrigger = <Button>Add Contact</Button>;

  const sheetFormTitle = "Add Emergency Contacts";
  const sheetFormTrigger = <Button>Add Sheet Contact</Button>;

  const dialogFormTitle = "Add Emergency Contacts";
  const dialogFormTrigger = <Button>Add Dialog Contact</Button>;

  const policySum = async () => {
    const response = await allInsurancePolicyForChart();
    setchartRes(response.data);
  };

  console.log("Chart res:- ", chartRes);

  let chartData = [];
  let chartLabel = [];
  chartRes.map((d) => chartData.push(d));

  console.log("Chart data array is:- ", chartData);

  useEffect(() => {
    policySum();
  }, []);

  return (
    <div className="flex flex-wrap gap-3">
      <DrawerForForm
        drawerFormTitle={drawerFormTitle}
        drawerFormTrigger={drawerFormTrigger}
      >
        <div className="mx-auto px-4 pb-4">
          <form action="" className="space-y-4 w-[330px] sm:w-[800px]  ">
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Enter Contact Name
              </Label>
              <Input id="name" placeholder="Enter Contact Name" />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Enter Contact Name
              </Label>
              <Input id="name" placeholder="Enter Contact Name" />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Enter Contact Name
              </Label>
              <Input id="name" placeholder="Enter Contact Name" />
            </div>

            <div>
              <DrawerFooter className="flex flex-col gap-4 py-4">
                <Button>Add Contact</Button>
                <DrawerClose className="w-full">
                  <Button variant="outline" className="w-full">
                    Cancel
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </form>
        </div>
      </DrawerForForm>

      {/* New sheet test */}
      <SheetForForm
        sheetFormTitle={sheetFormTitle}
        sheetFormTrigger={sheetFormTrigger}
      >
        <div className="mx-auto pb-4">
          <form className="space-y-4 w-[330px] sm:w-[800px]  ">
            <div className="flex space-y-2">
              <Label
                htmlFor="name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Enter Contact Name
              </Label>
              <Input id="name" placeholder="Enter Contact Name" />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Enter Contact Name
              </Label>
              <Input id="name" placeholder="Enter Contact Name" />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Enter Contact Name
              </Label>
              <Input id="name" placeholder="Enter Contact Name" />
            </div>
          </form>
        </div>
      </SheetForForm>

      {/* Dialog for sheet */}
      <DialogForForm
        dialogFormTitle={dialogFormTitle}
        dialogFormTrigger={dialogFormTrigger}
      >
        <div className="mx-auto  pb-4">
          <form action="" className="space-y-4">
            <div className="flex flex-col items-start space-y-2">
              <Label
                htmlFor="name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Enter Contact Name
              </Label>
              <Input
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                id="name"
                placeholder="Enter Contact Name"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Label
                htmlFor="name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Enter Contact Name
              </Label>
              <Input
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                id="name"
                placeholder="Enter Contact Name"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Label
                htmlFor="name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Enter Contact Name
              </Label>
              <Input
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                id="name"
                placeholder="Enter Contact Name"
              />
            </div>
            <div className="btn-sh flex gap-3">
              <Button type="submit">Add Dialog</Button>
              <Button type="reset">Reset</Button>
            </div>
          </form>
        </div>
      </DialogForForm>

      {/* testing colors */}
      <div className="space-y-2 p-2 ">
        <p className="text-center px-2 py-1 text-xs font-medium rounded-full bg-green-50 text-green-600 ">
          bg-green-100
        </p>
        <p className="text-center px-2 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-600">
          bg-blue-100
        </p>
        <p className="text-center px-2 py-1 text-xs font-medium rounded-full bg-red-50 text-red-600">
          bg-red-100
        </p>
        <p className="text-center px-2 py-1 text-xs font-medium rounded-full bg-purple-50 text-purple-600">
          bg-purple-100
        </p>
        <p className="text-center px-2 py-1 text-xs font-medium rounded-full bg-yellow-50 text-yellow-600">
          bg-yellow-100
        </p>
        <p className="text-center px-2 py-1 text-xs font-medium rounded-full bg-gray-50  text-gray-600">
          bg-gray-100
        </p>
      </div>

      {/* CHart display */}
    </div>
  );
};

export default TestPage;
