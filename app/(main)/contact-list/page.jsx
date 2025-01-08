// "use client";

// import React, { useEffect, useState } from "react";
// import { Edit, Trash2, Loader2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { useForm } from "react-hook-form";
// import { contactListSchema } from "@/app/lib/Schema";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { toast } from "sonner";
// import DrawerForForm from "@/components/drawerForm";
// import DialogForForm from "@/components/dialogForForm";
// import { createNewContact, getContacts } from "@/actions/contactList";
// import { BarLoader } from "react-spinners";

// const ContactList = () => {
//   const [formOpen, setFormOpen] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [isMobileDevice, setIsMobileDevice] = useState(false);
//   const [contacts, setContacts] = useState([]);
//   const [editContactId, setEditContactId] = useState(null);

//   // Screen size detection
//   useEffect(() => {
//     const updateDeviceType = () => {
//       setIsMobileDevice(window.innerWidth <= 500);
//     };
//     updateDeviceType();
//     window.addEventListener("resize", updateDeviceType);
//     return () => window.removeEventListener("resize", updateDeviceType);
//   }, []);

//   // Form setup with react-hook-form
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     resolver: zodResolver(contactListSchema),
//     defaultValues: {
//       contactName: "",
//       contactPhone: "",
//       contactEmail: "",
//       contactTitle: "",
//     },
//   });

//   // Fetch contacts from the backend
//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         setLoading(true);
//         const response = await getContacts();
//         setContacts(response.data);
//       } catch (error) {
//         toast.error("Failed to fetch contacts");
//         console.error("Error fetching contacts:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchContacts();
//   }, []);

//   // Handle form submission
//   const onSubmit = async (data) => {
//     try {
//       setLoading(true);
//       if (editContactId) {
//         // Update contact
//         const response = await updateContact(editContactId, data);
//         if (response.success) {
//           toast.success("Contact updated successfully");
//         } else {
//           toast.error(response.message);
//         }
//       } else {
//         // Create new contact
//         const response = await createNewContact(data);
//         if (response.success) {
//           toast.success("Contact added successfully");
//         } else {
//           toast.error(response.message);
//         }
//       }

//       reset();
//       setFormOpen(false);
//       setEditContactId(null);
//       // Refresh contact list
//       const refreshedContacts = await getContacts();
//       setContacts(refreshedContacts.data);
//     } catch (error) {
//       toast.error("Failed to save contact");
//       console.error("Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle edit
//   const handleEdit = (contact) => {
//     reset(contact); // Pre-fill the form with existing contact details
//     setEditContactId(contact.id);
//     setFormOpen(true);
//   };

//   // Handle delete
//   const handleDelete = async (id) => {
//     try {
//       setLoading(true);
//       const response = await deleteContact(id);
//       if (response.success) {
//         toast.success("Contact deleted successfully");
//         setContacts((prev) => prev.filter((contact) => contact.id !== id));
//       } else {
//         toast.error(response.message);
//       }
//     } catch (error) {
//       toast.error("Failed to delete contact");
//       console.error("Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto text-gray-800">
//       <div>
//         {isMobileDevice ? (
//           <DrawerForForm
//             drawerFormTitle="Add Emergency Contacts"
//             drawerFormTrigger={<Button>Add Contact</Button>}
//             formOpen={formOpen}
//             setFormOpen={setFormOpen}
//           >
//             <ContactForm
//               register={register}
//               handleSubmit={handleSubmit}
//               onSubmit={onSubmit}
//               errors={errors}
//               reset={reset}
//               loading={loading}
//             />
//           </DrawerForForm>
//         ) : (
//           <DialogForForm
//             dialogFormTitle="Add Emergency Contacts"
//             dialogFormTrigger={<Button>Add Contact</Button>}
//             formOpen={formOpen}
//             setFormOpen={setFormOpen}
//           >
//             <ContactForm
//               register={register}
//               handleSubmit={handleSubmit}
//               onSubmit={onSubmit}
//               errors={errors}
//               reset={reset}
//               loading={loading}
//             />
//           </DialogForForm>
//         )}
//       </div>

