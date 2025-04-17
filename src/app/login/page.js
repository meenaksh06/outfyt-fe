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
          href="https://fonts.googleapis.com/css2?family=Libre+Bodoni&family=Roboto&family=Inter&family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <div className="min-h-screen bg-[#d4d5d5] flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 shadow-lg backdrop-blur-md">
          <h2 className="text-center text-2xl sm:text-3xl font-semibold text-[#201A2A] font-[Roboto]">
            Login with Outfyt
          </h2>

          <div className="mt-4 flex text-sm sm:text-base">
            <button className="flex-1 border-b-2 border-[#201A2A] px-4 py-2 text-[#201A2A]">
              LOGIN
            </button>
            <Link href="/register" className="flex-1">
              <button className="w-full border-b-2 border-transparent bg-[#201A2A] py-2 text-white hover:bg-[#3A3255]">
                REGISTER
              </button>
            </Link>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-[#201A2A]">
              Please Enter your Details
            </label>
            <input
              type="text"
              placeholder="Enter Phone no. or Email"
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white/20 px-4 py-2 text-sm text-[#201A2A] placeholder-[#201A2A] outline-none backdrop-blur-md focus:border-[#201A2A] focus:ring-[#201A2A]"
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
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white/20 px-4 py-2 pr-10 text-sm text-[#201A2A] placeholder-[#201A2A] outline-none backdrop-blur-md focus:border-[#201A2A] focus:ring-[#201A2A]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#201A2A]"
              >
                {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
              </button>
            </div>
            <div className="mt-2 text-right text-sm text-[#201A2A] hover:cursor-pointer hover:underline">
              Forgot Password?
            </div>
          </div>

          <button className="mt-6 w-full rounded-lg bg-blue-500 py-2 text-white text-sm sm:text-base hover:bg-blue-600 transition-all">
            Sign in
          </button>

          <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#201A2A] py-2 text-white text-sm sm:text-base hover:bg-[#3A3255] transition-all">
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

      <Footer />
    </>
  );
}
