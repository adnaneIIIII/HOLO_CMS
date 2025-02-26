import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { BorderBeam } from "../ui/border-beam";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Play",
      icon: (
        <Play className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Pause",
      icon: (
        <Pause className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "back",
      icon: (
        <SkipBack className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "next",
      icon: (
        <SkipForward className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center absolute bottom-20 ">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
