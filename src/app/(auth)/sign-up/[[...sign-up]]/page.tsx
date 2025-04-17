import { Wrapper } from "@/components";
import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    
    <div className="flex items-center justify-center min-h-screen">
      <Wrapper className="flex flex-col items-center justify-center mt-8 py-12 relative">
        <div className="hidden md:block absolute -top-2/4  w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10"></div>
        <Image
          src={"/wiholo.png"}
          alt="logo"
          width={160}
          height={100}
          className="mb-8"
        />
        <SignUp />
      </Wrapper>
    </div>
  );
}
