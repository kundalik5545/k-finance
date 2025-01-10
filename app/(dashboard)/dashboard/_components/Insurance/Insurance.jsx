"use client";
import React, { Suspense, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addPolicySchema } from "@/app/lib/Schema";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import useFetch from "@/hooks/use-fetch";

import {
  addNewPolicy,
  allInsurancePolicyForChart,
  fetchInsurancePolicy,
} from "@/actions/Insurance";

import { BarLoader } from "react-spinners";
import clsx from "clsx";
import ContributionChart from "./ContributionChart";
import PremiumScheduleChart from "./PremiumScheduleChart";

const Insurance = () => {
  const [open, setOpen] = useState(false);
  const [insuranceData, setInsuranceData] = useState([]);
  const [totalPremium, setTotalPremium] = useState(0);
  const [activePolicyCount, setActivePolicyCount] = useState(0);
  const [coverageAmount, setCoverageAmount] = useState(0);
  const [daysDiff, setDaysDiff] = useState(0);
  const [chartRes, setchartRes] = useState({});

  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addPolicySchema),
    defaultValues: {
      policyName: "",
      policyId: "",
      policyType: "TERM_LIFE",
      premium: "",
      premiumFrequency: "MONTHLY",
      coverageAmount: "",
      coverageAmtIn: "L",
      nextDueDate: "",
      policyStartDate: "",
      policyExpireDate: "",
      policyStatus: "ACTIVE",
    },
  });

  const getInsurance = async () => {
    const response = await fetchInsurancePolicy();

    if (response.success) {
      setInsuranceData(response.data);

      let formatedCurrency = new Intl.NumberFormat("en-IN").format(
        response.totalPremium
      );

      let formatedTotalCoverage = new Intl.NumberFormat("en-IN").format(
        response.totalCoverage
      );

      setTotalPremium(formatedCurrency);
      setActivePolicyCount(response.totalPolicy);
      setCoverageAmount(formatedTotalCoverage);
    }
  };

  useEffect(() => {
    getInsurance();
  }, []);

  const policySum = async () => {
    const response = await allInsurancePolicyForChart();
    console.log("Chart response:-", response);
    setchartRes(response.data);
  };

  useEffect(() => {
    policySum();
  }, []);

  const {
    apiRes,
    apiFun: createPolicyFn,
    loading,
    error,
  } = useFetch(addNewPolicy);

  const onSubmit = async (data) => {
    try {
      console.log("Running on submit :- ", data);

      const response = await createPolicyFn(data);

      console.log("Frontend response :- ", response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReset = () => {
    setOpen(false);
    reset();
  };

  const policyTypeColors = {
    HOME: "bg-red-50 text-red-500 ",
    AUTO: "bg-yellow-50 text-yellow-500",
    HEALTH: "bg-green-50 text-green-500",
    TERM_LIFE: "bg-blue-50 text-blue-500",
    TRAVEL: "bg-purple-50 text-purple-500",
  };

  const policyStatusColors = {
    ACTIVE: "bg-green-50 text-green-500",
    PENDING: "bg-yellow-50 text-yellow-500",
    EXPIRED: "bg-red-50 text-red-500",
  };

  const policyTableHead = [
    "Policy Name",
    "Type",
    "Premium",
    "Coverage",
    "Next Due",
    "Status",
    "Actions",
  ];
  return (
    <div id="insurance">
      {/* <!-- Insurance Summary Cards --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500">Total Premium</p>
              <h3 className="text-2xl font-bold text-neutral-800">
                ₹{totalPremium}
              </h3>
              <p className="text-sm text-neutral-600">Per Year</p>
            </div>
            <div className="p-2 bg-blue-50 rounded-lg">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                sa
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500">Active Policies</p>
              <h3 className="text-2xl font-bold text-neutral-800">
                {activePolicyCount}
              </h3>
              <p className="text-sm text-green-600">All Up to Date</p>
            </div>
            <div className="p-2 bg-green-50 rounded-lg">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500">Total Coverage</p>
              <h3 className="text-2xl font-bold text-neutral-800">
                ₹{coverageAmount} Cr
              </h3>
              <p className="text-sm text-neutral-600">Combined</p>
            </div>
            <div className="p-2 bg-purple-50 rounded-lg">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500">Next Due</p>
              <h3 className="text-2xl font-bold text-neutral-800">15 Mar</h3>
              <p className="text-sm text-orange-600">In 30 days</p>
            </div>
            <div className="p-2 bg-orange-50 rounded-lg">
              <svg
                className="w-6 h-6 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Policy Types Distribution --> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 bg-white p-4 rounded-lg border border-neutral-200/30">
          <h3 className="text-lg font-semibold mb-4">
            Premium Payment Schedule
          </h3>
          <PremiumScheduleChart />
        </div>
        <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
          <h3 className="text-lg font-semibold mb-4">Coverage Distribution</h3>
          {/* <PieChartPage /> */}
          <ContributionChart />
        </div>
      </div>

      {/* <!-- Insurance Policies List --> */}
      <div className="bg-white rounded-lg border border-neutral-200/30">
        <div className="p-4 border-b border-neutral-200/30 flex justify-between items-center">
          <h3 className="text-lg font-semibold">Active Insurance Policies</h3>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus /> Add Policy
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="gradient-subTitle pb-3 text-2xl">
                  Add Your Policy Here.
                </DialogTitle>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                  {/* Policy Name */}
                  <div className="flex items-center">
                    <Label
                      htmlFor="policyName"
                      className="text-sm font-medium w-1/3"
                    >
                      Policy Name
                    </Label>
                    <Input
                      id="policyName"
                      {...register("policyName")}
                      placeholder="Enter Policy Name"
                      className="w-2/3"
                    />
                    {errors.policyName && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.policyName.message}
                      </p>
                    )}
                  </div>

                  {/* Policy Id */}
                  <div className="flex items-center">
                    <Label
                      htmlFor="policyId"
                      className="text-sm font-medium w-1/3"
                    >
                      Policy Number
                    </Label>
                    <Input
                      id="policyId"
                      {...register("policyId")}
                      placeholder="Enter Policy Number"
                      className="w-2/3"
                    />
                  </div>

                  {/* Policy Type */}
                  <div className="flex items-center">
                    <Label
                      htmlFor="policyType"
                      className="text-sm font-medium w-1/3"
                    >
                      Policy Type
                    </Label>
                    <Controller
                      name="policyType"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Select
                            value={field.value}
                            onValueChange={(value) => field.onChange(value)}
                          >
                            <SelectTrigger className="w-2/3">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="TERM_LIFE">
                                Term Life
                              </SelectItem>
                              <SelectItem value="HEALTH">Health</SelectItem>
                              <SelectItem value="HOME">Home</SelectItem>
                              <SelectItem value="AUTO">Auto</SelectItem>
                              <SelectItem value="TRAVEL">Travel</SelectItem>
                              <SelectItem value="OTHER">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          {error && (
                            <p className="text-red-500">{error.message}</p>
                          )}
                        </>
                      )}
                    />
                  </div>

                  {/* Policy premium */}
                  <div className="flex items-center">
                    <Label
                      htmlFor="premium"
                      className="text-sm font-medium w-1/3"
                    >
                      Policy Premium Amount
                    </Label>
                    <Input
                      id="premium"
                      type="number"
                      {...register("premium")}
                      placeholder="Enter Policy Premium"
                      className="w-2/3"
                    />
                    {errors.premium && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.premium.message}
                      </p>
                    )}
                  </div>

                  {/* Policy premiumFrequency */}
                  <div className="flex items-center">
                    <Label
                      htmlFor="premiumFrequency"
                      className="text-sm font-medium w-1/3"
                    >
                      Premium Frequency
                    </Label>
                    <Controller
                      name="premiumFrequency"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Select
                            value={field.value}
                            onValueChange={(value) => field.onChange(value)}
                          >
                            <SelectTrigger className="w-2/3">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="MONTHLY">Monthly</SelectItem>
                              <SelectItem value="QUARTERLY">
                                Quarterly
                              </SelectItem>
                              <SelectItem value="YEARLY">Yearly</SelectItem>
                              <SelectItem value="ONE_TIME">One Time</SelectItem>
                            </SelectContent>
                          </Select>
                          {error && (
                            <p className="text-red-500">{error.message}</p>
                          )}
                        </>
                      )}
                    />
                  </div>

                  {/* Policy coverageAmount */}
                  <div className="flex items-center">
                    <Label
                      htmlFor="coverageAmount"
                      className="text-sm font-medium w-1/3"
                    >
                      Coverage Amount
                    </Label>
                    <div className="flex items-center gap-2 w-2/3">
                      <Input
                        id="coverageAmount"
                        type="number"
                        {...register("coverageAmount")}
                        placeholder="Enter Amount"
                        className="flex-1"
                      />
                      <Controller
                        name="coverageAmtIn"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                          <>
                            <Select
                              value={field.value}
                              onValueChange={(value) => field.onChange(value)}
                            >
                              <SelectTrigger className="w-24">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="L">L</SelectItem>
                                <SelectItem value="CR">CR</SelectItem>
                              </SelectContent>
                            </Select>
                            {error && (
                              <p className="text-red-500">{error.message}</p>
                            )}
                          </>
                        )}
                      />
                    </div>
                    {errors.coverageAmount && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.coverageAmount.message}
                      </p>
                    )}
                  </div>

                  {/* Policy policyStartDate */}
                  <div className="flex items-center">
                    <Label
                      htmlFor="policyStartDate"
                      className="text-sm font-medium w-1/3"
                    >
                      Policy Start Date
                    </Label>
                    <Input
                      id="policyStartDate"
                      type="date"
                      {...register("policyStartDate")}
                      className="w-2/3"
                    />
                    {errors.policyStartDate && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.policyStartDate.message}
                      </p>
                    )}
                  </div>

                  {/* Policy policyExpireDate */}
                  <div className="flex items-center">
                    <Label
                      htmlFor="policyExpireDate"
                      className="text-sm font-medium w-1/3"
                    >
                      Policy Expiry Date
                    </Label>
                    <Input
                      id="policyExpireDate"
                      type="date"
                      {...register("policyExpireDate")}
                      className="w-2/3"
                    />
                    {errors.policyExpireDate && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.policyExpireDate.message}
                      </p>
                    )}
                  </div>

                  {/* Policy nextDueDate */}
                  <div className="flex items-center">
                    <Label
                      htmlFor="nextDueDate"
                      className="text-sm font-medium w-1/3"
                    >
                      Next Due Date
                    </Label>
                    <Input
                      id="nextDueDate"
                      type="date"
                      {...register("nextDueDate")}
                      className="w-2/3"
                    />
                    {errors.nextDueDate && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.nextDueDate.message}
                      </p>
                    )}
                  </div>

                  {/* Policy policyStatus */}
                  <div className="flex items-center">
                    <Label
                      htmlFor="policyStatus"
                      className="text-sm font-medium w-1/3"
                    >
                      Policy Status
                    </Label>
                    <Controller
                      name="policyStatus"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Select
                            value={field.value}
                            onValueChange={(value) => field.onChange(value)}
                          >
                            <SelectTrigger className="w-2/3">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ACTIVE">Active</SelectItem>
                              <SelectItem value="PENDING">Pending</SelectItem>
                              <SelectItem value="EXPIRED">Expired</SelectItem>
                            </SelectContent>
                          </Select>
                          {error && (
                            <p className="text-red-500">{error.message}</p>
                          )}
                        </>
                      )}
                    />
                  </div>

                  {/* Policy Button */}
                  <div className="space-x-3 pt-4">
                    <Button type="submit">Submit</Button>
                    <Button type="button">Cancel</Button>
                  </div>
                </form>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        {/* Active Insurance Policies */}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-neutral-50">
              <tr>
                {policyTableHead.map((header) => (
                  <th
                    key={header}
                    className="px-4 py-3 text-left text-sm font-medium text-neutral-500"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <Suspense
              fallback={
                <BarLoader className="mt-4" width={"100%"} color="#9333ea" />
              }
            >
              <tbody className="divide-y divide-neutral-200/30">
                {insuranceData.length > 0 ? (
                  insuranceData.map((policy) => (
                    <tr key={policy.id}>
                      <td className="px-4 py-3">
                        <div>
                          <p className="text-sm font-medium text-neutral-800">
                            {policy.policyName}
                          </p>
                          <p className="text-xs text-neutral-500">
                            Policy #{policy.policyId}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={clsx(
                            policyTypeColors[policy.policyType] ||
                              "bg-gray-50 text-gray-500",
                            "tagColor"
                          )}
                        >
                          {policy.policyType
                            .toLowerCase()
                            .replace(/^\w/, (char) => char.toUpperCase())}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-sm font-medium text-neutral-800">
                          ₹{policy.premium}
                        </p>
                        <p className="text-xs text-neutral-500">Yearly</p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-sm font-medium text-neutral-800">
                          ₹{policy.coverageAmount} {policy.coverageAmtIn}
                        </p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-sm font-medium text-neutral-800">
                          {new Date(policy.nextDueDate).toDateString()}
                        </p>
                        <p className="text-xs text-orange-600">
                          In {policy.daysDiff} days
                        </p>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={clsx(
                            policyStatusColors[policy.policyStatus] ||
                              "bg-gray-50 text-gray-500",
                            "tagColor"
                          )}
                        >
                          {policy.policyStatus
                            .toLowerCase()
                            .replace(/^\w/, (char) => char.toUpperCase())}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </button>
                          <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="text-center p-2 bg-gray-200">
                      No Data
                    </td>
                  </tr>
                )}
              </tbody>
            </Suspense>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
