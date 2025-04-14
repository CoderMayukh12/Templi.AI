"use client";
import { useGoogleLogin } from "@react-oauth/google";
import React from "react";
import { Button } from "../ui/button";

export const SignInButton = () => {
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: "Bearer " + tokenResponse?.access_token } }
      );

      console.log(userInfo);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });
  return (
    <div>
      <Button
        className="bg-[#1e0e58] text-white hover:bg-[#276365]"
        onClick={googleLogin}
      >
        Get Started
      </Button>
    </div>
  );
};
