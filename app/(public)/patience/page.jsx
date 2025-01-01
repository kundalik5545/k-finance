import { Button } from "@/components/ui/button";
import { Construction, LoaderCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const PageUnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
      <h1 className="text-6xl font-bold gradient-title mb-4">
        Page Under Construction
      </h1>
      <h2 className="text-2xl font-semibold mb-4">
        We are building something amazing!
      </h2>
      <p className="text-gray-600 mb-8">
        This page is currently under construction. Please check back soon for
        updates or return to our Services page for other content.
      </p>
      <Link href="/services">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white animate-bounce">
          Check Our Other Services
        </Button>
      </Link>
    </div>
  );
};

export default PageUnderConstruction;
