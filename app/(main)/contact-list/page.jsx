"use client";
import React, { useEffect } from "react";
import { BadgePlus, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useFetch from "@/hooks/use-fetch";
import { createNewContact } from "@/actions/contactList";
import { useForm } from "react-hook-form";
import { contactListSchema } from "@/app/lib/Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import DrawerForForm from "@/components/drawerForm";
import { DrawerClose, DrawerFooter } from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import DialogForForm from "@/components/dialogForForm";

const ContactList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(contactListSchema),
    defaultValues: { contactName: "", contactPhone: "", contactEmail: "" },
  });

  const {
    apiRes,
    loading,
    apiFun: addContactNumFn,
    error,
  } = useFetch(createNewContact);

  useEffect(() => {
    if (apiRes && !loading) {
      toast.success("Account created successfully");
      reset();
    }
  }, [loading, apiRes]);

  useEffect(() => {
    if (error) {
      console.log(error);

      toast.error(error.message) || "Failed to create account";
    }
  }, [error]);

  const onSubmit = async (data) => {
    await addContactNumFn(data);
  };

  const drawerTitle = "Add Emergency Contacts";
  const drawerFormTrigger = <Button>Add Contact</Button>;
  const dialogFormTitle = "Add Emergency Contacts";
  const dialogFormTrigger = <Button>Add Contact</Button>;
  return (
    <div className="max-w-6xl mx-auto text-gray-800">
      {/* Contact for Desktop */}
      <div className="desktop-contact-list-form hidden md:block max-w-3xl md:max-w-6xl">
        <DialogForForm
          dialogFormTitle={dialogFormTitle}
          dialogFormTrigger={dialogFormTrigger}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="container mx-auto space-y-4"
          >
            <div className="contact-name">
              <Label
                htmlFor="contactName"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Enter Contact Name
              </Label>
              <Input
                {...register("contactName")}
                placeholder="Enter Name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              />
              {errors.contactName && (
                <p className="text-sm text-red-500">
                  {errors.contactName.message}
                </p>
              )}
            </div>
            <div className="contact-phone">
              <Label
                htmlFor="contactName"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Enter Contact Phone
              </Label>
              <Input
                {...register("contactPhone")}
                placeholder="Enter Phone"
                maxLength={10}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              />
              {errors.contactPhone && (
                <p className="text-sm text-red-500">
                  {errors.contactPhone.message}
                </p>
              )}
            </div>
            <div className="contact-email">
              <Label
                htmlFor="contactEmail"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Enter Contact Email
              </Label>
              <Input
                {...register("contactEmail")}
                placeholder="Enter Email (optional)"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              />
              {errors.contactEmail && (
                <p className="text-sm text-red-500">
                  {errors.contactEmail.message}
                </p>
              )}
            </div>

            <div className="flex justify-around gap-4">
              <Button type="submit" className="w-1/2">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>Add Contact</>
                )}
              </Button>
              <Button type="button" className="w-1/2" onClick={() => reset()}>
                Reset
              </Button>
            </div>
          </form>
        </DialogForForm>
      </div>

      {/* Contact for Mobile */}
      <div className="mobile-contact-list-form block md:hidden max-w-3xl md:max-w-6xl">
        <DrawerForForm
          drawerTitle={drawerTitle}
          drawerFormTrigger={drawerFormTrigger}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="container mx-auto p-3 space-y-4 w-[350px] sm:w-[500px] md:w-[700px] lg:w-[900px]"
          >
            <div className="contact-name">
              <Label
                htmlFor="contactName"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Enter Contact Name
              </Label>
              <Input
                {...register("contactName")}
                placeholder="Enter Name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              />
              {errors.contactName && (
                <p className="text-sm text-red-500">
                  {errors.contactName.message}
                </p>
              )}
            </div>
            <div className="contact-phone">
              <Label
                htmlFor="contactPhone"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Enter Contact Phone
              </Label>
              <Input
                {...register("contactPhone")}
                placeholder="Enter Phone"
                maxLength={10}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              />
              {errors.contactPhone && (
                <p className="text-sm text-red-500">
                  {errors.contactPhone.message}
                </p>
              )}
            </div>
            <div className="contact-email">
              <Label
                htmlFor="contactEmail"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Enter Contact Email
              </Label>
              <Input
                {...register("contactEmail")}
                placeholder="Enter Email (optional)"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              />
              {errors.contactEmail && (
                <p className="text-sm text-red-500">
                  {errors.contactEmail.message}
                </p>
              )}
            </div>

            <div className="flex justify-around gap-4">
              <Button type="submit" className="w-1/2">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>Add Contact</>
                )}
              </Button>
              <Button type="button" className="w-1/2" onClick={() => reset()}>
                Reset
              </Button>
            </div>
          </form>
        </DrawerForForm>
      </div>

      {/* Result table */}
    </div>
  );
};

export default ContactList;
