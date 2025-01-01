"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";

const BasicDetails = () => {
  const { isSignedIn, isLoaded, user } = useUser();
  return (
    <div>{isLoaded ? <UserProfile user={user} /> : <>Loading.....</>}</div>
  );
};

const UserProfile = ({ user }) => (
  <>
    <div className="">
      <h2 className="gradient-subTitle text-4xl">User Basic Details</h2>
      <p>User name is:- {user.firstName}</p>
      <p>User last Name is:- {user.lastName}</p>
    </div>
  </>
);

export default BasicDetails;
