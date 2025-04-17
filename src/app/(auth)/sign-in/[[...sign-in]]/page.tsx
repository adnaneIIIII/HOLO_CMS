import { Wrapper } from "@/components";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen">
      <Wrapper className="flex flex-col items-center justify-center mt-8 py-12 relative">
        <div className="hidden md:block absolute -top-2/4  w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10"></div>
        <div className="absolute inset-0 -top-36 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-dvh opacity-5" />

        <Image src={"/wiholo.png"} alt="logo" width={160} height={100} className="mb-8" />
        <SignIn />
      </Wrapper>
    </div>
    </>
  );
}
