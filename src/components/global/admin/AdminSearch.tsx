"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function AdminSearch() {
  const router = useRouter();
  const handleSerch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form onSubmit={handleSerch} className="flex ">
      <div className="hidden md:flex items-center gap-2 text-xs rounded-md ring-[1.5px] ring-gray-300 px-2">
        <input
          type="text"
          placeholder="Search..."
          name="name"
          className="outline-none w-[250px] bg-transparent"
        />
        <button>
          <Search className=" text-gray-600 py-2 w-5 h-8" />{" "}
        </button>
      </div>
    </form>
  );
}
