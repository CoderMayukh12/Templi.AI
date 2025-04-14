import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { SignInButton } from "./SignInButton";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 shadow-md px-8">
      <Image src={"/logo.svg"} width={180} height={150} alt="logo" />
      <SignInButton></SignInButton>
    </div>
  );
};

export default Header;