//       {/* Result Table */}
//       <div className="flex flex-wrap gap-5 my-4">
//         {loading ? (
//           <BarLoader className="mt-4" width="100%" color="#9333ea" />
//         ) : (
//           contacts.map((contact) => (
//             <ContactCard
//               key={contact.id}
//               contact={contact}
//               onEdit={handleEdit}
//               onDelete={handleDelete}
//               setFormOpen={setFormOpen}
//             />
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// const ContactForm = ({
//   register,
//   handleSubmit,
//   onSubmit,
//   errors,
//   reset,
//   loading,
// }) => (
//   <form
//     onSubmit={handleSubmit(onSubmit)}
//     className="container mx-auto p-3 space-y-4"
//   >
//     <InputField
//       label="Enter Contact Title"
//       id="contactTitle"
//       register={register}
//       errors={errors}
//       placeholder="ex. Doctor"
//     />
//     <InputField
//       label="Enter Contact Name"
//       id="contactName"
//       register={register}
//       errors={errors}
//       placeholder="Enter Name"
//     />
//     <InputField
//       label="Enter Contact Phone"
//       id="contactPhone"
//       register={register}
//       errors={errors}
//       placeholder="Enter Phone"
//       maxLength={10}
//     />
//     <InputField
//       label="Enter Contact Email"
//       id="contactEmail"
//       register={register}
//       errors={errors}
//       placeholder="Enter Email (optional)"
//     />
//     <div className="flex justify-around gap-4">
//       <Button type="submit" className="w-1/2">
//         {loading ? (
//           <>
//             <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//             Creating...
//           </>
//         ) : (
//           "Create Contact"
//         )}
//       </Button>
//       <Button type="button" className="w-1/2" onClick={reset}>
//         Reset
//       </Button>
//     </div>
//   </form>
// );

// const InputField = ({ label, id, register, errors, ...props }) => (
//   <div className="input-field">
//     <label htmlFor={id} className="block font-medium text-gray-700">
//       {label}
//     </label>
//     <Input {...register(id)} id={id} {...props} />
//     {errors[id] && <p className="text-sm text-red-500">{errors[id].message}</p>}
//   </div>
// );

// const ContactCard = ({ contact, setFormOpen }) => (
//   <div
//     className="flex justify-center items-center bg-gray-100 w-[325px] sm:w-[350px]"
//     id={contact.id}
//   >
//     <div className="max-w-md w-full">
//       <div className="bg-white shadow-lg rounded-lg p-5">
//         <h2 className="text-xl font-bold text-gray-800 mb-4 flex justify-between">
//           {contact.contactTitle}
//           <span className="flex gap-3">
//             <Edit id={contact.id} onClick={() => setFormOpen(true)} />
//             <Trash2 id={contact.id} />
//           </span>
//         </h2>
//         <div className="space-y-2 text-gray-600">
//           <p>
//             <span className="font-semibold text-gray-800">Name:</span>
//             <span className="pl-3">{contact.contactName}</span>
//           </p>
//           <p>
//             <span className="font-semibold text-gray-800">Email:</span>
//             <span className="pl-3 break-words text-wrap w-[250px]">
//               {contact.contactEmail}
//             </span>
//           </p>
//           <p>
//             <span className="font-semibold text-gray-800">Phone:</span>
//             <span className="pl-3">{contact.contactPhone}</span>
//           </p>
//         </div>
//         <div className="flex gap-4 mt-6">
//           <a
//             href={`tel:${contact.contactPhone}`}
//             className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow transition duration-300"
//           >
//             Call Now
//           </a>
//           <a
//             href={`mailto:${contact.contactEmail}`}
//             className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md shadow transition duration-300"
//           >
//             Email Now
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// );
// export default ContactList;

// New edition
"use client";

