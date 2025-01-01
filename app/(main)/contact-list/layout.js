import React, { Suspense } from "react";
import { BarLoader } from "react-spinners";

const ContactListLayout = ({ children }) => {
  return (
    <div className="p-5 md:p-0 overflow-hidden">
      <h2 className="text-4xl font-bold gradient-title mb-5">
        Emergency Contact List
      </h2>

      {/* Dashboard Page */}
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        {children}
      </Suspense>
    </div>
  );
};

export default ContactListLayout;
