"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  SlidersVertical,
  Archive,
  Layers3,
  ShoppingCart,
  Users,
  Ticket,
  LogOut,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function AdminLinks() {
  const pathname = usePathname();
  const tabs = [
    { id: 0, icon: SlidersVertical, name: "Dashboard", link: "/admin" },
    { id: 1, icon: Archive, name: "Products", link: "/admin/products" },
    { id: 2, icon: Layers3, name: "Categories", link: "/admin/categories" },
    { id: 3, icon: ShoppingCart, name: "Orders", link: "/admin/orders" },
    { id: 4, icon: Users, name: "Customers", link: "/admin/customers" },
    { id: 5, icon: Ticket, name: "Coupons", link: "/admin/coupons" },
  ];

  return (
    <div className="mt-6 p-4 space-y-2 ">
      <span className="text-sm font-medium text-muted-foreground">Menu</span>
      {tabs.map((t) => (
        <Link
          key={t.id}
          href={t.link}
          className={cn(
            t.link === pathname
              ? "font-semibold flex "
              : "text-muted-foreground hover:text-foreground ",
            "flex gap-2 px-2 rounded-lg text-sm py-3 items-center"
          )}>
          <t.icon
            className={cn(
              t.link === pathname
                ? "text-gray-400"
                : "text-muted-foreground hover:text-foreground font-normal",
              "text-sm "
            )}
          />
          <span className="hidden  lg:block">{t.name}</span>
        </Link>
      ))}
      <Separator />
      <LogoutLink className="flex gap-2 px-2 rounded-lg  py-3 items-center text-muted-foreground hover:text-foreground">
        <LogOut />
        <span className="hidden lg:block text-muted-foreground hover:text-foreground font-normal ">
          Logout
        </span>
      </LogoutLink>
    </div>
  );
}
