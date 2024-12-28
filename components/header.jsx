import WebsiteName from "@/app/(navbar)/websiteName";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { privateNavlinks, publicNavlinks } from "@/data/NavBarData";

const HeaderBar = () => {
  return (
    <div className="fixed top-0 border-b z-50 bg-white/80 backdrop-blur-md w-full flex">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="logo">
          <WebsiteName />
        </div>
        <div className="mobile-menu flex md:hidden"></div>

        <div className="desktop-menu hidden md:flex items-center space-x-4">
          <div className="menu-item">
            <div className="signIn-menu flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <SignedIn>
                {privateNavlinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    {link.linkText}
                  </Link>
                ))}
              </SignedIn>
            </div>
            <div className="signOut-menu flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <SignedOut>
                {publicNavlinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    {link.linkText}
                  </Link>
                ))}
              </SignedOut>
            </div>
          </div>

          <div className="signIn-profile">
            <SignedOut>
              <SignInButton forceRedirectUrl="/dashboard">
                <Button variant="outline">Login</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{ elements: { avatarBox: "w-10 h-10" } }}
              />
            </SignedIn>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderBar;
