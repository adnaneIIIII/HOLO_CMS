"use client";
import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  MenuIcon,
  ShieldCheckIcon,
} from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { cn } from "@/lib/utils";

const routes = [
  { href: "/admin", label: "Home", icone: HomeIcon },
  { href: "/admin/products", label: "Product", icone: Layers2Icon },
  { href: "/admin/orders", label: "Orders", icone: ShieldCheckIcon },
  { href: "billing", label: "Billing", icone: CoinsIcon },
];

function DesktopSidebar() {
  const pathname = usePathname();
  const activeRoute =
    routes.find(
      (route) => route.href.length > 0 && pathname.includes(route.href)
    ) || routes[0];

  return (
    <div
      className="hidden relative md:block min-w-[80px] max-w-[280px] h-screen overflow-hidden w-full bg-primary/5 dark:bg-secondary/30
     dark:text-foreground text-muted-foreground border-r-2 border-separate">
      <div className="flex justify-center items-center gap-2 border-b-[1px] border-separate p-4">
        {/* <Logo /> */}
        <Link href="/" className="flex justify-start gap-2">
          <Image
            src={"/icons/wiholo.png"}
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <div className="p-2 font-semibold">TODO CREDITE</div>
      <div className="flex flex-col p-2">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              route.href === pathname
                ? "gap-2 !justify-start bg-primary hover:bg-accent text-white hover:text-gray-100"
                : "gap-2 !justify-start  text-primary-foreground hover:bg-primary/90",

              "flex gap-2 px-2 rounded-lg text-sm py-3 items-center"
            )}>
            <route.icone size={20} />
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function MobileSidebar() {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  const activeRoute =
    routes.find(
      (route) => route.href.length > 0 && pathname.includes(route.href)
    ) || routes[0];
  return (
    <div className="block border-separate bg-background md:hidden">
      <nav className="container flex items-center justify-between px-8">
        <Sheet open={isOpen} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-[400px] sm:w-[540px] space-y-4"
            side="left">
            <Logo />
            <div className="flex flex-col gap-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={buttonVariants({
                    variant:
                      activeRoute.href === route.href
                        ? "sidebarActiveItem"
                        : "sidebarItem",
                  })}
                  onClick={() => setOpen((prev) => !prev)}>
                  <route.icone size={20} />
                  {route.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
export default DesktopSidebar;
