import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Footer from "../../app/footer/page";

export default function RegisterPage() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#d4d5d5] px-4 sm:px-6 py-6">
        <div className="w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-lg backdrop-blur-md">
          <h2 className="text-center text-2xl sm:text-3xl font-semibold text-[#201A2A] font-[Montserrat]">
            Register with Outfyt
          </h2>

          <div className="mt-4 flex text-sm sm:text-base">
            <Link href="/login" className="flex-1">
              <button className="w-full border-b-2 border-[#201A2A] bg-[#201A2A] py-2 text-white hover:bg-[#3A3255]">
                LOG IN
              </button>
            </Link>
            <button className="flex-1 border-b-2 border-[#201A2A] py-2 text-[#201A2A]">
              REGISTER
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#201A2A]">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-[#201A2A] placeholder-[#201A2A] outline-none backdrop-blur-md focus:border-[#201A2A] focus:ring-[#201A2A]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#201A2A]">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-[#201A2A] placeholder-[#201A2A] outline-none backdrop-blur-md focus:border-[#201A2A] focus:ring-[#201A2A]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#201A2A]">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-[#201A2A] placeholder-[#201A2A] outline-none backdrop-blur-md focus:border-[#201A2A] focus:ring-[#201A2A]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#201A2A]">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Phone Number"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-[#201A2A] placeholder-[#201A2A] outline-none backdrop-blur-md focus:border-[#201A2A] focus:ring-[#201A2A]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#201A2A]">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-[#201A2A] placeholder-[#201A2A] outline-none backdrop-blur-md focus:border-[#201A2A] focus:ring-[#201A2A]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#201A2A]">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-[#201A2A] placeholder-[#201A2A] outline-none backdrop-blur-md focus:border-[#201A2A] focus:ring-[#201A2A]"
              />
            </div>
          </div>

          <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#201A2A] py-2 text-white text-sm sm:text-base hover:bg-[#3A3255] transition-all">
            <FcGoogle size={20} />
            Sign in with Google
          </button>

          <p className="mt-4 text-center text-sm text-[#201A2A]">
            Already have an account?{" "}
            <Link href="/login">
              <span className="font-semibold cursor-pointer hover:underline">
                Login
              </span>
            </Link>
          </p>

          <button className="mt-4 w-full rounded-lg bg-blue-500 py-2 text-white text-sm sm:text-base hover:bg-blue-600 transition-all">
            Register
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
