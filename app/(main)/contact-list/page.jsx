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
  const formTrigger = <Button>Add Contact</Button>;
  return (
    <div>
      <div className="max-w-6xl mx-auto p-3 text-gray-800 bg-white m-3 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 text-left font-inter">
          Add New Contact
        </h2>

        <div className="hero-section max-w-3xl md:max-w-6xl">
          <DrawerForForm drawerTitle={drawerTitle} formTrigger={formTrigger}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 w-[330px] sm:w-[800px]"
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

              <div>
                <DrawerFooter className="flex flex-col gap-4 py-4">
                  <Button type="submit">
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating...
                      </>
                    ) : (
                      <>Add Contact</>
                    )}
                  </Button>
                  <Button type="button" onClick={() => reset()}>
                    Reset
                  </Button>
                  <DrawerClose className="w-full">
                    <Button variant="outline" className="w-full">
                      Cancel
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </form>
          </DrawerForForm>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
