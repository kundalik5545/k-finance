import { privateMobNavlinks } from "@/data/NavBarData";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const MobileNav = () => {
  return (
    <div className="mobile-menu fixed bottom-0 w-full py-3 flex items-center justify-around z-50 shadow-md md:hidden">
      <div className="signIn-menu flex items-center gap-8 p-3 rounded-md">
        <SignedIn>
          {privateMobNavlinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="text-gray-700 transition-colors font-medium"
            >
              {link.linkText}
            </Link>
          ))}
        </SignedIn>

        <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard">
            <Button variant="outline">Login</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn className="bg-transparent">
          <UserButton appearance={{ elements: { avatarBox: "w-10 h-10" } }} />
        </SignedIn>
      </div>
    </div>
  );
};

export default MobileNav;
