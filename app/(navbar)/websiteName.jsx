import React from "react";
import { IndianRupee } from "lucide-react";
import Link from "next/link";
const websiteName = process.env.NEXT_PUBLIC_WEBSITENAME;

function WebsiteName() {
  return (
    <div>
      <Link href="/" className="flex">
        <IndianRupee size={40} />
        <span className="self-center font-inter text-3xl font-semibold whitespace-nowrap dark:text-white ">
          {websiteName}
        </span>
      </Link>
    </div>
  );
}

export default WebsiteName;
