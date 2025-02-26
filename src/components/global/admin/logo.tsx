"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

function Logo() {
  const { resolvedTheme } = useTheme();
  const logoSrc = resolvedTheme === "dark" ? "/icons/holo.png" : "/icons/wiholo.png";

  return (
    <div className="flex items-center py-4 px-2 mt-4">
      <Link href={"/admin"} aria-label="Go to Admin Dashboard">
        <Image 
          src={logoSrc} 
          alt="Holo IPTV Logo" 
          width={110} 
          height={40} 
          className="hover:opacity-80 transition-opacity"
        />
      </Link>
    </div>
  );
}

export default Logo;
