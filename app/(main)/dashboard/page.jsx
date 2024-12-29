"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { allItems } from "@/data/Dashboard";
import { useUser } from "@clerk/nextjs";
import { IndianRupee } from "lucide-react";

import Link from "next/link";
import React from "react";

const DashboardPage = () => {
  const { isSignedIn, isLoaded, user } = useUser();

  if (!isSignedIn) {
    return <p>Please sign in to view your profile.</p>;
  }

  return (
    <div className=" ">
      <h3 className="text-xl">
        Welcome{" "}
        <span className="uppercase text-blue-500">{user.firstName}</span> to
        Dashboard
      </h3>

      {/* Desktop view */}
      <div className="asset-value-desktop my-5 hidden md:block">
        <Card className="bg-[#253660] text-white font-inter py-2">
          <CardHeader>
            <CardTitle className="flex justify-around">
              <span>TOTAL ASSETS</span>
              <span>TOTAL LIABILITY</span>
              <span>TOTAL PORTFOLIO</span>
            </CardTitle>

            <CardContent className="flex justify-around py-5">
              <div className="flex">
                <IndianRupee />
                <span>4,32,450/-</span>
              </div>
              <div className="flex">
                <IndianRupee />
                <span>2,52,750/-</span>
              </div>
              <div className="flex">
                <IndianRupee />
                <span>1,79,700/-</span>
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      </div>

      {/* Mobile view */}
      <div className="asset-value-mobile my-5 block md:hidden">
        <Card className="bg-[#253660] text-white font-inter py-2">
          <CardHeader>
            <div className="flex flex-col justify-around space-y-3">
              <div className="flex items-center justify-around">
                <span>TOTAL ASSETS</span>
                <div className="flex">
                  <IndianRupee />
                  <span>4,32,450/-</span>
                </div>
              </div>

              <div className="flex items-center justify-around">
                <span>TOTAL LIABILITY</span>
                <div className="flex">
                  <IndianRupee />
                  <span>2,52,750/-</span>
                </div>
              </div>

              <div className="flex items-center justify-around">
                <span>TOTAL PORTFOLIO</span>
                <div className="flex">
                  <IndianRupee />
                  <span>1,79,700/-</span>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>

      <div className="all-assets pt-5 pb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {allItems.map((ele) => (
          <Link href={ele.href} key={ele.id} className="block">
            <Card className="flex flex-col items-center justify-center p-4">
              <CardHeader className="flex m-0 p-0">
                <CardTitle className="flex items-center justify-center p-1 space-x-2">
                  <span>{ele.icon}</span>
                  <span>{ele.items}</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="flex items-center p-3">
                <IndianRupee />
                <span>{ele.totalAmt}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
