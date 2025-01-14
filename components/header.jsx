import WebsiteName from "@/app/(navbar)/websiteName";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { privateNavlinks, publicNavlinks } from "@/data/NavBarData";
import { checkUser } from "@/lib/checkUser";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IndianRupee, Menu, Pen } from "lucide-react";
import { AddExpenseForm } from "@/app/(main)/expense/_componets/AddExpenseForm";

const HeaderBar = async () => {
  const websiteName = process.env.NEXT_PUBLIC_WEBSITENAME;
  await checkUser();
  return (
    <div className="fixed top-0 border-b z-50 bg-white/80 backdrop-blur-md w-full ">
      <nav className="flex justify-between px-4 py-4 ">
        <div className="logo">
          <WebsiteName />
        </div>
        <div
          className="Menu-section flex items-center
         justify-between space-x-3"
        >
          <div className="">
            <AddExpenseForm>
              <Button>
                <Pen size={15} />
                Create Expense
              </Button>
            </AddExpenseForm>
          </div>
          <div className="app-search relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 px-4 py-2 text-sm border border-neutral-200/30 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <svg
              className="absolute right-3 top-2.5 w-5 h-5 text-neutral-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2px"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                stroke="#A3A3A3"
                fill="none"
              ></path>
            </svg>
          </div>

          <div className="app-notification">
            <button
              type="button"
              className="p-2 text-neutral-600 hover:bg-neutral-100 rounded-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2px"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  stroke="#525252"
                  fill="none"
                ></path>
              </svg>
            </button>
          </div>

          <div className="app-settings">
            <button
              type="button"
              className="p-2 text-neutral-600 hover:bg-neutral-100 rounded-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2px"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  stroke="#525252"
                  fill="none"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2px"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  stroke="#525252"
                  fill="none"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        {/* <div className="desktop-menu hidden md:flex items-center space-x-4">
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
        </div> */}
      </nav>
    </div>
  );
};

export default HeaderBar;
