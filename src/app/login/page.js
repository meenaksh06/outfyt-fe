"use client";

import { FcGoogle } from "react-icons/fc";

import { useState } from "react";

import { Eye, EyeOff } from "lucide-react";

import Link from "next/link";

import Footer from "../../app/footer/page";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Bodoni&family=Roboto?family=Inter?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <div
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-[#d4d5d5]"
        // style={{
        //   backgroundImage: `url('https://s3-alpha-sig.figma.com/img/1bbc/c8ab/dead08ff86dfa37e533072a41c7b48cb?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QRPJBWAxOYA45Q5yq-7fpBvi~EvQWzhompBIhJ6waJ5Ij-bF-9F~4agFBUbjoqIW0H89wEWKkCuqnpzw5f6XFhUcGf4Bc9wcIQu15mcO837v7g10arS1xLb2dYm~95Ght251eojYe4Io~KzK33e2H1gTgGp0nG7LuORt3X8wbJWlDlfWpPltMUNHrBF3AmrrABQvXytx4zMOSZZVFhy7VwFqoE4AMcnyoqXSo7wHgDDwJhNnLiZyzT9rd7J4NrJ8vTHEUDGPPmqENFjW2UnRHgWGtCKJl9UOLUD8fT6fZWYMHSNUgZGMqvEI8ETDLvtsSqarQfOvDpOLj5m0v4r8GQ__')`,
        // }}
      >
        {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div> */}

        <div className="relative z-10 w-full max-w-md rounded-xl bg-white p-8 shadow-lg backdrop-blur-md">
          <h2 className="text-center text-2xl font-semibold text-[#201A2A] font-[Roboto]">
            Login with Outfyt
          </h2>

          <div className="mt-4 flex">
            <div className="flex-1">
              <button className="w-full border-b-2 border-[#201A2A] px-4 py-2 text-center text-[#201A2A]">
                LOGIN
              </button>
            </div>
            <div className="flex-1 ">
              <Link href="/register" className="block w-full">
                <button className="w-full border-b-2 border-transparent bg-[#201A2A] py-2 text-center text-white hover:cursor-pointer hover:bg-[#3A3255]">
                  REGISTER
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-[#201A2A]">
              Please Enter your Details
            </label>
            <input
              type="text"
              placeholder="Enter Phone no. or Email"
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white/20 px-4 py-2 text-[#201A2A] placeholder-[#201A2A] outline-none backdrop-blur-md focus:border-[#201A2A] focus:ring-[#201A2A] "
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-[#201A2A]">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white/20 px-4 py-2 pr-10 text-[#201A2A] placeholder-[#201A2A] outline-none backdrop-blur-md focus:border-[#201A2A] focus:ring-[#201A2A]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#201A2A]"
              >
                {showPassword ? (
                  <Eye className="w-5 h-5" />
                ) : (
                  <EyeOff className="w-5 h-5" />
                )}
              </button>
            </div>
            <div className="mt-2 text-right text-sm text-[#201A2A] hover:cursor-pointer hover:underline">
              Forgot Password?
            </div>
          </div>

          <button className="mt-6 w-full rounded-lg bg-blue-500 py-2 text-white hover:bg-blue-600">
            Sign in
          </button>

          <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#201A2A] py-2 text-white hover:bg-[#3A3255]">
            <FcGoogle size={20} />
            Sign in with Google
          </button>

          <p className="mt-4 text-center text-sm text-[#201A2A]">
            Don’t have an account?{" "}
            <Link href="/register">
              <span className="font-semibold cursor-pointer hover:underline">
                Register
              </span>
            </Link>
          </p>
        </div>
      </div>

      <Footer/>
    </>
  );
}
