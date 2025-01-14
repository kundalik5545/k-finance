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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { addEFormSchema, addExpenseSchema } from "@/app/lib/Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ExpenseCategory } from "@/data/ExpenseCategory";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import useFetch from "@/hooks/use-fetch";
import { addExpense } from "@/actions/expense";

const AddEForm = ({ children }) => {
  const [open, setOpen] = useState(false);
  const {
    register,
    reset,
    setValue,
    getValues,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addEFormSchema),
    defaultValues: {
      category: "",
      type: "",
      amount: 0,
      date: null,
      status: "",
      description: "",
      isRecurring: false,
      recurringStartDate: new Date(),
      recurringEndDate: new Date(),
      recurringInterval: "Day",
    },
  });

  const category = watch("category");
  const date = watch("date");
  const isRecurring = watch("isRecurring");

  const {
    apiFun: createExpenseFn,
    apiRes: addExpenseRes,
    loading: creatingExpenseLoading,
    error,
  } = useFetch(addExpense);

  const onSubmit = async (data) => {
    if (isRecurring) {
      const response = await createExpenseFn(data);
    } else {
      const filteredData = {
        ...data,
        isRecurring: false,
        recurringStartDate: null,
        recurringEndDate: null,
        recurringInterval: null,
      };
      const response = await createExpenseFn(filteredData);
    }
  };

  const handleReset = () => {
    reset();
  };
  return (
    <div>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="gradient-subTitle text-2xl">
              Add New Expense.
            </DrawerTitle>
            <DrawerDescription>
              <div className="px-4 pb-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Category */}
                  <div className="flex items-center space-y-2">
                    <Label htmlFor="category" className="w-1/2">
                      Category
                    </Label>{" "}
                    <div className="w-full">
                      <Select
                        onValueChange={(value) => setValue("category", value)}
                        defaultValue={watch("category")}
                      >
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                          {ExpenseCategory.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.category && (
                        <p className="text-sm text-red-500">
                          {errors.category.message}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* Type */}
                  <div className="flex items-center space-y-2">
                    <Label htmlFor="type" className="w-1/2">
                      Sub Category Type
                    </Label>
                    <div className="w-full">
                      <Select
                        onValueChange={(value) => setValue("type", value)}
                        defaultValue={watch("type")}
                      >
                        <SelectTrigger id="type">
                          <SelectValue placeholder="Select Sub Type" />
                        </SelectTrigger>
                        <SelectContent>
                          {category &&
                            ExpenseCategory.find(
                              (cat) => cat.id === category
                            )?.subcategories?.map((subcategory) => (
                              <SelectItem key={subcategory} value={subcategory}>
                                {subcategory}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                      {errors.type && (
                        <p className="text-sm text-red-500 my-1">
                          {errors.type.message}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* Amount */}
                  <div className="flex items-center space-y-2">
                    <Label htmlFor="amount" className="w-1/2">
                      Expense Amount
                    </Label>
                    <div className="w-full">
                      <Input
                        id="amount"
                        type="number"
                        step="1"
                        placeholder="0.00"
                        {...register("amount", {
                          valueAsNumber: true,
                        })}
                      />
                      {errors.amount && (
                        <p className="text-sm text-red-500">
                          {errors.amount.message}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* Date */}
                  <div className="space-x-12 space-y-2">
                    <Label htmlFor="date" className="w-1/2">
                      Expense Date
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-[150px] pl-3 text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          {date ? format(date, "PP") : <span>Pick a date</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-white rounded-md shadow-lg">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={(selectedDate) =>
                            setValue("date", selectedDate)
                          }
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  {/* Status */}
                  <div className="flex items-center space-y-2">
                    <Label htmlFor="status" className="w-1/2">
                      Expense Status
                    </Label>
                    <div className="w-full">
                      <Select
                        onValueChange={(value) => setValue("status", value)}
                        defaultValue={watch("status")}
                      >
                        <SelectTrigger id="status">
                          <SelectValue placeholder="Select Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Completed">Completed</SelectItem>
                          <SelectItem value="Pending">Pending</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.status && (
                        <p className="text-sm text-red-500">
                          {errors.status.message}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* Short Description */}
                  <div className="flex items-center space-y-2">
                    <Label htmlFor="description" className="w-1/2">
                      Short Description
                    </Label>
                    <Input
                      id="description"
                      type="text"
                      placeholder="Short description..."
                      {...register("description")}
                    />
                  </div>
                  {/* Is reccuring */}
                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <div className="space-y-0.5">
                      <Label htmlFor="isRecurring">Is Recurring</Label>
                      <p className="text-sm text-muted-foreground">
                        Set this expense as recurring
                      </p>
                    </div>
                    <Switch
                      id="isRecurring"
                      checked={watch("isRecurring")}
                      onCheckedChange={(checked) =>
                        setValue("isRecurring", checked)
                      }
                    />
                  </div>
                  {isRecurring && (
                    <>
                      {/* Recurring Start Date */}
                      <div className="space-x-2 space-y-2">
                        <Label htmlFor="recurringStartDate">
                          Recurring Start Date
                        </Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-[150px] pl-3 text-left font-normal",
                                !watch("recurringStartDate") &&
                                  "text-muted-foreground"
                              )}
                            >
                              {watch("recurringStartDate") ? (
                                format(watch("recurringStartDate"), "PP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-white rounded-md shadow-lg">
                            <Calendar
                              mode="single"
                              selected={watch("recurringStartDate")}
                              onSelect={(date) =>
                                setValue("recurringStartDate", date)
                              }
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("1900-01-01")
                              }
                              initialFocus
                              className="rounded-md border"
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      {/* Recurring End Date */}
                      <div className="space-x-2 space-y-2">
                        <Label htmlFor="recurringEndDate">
                          Recurring End Date
                        </Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-[150px] pl-3 text-left font-normal",
                                !watch("recurringEndDate") &&
                                  "text-muted-foreground"
                              )}
                            >
                              {watch("recurringEndDate") ? (
                                format(watch("recurringEndDate"), "PP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-white rounded-md shadow-lg">
                            <Calendar
                              mode="single"
                              selected={watch("recurringEndDate")}
                              onSelect={(date) =>
                                setValue("recurringEndDate", date)
                              }
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("1900-01-01")
                              }
                              initialFocus
                              className="rounded-md border"
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      {/* Recurring Interval */}
                      <div className="flex items-center space-y-2">
                        <Label htmlFor="recurringInterval" className="w-1/2">
                          Recurring Interval
                        </Label>
                        <Select
                          onValueChange={(value) =>
                            setValue("recurringInterval", value)
                          }
                          defaultValue={getValues("recurringInterval")}
                        >
                          <SelectTrigger id="recurringInterval">
                            <SelectValue placeholder="Select Interval" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Day">Daily</SelectItem>
                            <SelectItem value="Week">Weekly</SelectItem>
                            <SelectItem value="Month">Monthly</SelectItem>
                            <SelectItem value="Year">Yearly</SelectItem>
                          </SelectContent>
                        </Select>
                        {/* {errors.recurringInterval && (
                          <p className="text-sm text-red-500">
                            {errors.recurringInterval.message}
                          </p>
                        )} */}
                      </div>
                    </>
                  )}
                  {/* Btn */}
                  <div className="space-y-2">
                    <Button type="submit">Add Expense</Button>
                    <Button type="reset" onClick={() => handleReset()}>
                      reset
                    </Button>
                  </div>
                </form>
              </div>
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default AddEForm;
