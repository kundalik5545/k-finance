"use client";
import React, { useEffect } from "react";
import {
  Instagram,
  Github,
  Facebook,
  Youtube,
  Twitter,
  Copyright,
  Briefcase,
  HandHelping,
  Scale,
  Download,
  Share2,
} from "lucide-react";
import Link from "next/link";
import ShareUs from "./ShareUs";
import {
  appDownload,
  followUs,
  getHelp,
  ourProduct,
  termsCondition,
} from "@/data/FooterData";

const Footer = () => {
  const websiteName = process.env.NEXT_PUBLIC_WEBSITENAME;
  useEffect(() => {
    const handleLinkCLick = () => {
      window.scrollTo(0, 0);
    };
    // Attach click event listener to all Link elements
    const links = document.querySelectorAll(".footer-link");
    links.forEach((link) => {
      link.addEventListener("click", handleLinkCLick);
    });

    // Cleanup the event listener when component is unmounted
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkCLick);
      });
    };
  }, []);

  return (
    <div className="container mx-auto">
      <div className="footer-links grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 ">
        {/* Our Product */}
        <div>
          <h2 className="flex justify-center md:justify-start items-center space-x-2 md:space-x-1 mb-6 text-xl font-semibold">
            <Briefcase />
            <span className="text-center">Explore Products</span>
          </h2>
          <ul className="text-base flex flex-col items-start text-white">
            {ourProduct.map((link, i) => (
              <li className="mb-4" key={i}>
                <Link
                  href={link.href}
                  key={i}
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  {link.linkText}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Terms and Conditions */}
        <div className="">
          <div>
            <h2 className="flex items-center space-x-1 mb-6 text-xl font-semibold">
              <Scale />
              <span>Terms and Conditions</span>
            </h2>
            <ul>
              {termsCondition.map((link, i) => (
                <li className="mb-4" key={i}>
                  <Link
                    href={link.href}
                    key={i}
                    className={({ isActive }) =>
                      isActive
                        ? "footer-link hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                        : "footer-link hover:underline hover:text-blue-400"
                    }
                  >
                    {link.linkText}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Help */}
          <div>
            <h2 className="flex items-center space-x-1 mb-6 text-xl font-semibold pt-6">
              <HandHelping /> <span>Get Help</span>
            </h2>
            <ul>
              {getHelp.map((link, i) => (
                <li className="mb-4 text-base" key={i}>
                  <Link
                    href={link.href}
                    key={i}
                    className={({ isActive }) =>
                      isActive
                        ? "hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                        : "footer-link hover:underline hover:text-blue-400"
                    }
                  >
                    {link.linkText}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* //Follow Us */}
        <div>
          <h2 className="flex items-center space-x-1 mb-6 text-xl font-semibold">
            <Share2 />
            <span>Follow Us</span>
          </h2>
          <ul>
            {followUs.map((link, i) => (
              <li className="mb-4" key={i}>
                <Link
                  href={link.href}
                  key={i}
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  {link.linkText}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h2 className="flex items-center space-x-1 mb-6 text-xl">
            <Download />
            <span>Download App</span>
          </h2>
          <ul className="font-medium">
            {appDownload.map((link, i) => (
              <li className="mb-4" key={i}>
                <Link
                  href={link.href}
                  key={i}
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline bg-blue-400 p-2 px-3 rounded-sm"
                      : "hover:underline hover:text-blue-400"
                  }
                >
                  {link.linkText}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Copyrights */}
      <div className="copy-right px-4 py-4 bg-black flex flex-col space-y-3 md:flex md:items-center md:justify-between">
        <span className="text-base text-center flex items-center space-x-2 sm:text-center">
          <span className="flex flex-colitems-center space-x-2">
            <span>All Rights Reserved.</span>
            <span className="flex items-center">
              <Copyright size={16} />
              2024
            </span>
          </span>
          <Link href="/">{websiteName}.</Link>
        </span>
        <ShareUs />
      </div>
    </div>
  );
};

export default Footer;
