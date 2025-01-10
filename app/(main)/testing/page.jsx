"use client";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { addPolicySchema } from "@/app/lib/Schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TestingPage = () => {
  const {
    register,
    control,
    formState: { errors },
    reset,
    handleSubmit,
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

  const onSubmit = (data) => {
    console.log("form data:-", data);
  };
  return (
    <div className="bg-white p-5">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        {/* Policy Name */}
        <div className="flex items-center">
          <Label htmlFor="policyName" className="text-sm font-medium w-1/3">
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
          <Label htmlFor="policyId" className="text-sm font-medium w-1/3">
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
          <Label htmlFor="policyType" className="text-sm font-medium w-1/3">
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
                    <SelectItem value="TERM_LIFE">Term Life</SelectItem>
                    <SelectItem value="HEALTH">Health</SelectItem>
                    <SelectItem value="HOME">Home</SelectItem>
                    <SelectItem value="AUTO">Auto</SelectItem>
                    <SelectItem value="TRAVEL">Travel</SelectItem>
                    <SelectItem value="OTHER">Other</SelectItem>
                  </SelectContent>
                </Select>
                {error && <p className="text-red-500">{error.message}</p>}
              </>
            )}
          />
        </div>

        {/* Policy premium */}
        <div className="flex items-center">
          <Label htmlFor="premium" className="text-sm font-medium w-1/3">
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
                    <SelectItem value="QUARTERLY">Quarterly</SelectItem>
                    <SelectItem value="YEARLY">Yearly</SelectItem>
                    <SelectItem value="ONE_TIME">One Time</SelectItem>
                  </SelectContent>
                </Select>
                {error && <p className="text-red-500">{error.message}</p>}
              </>
            )}
          />
        </div>

        {/* Policy coverageAmount */}
        <div className="flex items-center">
          <Label htmlFor="coverageAmount" className="text-sm font-medium w-1/3">
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
                  {error && <p className="text-red-500">{error.message}</p>}
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
          <Label htmlFor="nextDueDate" className="text-sm font-medium w-1/3">
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
          <Label htmlFor="policyStatus" className="text-sm font-medium w-1/3">
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
                {error && <p className="text-red-500">{error.message}</p>}
              </>
            )}
          />
        </div>

        {/* Policy Button */}
        <div>
          <Button type="submit">Submit</Button>
          <Button type="button">Cancel</Button>
        </div>
      </form>
    </div>
  );
};

export default TestingPage;