import React, { useEffect, useState } from "react";
import { Edit, Trash2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { contactListSchema } from "@/app/lib/Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import DrawerForForm from "@/components/drawerForm";
import DialogForForm from "@/components/dialogForForm";
import {
  createNewContact,
  getContacts,
  updateContact,
} from "@/actions/contactList";
import { BarLoader } from "react-spinners";
import { Label } from "@/components/ui/label";

const ContactList = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mobileDevice, setMobileDevice] = useState();
  const [contacts, setContacts] = useState([]);
  const [editContactId, setEditContactId] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactListSchema),
    defaultValues: {
      contactName: "",
      contactPhone: "",
      contactEmail: "",
      contactTitle: "",
    },
  });

  // Fetch contacts
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
      if (editContactId) {
        // Update contact
        const response = await updateContact(editContactId, data);
        if (response.success) {
          toast.success("Contact updated successfully");
        } else {
          toast.error(response.message);
        }
      } else {
        // Create new contact
        const response = await createNewContact(data);
        if (response.success) {
          toast.success("Contact added successfully");
        } else {
          toast.error(response.message);
        }
      }

      reset();
      setFormOpen(false);
      setEditContactId(null);
      // Refresh contact list
      const refreshedContacts = await getContacts();
      setContacts(refreshedContacts.data);
    } catch (error) {
      toast.error("Failed to save contact");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle edit
  const handleEdit = (contact) => {
    reset(contact); // Pre-fill the form with existing contact details
    setEditContactId(contact.id);
    setFormOpen(true);
  };

  // Handle delete
  const handleDelete = async (id) => {
    console.log("running handle delete:");
    try {
      setLoading(true);
      const response = await deleteContact(id);
      if (response.success) {
        toast.success("Contact deleted successfully");
        setContacts((prev) => prev.filter((contact) => contact.id !== id));
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Failed to delete contact");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto text-gray-800">
      <div>
        {mobileDevice ? (
          <DrawerForForm
            drawerFormTitle="Add/Edit Emergency Contacts"
            drawerFormTrigger={<Button>Add Contact</Button>}
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
            dialogFormTitle="Add/Edit Emergency Contacts"
            dialogFormTrigger={<Button>Add Contact</Button>}
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
      <div className="flex flex-wrap gap-5 my-4">
        {loading ? (
          <BarLoader className="mt-4" width={"100%"} color="#9333ea" />
        ) : (
          contacts.map((contact) => (
            <DisplayContacts
              key={contact.id}
              contact={contact}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

const InputSection = ({ register, errors, reset, loading }) => (
  <>
    <div className="contact-title">
      <Label htmlFor="contactTitle">Enter Contact Title</Label>
      <Input {...register("contactTitle")} placeholder="ex. Doctor" />
      {errors.contactTitle && (
        <p className="text-sm text-red-500">{errors.contactTitle.message}</p>
      )}
    </div>
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

const DisplayContacts = ({ contact, onEdit, onDelete }) => (
  <div
    className="flex justify-center items-center bg-gray-100 w-[325px] sm:w-[350px]"
    id={contact.id}
  >
    <div className="max-w-md w-full">
      <div className="bg-white shadow-lg rounded-lg p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex justify-between">
          {contact.contactTitle}
          <span className="flex gap-3">
            <Edit id={contact.id} onClick={() => onEdit(contact)} />
            <Trash2 id={contact.id} onClick={() => onDelete(contact)} />
          </span>
        </h2>
        <div className="space-y-2 text-gray-600">
          <p className="flex items-center">
            <span className="font-semibold text-gray-800">Name:</span>
            <span className="pl-3">{contact.contactName}</span>
          </p>
          <p className="flex items-start">
            <span className="font-semibold text-gray-800">Email:</span>
            <span className="pl-3 break-words text-wrap w-[250px]">
              {contact.contactEmail}
            </span>
          </p>
          <p className="flex items-center">
            <span className="font-semibold text-gray-800">Phone:</span>
            <span className="pl-3">{contact.contactPhone}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default ContactList;
