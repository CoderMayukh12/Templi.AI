import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 shadow-md px-8">
      <Image src={"/logo.svg"} width={180} height={150} alt="logo" />
      <Button className="bg-[#1e0e58] text-white hover:bg-[#276365]">
        Get Started
      </Button>
    </div>
  );
};

export default Header;
