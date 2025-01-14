import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { addPolicySchema } from "@/app/lib/Schema";
import DialogForForm from "@/components/dialogForForm";
import { Label } from "@/components/ui/label";

export default function AddPolicyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(addPolicySchema),
    defaultValues: {
      name: "",
      policyId: "",
      type: "",
      premium: "",
      premiumType: "Yearly",
      coverage: "",
      coverageType: "Cr",
      nextDueDate: "",
      status: "Active",
    },
  });

  const dialogFormTitle = "Add Emergency Contacts";
  const dialogFormTrigger = <Button type="button">Add Policy</Button>;

  const onSubmit = (data) => {
    reset(); // Reset the form after submission
  };

  const PolicyTypeEnum = [
    { value: "TERM_LIFE", label: "Term Life" },
    { value: "HEALTH", label: "Health" },
    { value: "AUTO", label: "Auto" },
    { value: "HOME", label: "Home" },
  ];

  return (
    <DialogForForm
      dialogFormTitle={dialogFormTitle}
      dialogFormTrigger={dialogFormTrigger}
    >
      <div className="p-6 bg-white rounded-lg border border-neutral-200/30">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label className="block text-sm font-medium text-neutral-500 mb-1">
              Policy Name
            </Label>
            <Input
              type="text"
              placeholder="Enter policy name"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Label className="block text-sm font-medium text-neutral-500 mb-1">
              Policy ID
            </Label>
            <Input
              type="text"
              placeholder="Enter policy ID"
              {...register("policyId")}
            />
            {errors.policyId && (
              <p className="text-red-600 text-sm mt-1">
                {errors.policyId.message}
              </p>
            )}
          </div>
          <div>
            <Label
              htmlFor="type"
              className="block text-sm font-medium text-neutral-500 mb-1"
            >
              Policy Type
            </Label>

            <Select
              id="type"
              {...register("type", { required: "Policy type is required" })}
              className="block w-full border border-neutral-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            ></Select>
            {errors.type && (
              <p className="text-red-600 text-sm mt-1">{errors.type.message}</p>
            )}
          </div>
          <div>
            <Label className="block text-sm font-medium text-neutral-500 mb-1">
              Premium Amount
            </Label>
            <Input
              type="number"
              placeholder="Enter premium amount"
              {...register("premium", { valueAsNumber: true })}
            />
            {errors.premium && (
              <p className="text-red-600 text-sm mt-1">
                {errors.premium.message}
              </p>
            )}
          </div>
          <div>
            <Label className="block text-sm font-medium text-neutral-500 mb-1">
              Premium Type
            </Label>
            <Select {...register("premiumType")}>
              <option value="Yearly">Yearly</option>
              <option value="Monthly">Monthly</option>
            </Select>
            {errors.premiumType && (
              <p className="text-red-600 text-sm mt-1">
                {errors.premiumType.message}
              </p>
            )}
          </div>
          <div>
            <Label className="block text-sm font-medium text-neutral-500 mb-1">
              Coverage Amount
            </Label>
            <Input
              type="number"
              placeholder="Enter coverage amount"
              {...register("coverage", { valueAsNumber: true })}
            />
            {errors.coverage && (
              <p className="text-red-600 text-sm mt-1">
                {errors.coverage.message}
              </p>
            )}
          </div>
          <div>
            <Label className="block text-sm font-medium text-neutral-500 mb-1">
              Coverage Type
            </Label>
            <Select {...register("coverageType")}>
              <option value="Cr">Cr</option>
              <option value="L">L</option>
            </Select>
            {errors.coverageType && (
              <p className="text-red-600 text-sm mt-1">
                {errors.coverageType.message}
              </p>
            )}
          </div>
          <div>
            <Label className="block text-sm font-medium text-neutral-500 mb-1">
              Next Due Date
            </Label>
            <Input type="date" {...register("nextDueDate")} />
            {errors.nextDueDate && (
              <p className="text-red-600 text-sm mt-1">
                {errors.nextDueDate.message}
              </p>
            )}
          </div>
          <div>
            <Label className="block text-sm font-medium text-neutral-500 mb-1">
              Status
            </Label>
            <Select {...register("status")}>
              <option value="Active">Active</option>
              <option value="Expired">Expired</option>
            </Select>
            {errors.status && (
              <p className="text-red-600 text-sm mt-1">
                {errors.status.message}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full bg-blue-600 text-white">
            Submit
          </Button>
        </form>
      </div>
    </DialogForForm>
  );
}
