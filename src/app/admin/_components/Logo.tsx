import { cn } from "@/lib/utils";
import { SquareDashedMousePointer } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function logo({
  fontSize = "font-2xl",
  iconSize = 20,
}: {
  fontSize?: string;
  iconSize?: number;
}) {
  return (
    <Link
      href={"/"}
      className={cn(
        "text-2xl font-extrabold text-gray-50 flex items-center gap-2",
        fontSize
      )}>
      <div className="rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 p-2">
        <SquareDashedMousePointer size={iconSize} className="strock-white" />
      </div>
      <div className="">
        <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
          Auto
        </span>
        <span className="text-stone-700 dark:text-stone-300">
          Mation
        </span>
      </div>
    </Link>
  );
}
