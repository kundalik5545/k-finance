"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";
import Investmenst from "./_components/Investmenst";
import Transactions from "./_components/Transactions";
import Insurance from "./_components/Insurance";
import Loans from "./_components/Loans";
import QuickStats from "./_components/QuickStats";

const DashboardPage = () => {
  const { isSignedIn, isLoaded, user } = useUser();

  if (!isSignedIn) {
    return <p>Please sign in to view your profile.</p>;
  }

  return (
    <div className="space-y-6 pb-6 pt-0 pl-2 pr-2">
      {/* Quick Stats cards */}
      <QuickStats />
      {/* transactions */}
      <Transactions />
      {/* Investments */}
      <Investmenst />
      {/* Insurance */}
      <Insurance />
      {/* Loans */}
      <Loans />
      {/* Assests */}

      {/* Reports */}
    </div>
  );
};

export default DashboardPage;
