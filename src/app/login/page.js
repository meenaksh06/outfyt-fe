import { FcGoogle } from "react-icons/fc";

import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Bodoni&family=Roboto?family=Inter?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <div
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/1bbc/c8ab/dead08ff86dfa37e533072a41c7b48cb?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QRPJBWAxOYA45Q5yq-7fpBvi~EvQWzhompBIhJ6waJ5Ij-bF-9F~4agFBUbjoqIW0H89wEWKkCuqnpzw5f6XFhUcGf4Bc9wcIQu15mcO837v7g10arS1xLb2dYm~95Ght251eojYe4Io~KzK33e2H1gTgGp0nG7LuORt3X8wbJWlDlfWpPltMUNHrBF3AmrrABQvXytx4zMOSZZVFhy7VwFqoE4AMcnyoqXSo7wHgDDwJhNnLiZyzT9rd7J4NrJ8vTHEUDGPPmqENFjW2UnRHgWGtCKJl9UOLUD8fT6fZWYMHSNUgZGMqvEI8ETDLvtsSqarQfOvDpOLj5m0v4r8GQ__')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        <div className="relative z-10 w-full max-w-md rounded-xl bg-white/10 p-8 shadow-lg backdrop-blur-md">
          <h2 className="text-center text-2xl font-semibold text-white font-[Montserrat]">
            Login with Outfyt
          </h2>

          <div className="mt-4 flex">
            <div className="flex-1">
              <button className="w-full border-b-2 border-white px-4 py-2 text-center text-white">
                LOG IN
              </button>
            </div>
            <div className="flex-1">
              <Link href="/register" className="block w-full">
                <button className="w-full border-b-2 border-transparent bg-[#201A2A] py-2 text-center text-white hover:bg-[#3A3255]">
                  REGISTER
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-white">
              Please Enter your Details
            </label>
            <input
              type="text"
              placeholder="Enter Phone no. or Email"
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white/20 px-4 py-2 text-white placeholder-white outline-none backdrop-blur-md focus:border-white focus:ring-white"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white/20 px-4 py-2 text-white placeholder-white outline-none backdrop-blur-md focus:border-white focus:ring-white"
            />
            <div className="mt-2 text-right text-sm text-white hover:underline">
              Forgot Password
            </div>
          </div>

          <button className="mt-6 w-full rounded-lg bg-blue-500 py-2 text-white hover:bg-blue-600">
            Sign in
          </button>

          <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#201A2A] py-2 text-white hover:bg-[#3A3255]">
            <FcGoogle size={20} />
            Sign in with Google
          </button>

          <p className="mt-4 text-center text-sm text-white">
            Don’t have an account?{" "}
            <Link href="/register">
              <span className="font-semibold cursor-pointer hover:underline">
                Register
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
