import { FcGoogle } from "react-icons/fc";

import Link from "next/link";

import Footer from "../../app/footer/page";

export default function RegisterPage() {
  return (
    <>
      <div
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-[#d4d5d5]"
        // style={{
        //   backgroundImage: `url('https://s3-alpha-sig.figma.com/img/b02d/118f/96cc7ac4b8e7bc0547889eabbd3e5741?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MOekXIy2i~w-nRqy7tKuzWCaAe2t-SGB33qCOj2UGkVo1LiSJzfjku4jYbJFQL~rmJc7Afcd7kz~e8qs60ZibuEoPlStzuiuUAeNlktEh-rpFPCQatNdy3Z8dqdBv3Ul8rDaMyY-D9LNGLgpnxruObsa~FxG24sIUnXiLOgRZQv3olPG~oK-ZlH~aYCNIUI3u0gjGF89fm0zmNtjVDolY-1-sJPfCMsv-mDcjgGjCbT-hUWUHdjyh6VpDLus8-InKDyvqx3CFmj5u5XLXf~tdFQJBSZJep5Cv~KHjBfOwmgheGpdRQKVeE6TnKni2P-5FNQJhsOsNn0lVIiUBHvjfg__')`,
        // }}
      >
        {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div> */}

        <div className="relative z-10 w-full max-w-lg rounded-xl bg-white p-8 shadow-lg backdrop-blur-lg">
          <h2 className="text-center text-3xl font-semibold text-[#201A2A] font-[Montserrat]">
            Register with Outfyt
          </h2>

          <div className="mt-4 flex">
            <div className="flex-1">
              <Link href="/login" className="block">
                <button className="w-full border-b-2 border-[#201A2A] bg-[#201A2A] px-4 py-2 text-center text-white hover:bg-[#3A3255]">
                  LOG IN
                </button>
              </Link>
            </div>
            <div className="flex-1">
              <button className="w-full border-b-2 border-[#201A2A] px-4 py-2 text-center text-[#201A2A]">
                REGISTER
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#201A2A]">
                First Name
              </label>
              <input
                type="text"
                className="mt-2 w-full rounded-lg border border-gray-300  px-4 py-2 text-[#201A2A] placeholder-[#201A2A] outline-none backdrop-blur-md focus:border-[#201A2A] focus:ring-[#201A2A]"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#201A2A]">
                Last Name
              </label>
              <input
                type="text"
                className="mt-2 w-full rounded-lg border border-gray-300  px-4 py-2 text-[#201A2A] placeholder-[#201A2A] outline-none backdrop-blur-md focus:border-[#201A2A] focus:ring-[#201A2A]"
                placeholder="Last Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#201A2A]">
                Email
              </label>
              <input
                type="email"
                className="mt-2 w-full rounded-lg border border-gray-300  px-4 py-2 text-[#201A2A] placeholder-[#201A2A] outline-none backdrop-blur-md focus:border-[#201A2A] focus:ring-[#201A2A]"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#201A2A]">
                Phone Number
              </label>
              <input
                type="tel"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-[#201A2A] placeholder-[#201A2A] outline-none backdrop-blur-md focus:border-[#201A2A] focus:ring-[#201A2A]"
                placeholder="Phone Number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#201A2A]">
                Password
              </label>
              <input
                type="password"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-[#201A2A] placeholder-[#201A2A] outline-none backdrop-blur-md focus:border-[#201A2A] focus:ring-[#201A2A]"
                placeholder="Password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#201A2A]">
                Confirm Password
              </label>
              <input
                type="password"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-[#201A2A] placeholder-[#201A2A] outline-none backdrop-blur-md focus:border-[#201A2A] focus:ring-[#201A2A]"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#201A2A] py-2 text-white hover:bg-[#3A3255]">
            <FcGoogle size={20} />
            Sign in with Google
          </button>

          <p className="mt-4 text-center text-sm text-[#201A2A]">
            Already have an account?{" "}
            <Link href="/login">
              <span className="font-semibold cursor-pointer text-[#201A2A] hover:underline">
                Login
              </span>
            </Link>
          </p>

          <button className="mt-4 w-full rounded-lg bg-blue-500 py-2 text-white hover:bg-blue-600">
            Register
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
}
