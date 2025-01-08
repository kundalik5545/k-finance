"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { useState } from "react";
import clsx from "clsx";
import { dashboardNavlinks } from "@/data/NavBarData";
import { Button } from "./ui/button";

export function AppSidebar() {
  const { user, isLoaded, isSignedIn } = useUser();
  const [activeUrl, setActiveUrl] = useState("/dashboard");

  return (
    <Sidebar className="mx-auto container bg-gray-100 h-screen">
      {/* Sidebar Content */}

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="pt-14">
            <SignedIn>
              <SidebarMenu className="p-3 space-y-3 font-medium pt-10">
                {dashboardNavlinks.map((link) => (
                  <SidebarMenuItem key={link.linkText} className="list-none">
                    <SidebarMenuButton asChild>
                      <a
                        href={link.url}
                        onClick={() => setActiveUrl(link.url)}
                        className={clsx(
                          "flex items-center gap-3 px-4 py-2 rounded-md transition-all hover:bg-gray-200",
                          activeUrl === link.url && "bg-blue-100"
                        )}
                      >
                        <span className="w-7 h-7">{link.icon}</span>

                        <span className="text-sm font-semibold">
                          {link.linkText}
                        </span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SignedIn>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Separator */}
      <SidebarSeparator className="border-t border-gray-300" />

      {/* Sidebar Footer */}
      <SidebarFooter className="">
        <div className="">
          {/* Signed-Out State */}
          <SignedOut>
            <div className="flex gap-3 items-center justify-center">
              <SignInButton forceRedirectUrl="/dashboard">
                <Button variant="default">Login</Button>
              </SignInButton>
              <SignUpButton>
                <Button variant="default">Sign Up</Button>
              </SignUpButton>
            </div>
          </SignedOut>

          {/* Signed-In State */}
          <SignedIn>
            <div className="flex items-center gap-3">
              {/* User Avatar */}
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10", // Avatar size
                  },
                }}
              />
              {/* User Info */}
              <div className="w-40 max-w-xs">
                {isSignedIn && isLoaded ? (
                  <>
                    <span className="text-sm font-semibold">
                      {user.fullName || "User"}
                    </span>
                    <br />
                    <span className="text-xs text-gray-600 truncate overflow-hidden text-overflow-ellipsis">
                      {user.primaryEmailAddress?.emailAddress || "No email"}
                    </span>
                  </>
                ) : (
                  <>Loading...</>
                )}
              </div>
            </div>
          </SignedIn>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
