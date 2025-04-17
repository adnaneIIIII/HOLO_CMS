import React from "react";
import { SidebarDemo } from "./_components/Sidebardemo";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default async function MarketingLayout({ children }: Props) {
  const user = await currentUser();

  // If the user is not signed in, send them to Clerk's sign-in page
  if (!user) {
    redirect("/sign-in");
  }

  // Check if the email is "adnane@gmail.com"
  if (user.emailAddresses[0].emailAddress !== "adnane.elotmani@usmba.ac.ma") {
    redirect("/");
  }
  const username = user.firstName;
  return (
    
      <SidebarDemo username={username}>{children}</SidebarDemo>

  );
}
