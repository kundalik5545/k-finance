"use client";

import React, { useEffect, useState } from "react";
import { BadgePlus, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { contactListSchema } from "@/app/lib/Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import DrawerForForm from "@/components/drawerForm";
import { Label } from "@/components/ui/label";
import DialogForForm from "@/components/dialogForForm";
import { createNewContact, getContacts } from "@/actions/contactList";

const ContactList = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mobileDevice, setMobileDevice] = useState();
  const [contacts, setContacts] = useState([]);

  //Screen size check
  useEffect(() => {
    const updateDeviceType = () => {
      setMobileDevice(window.innerWidth <= 500);
    };

    // Initial check
    updateDeviceType();

    // Add event listener
    window.addEventListener("resize", updateDeviceType);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", updateDeviceType);
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactListSchema),
    defaultValues: { contactName: "", contactPhone: "", contactEmail: "" },
  });

  // Fetch contacts from the backend
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setLoading(true);
        const response = await getContacts();
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await createNewContact(data);
      if (response.success) {
        toast.success(response.message);
        reset();
        setFormOpen(false);
        try {
          const response = await getContacts();
          setContacts(response.data);
        } catch (error) {
          console.error("Error fetching contacts:", error);
        } finally {
          setLoading(false);
        }
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Failed to create contact");
      console.error("Error:", error);
    }
  };

  const drawerFormTitle = "Add Emergency Contacts";
  const drawerFormTrigger = <Button>Add Contact</Button>;
  const dialogFormTitle = "Add Emergency Contacts";
  const dialogFormTrigger = <Button>Add Contact</Button>;

  return (
    <div className="max-w-6xl mx-auto text-gray-800">
      <div>
        {mobileDevice ? (
          <DrawerForForm
            drawerFormTitle={drawerFormTitle}
            drawerFormTrigger={drawerFormTrigger}
            formOpen={formOpen}
            setFormOpen={setFormOpen}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="container mx-auto p-3 space-y-4"
            >
              <InputSection
                register={register}
                errors={errors}
                reset={reset}
                loading={loading}
              />
            </form>
          </DrawerForForm>
        ) : (
          <DialogForForm
            dialogFormTitle={dialogFormTitle}
            dialogFormTrigger={dialogFormTrigger}
            formOpen={formOpen}
            setFormOpen={setFormOpen}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="container mx-auto space-y-4"
            >
              <InputSection
                register={register}
                errors={errors}
                reset={reset}
                loading={loading}
              />
            </form>
          </DialogForForm>
        )}
      </div>

      {/* Result Table */}
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          contacts.map((contact, i) => (
            <p key={i}>
              {contact.contactName} - {contact.contactPhone}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

const InputSection = ({ register, errors, reset, loading }) => (
  <>
    <div className="contact-name">
      <Label htmlFor="contactName">Enter Contact Name</Label>
      <Input {...register("contactName")} placeholder="Enter Name" />
      {errors.contactName && (
        <p className="text-sm text-red-500">{errors.contactName.message}</p>
      )}
    </div>
    <div className="contact-phone">
      <Label htmlFor="contactPhone">Enter Contact Phone</Label>
      <Input
        {...register("contactPhone")}
        placeholder="Enter Phone"
        maxLength={10}
      />
      {errors.contactPhone && (
        <p className="text-sm text-red-500">{errors.contactPhone.message}</p>
      )}
    </div>
    <div className="contact-email">
      <Label htmlFor="contactEmail">Enter Contact Email</Label>
      <Input
        {...register("contactEmail")}
        placeholder="Enter Email (optional)"
      />
      {errors.contactEmail && (
        <p className="text-sm text-red-500">{errors.contactEmail.message}</p>
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
          "Create Contact"
        )}
      </Button>
      <Button type="button" className="w-1/2" onClick={reset}>
        Reset
      </Button>
    </div>
  </>
);

export default ContactList;
