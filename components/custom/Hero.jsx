import React from "react";
import { Parkinsans } from "next/font/google";
import { Button } from "../ui/button";
import { SignInButton } from "./SignInButton";
const parkinsans = Parkinsans({ subsets: ["latin"], weight: "400" });
const Hero = () => {
  return (
    <div
      className={`px-10 md:px-28 lg:px-44 xl:px-56 flex flex-col items-center justify-center mt-24 ${parkinsans.className}`}
    >
      <h2 className="font-bold text-4xl text-center mt-16 mb-6">
        AI Powered
        <span className="p-2 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
          Email Templates
        </span>
      </h2>
      <p>
        Longing to impress clients with Al-powered emails but don't have enough
        time to build them on your own? Use the Al-powered email templates that
        already have Al-generated imagery and copy save time on email production
        with us.
      </p>
      <div className="flex gap-5 mt-6">
        <Button variant={"outline"} className="border-amber-950 rounded-2xl">
          Try Demo
        </Button>

        <SignInButton></SignInButton>
      </div>
      {/*
       <Image
        src={"./landing.png"}
        alt="landing"SignIn
        width={1000}
        height={800}
        className="mt-10 rounded-xl"
      /> 
      */}
    </div>
  );
};

export default Hero;
