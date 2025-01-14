import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import useFetch from "@/hooks/use-fetch";
import { toast } from "sonner";
import { addTransactionSchema } from "@/app/lib/Schema";
import { transactionCategorys } from "@/data/TransactionCategories";
import { addTransaction } from "@/actions/transactions";

const AddInvestmentTrans = ({ children }) => {
  const transactionStatus = ["Completed", "Pending"];
  const transactionType = ["Investment"];

  const {
    register,
    reset,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(addTransactionSchema),
    defaultValues: {
      type: "",
      category: "",
      amount: 0,
      date: null,
      status: "",
      description: "",
    },
  });

  const date = watch("date");
  const type = watch("type");

  const filteredCategories = transactionCategorys.filter(
    (category) => category.type === type
  );

  const {
    apiRes,
    apiFun: createTransactionFn,
    loading,
    error,
  } = useFetch(addTransaction);

  const onSubmit = async (data) => {
    try {
      const response = await createTransactionFn(data);
      console.log("Backed response:-", response);
      console.log("my bcak res:-", apiRes);
      if (response.success) {
        toast.success("Transaction added successfully.");
        handleReset();
      } else {
        toast.error(`Failed to add transaction: ${response.message}`);
      }
    } catch (err) {
      console.error("Error adding transaction:", err);
    }
  };

  const handleReset = () => {
    reset({
      type: "",
      category: "",
      amount: "",
      date: null,
      status: "",
      descriptions: "",
    });
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="gradient-subTitle text-2xl">
              Add Investment..
            </DialogTitle>
            <DialogDescription>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-wrap gap-4 items-center"
              >
                {/* Transaction Type */}
                <Select onValueChange={(value) => setValue("type", value)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {transactionType.map((type) => (
                      <SelectItem value={type} key={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.type && (
                  <p className="text-sm text-red-500">{errors.type.message}</p>
                )}

                {/* Transaction Category */}
                <Select onValueChange={(value) => setValue("category", value)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredCategories.length > 0 ? (
                      filteredCategories.map((category, i) => (
                        <SelectItem value={category.name} key={i}>
                          {category.name}
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem disabled>No categories available</SelectItem>
                    )}
                  </SelectContent>
                </Select>
                {errors.category && (
                  <p className="text-sm text-red-500">
                    {errors.category.message}
                  </p>
                )}

                {/* Amount */}
                <Input
                  {...register("amount")}
                  type="number"
                  className="w-60"
                  placeholder="Amount $0.00"
                />
                {errors.amount && (
                  <p className="text-sm text-red-500">
                    {errors.amount.message}
                  </p>
                )}

                {/* Date Picker */}
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
                      onSelect={(date) => setValue("date", date)}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                      className="rounded-md border"
                    />
                  </PopoverContent>
                </Popover>
                {errors.date && (
                  <p className="text-sm text-red-500">{errors.date.message}</p>
                )}

                {/* Transaction Status */}
                <Select onValueChange={(value) => setValue("status", value)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {transactionStatus.map((status) => (
                      <SelectItem value={status} key={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.status && (
                  <p className="text-sm text-red-500">
                    {errors.status.message}
                  </p>
                )}

                {/* Descriptions */}
                <Input
                  {...register("description")}
                  type="text"
                  placeholder="Short description..."
                  className="w-60"
                />
                {errors.description && (
                  <p className="text-sm text-red-500">
                    {errors.description.message}
                  </p>
                )}

                {/* Actions */}
                <div className="flex gap-2">
                  <Button type="submit" disabled={isSubmitting || loading}>
                    {loading ? "Submitting..." : "Submit"}
                  </Button>
                  <Button
                    type="button"
                    onClick={handleReset}
                    variant="secondary"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddInvestmentTrans;
