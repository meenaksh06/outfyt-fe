import { FcGoogle } from "react-icons/fc";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/b02d/118f/96cc7ac4b8e7bc0547889eabbd3e5741?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MOekXIy2i~w-nRqy7tKuzWCaAe2t-SGB33qCOj2UGkVo1LiSJzfjku4jYbJFQL~rmJc7Afcd7kz~e8qs60ZibuEoPlStzuiuUAeNlktEh-rpFPCQatNdy3Z8dqdBv3Ul8rDaMyY-D9LNGLgpnxruObsa~FxG24sIUnXiLOgRZQv3olPG~oK-ZlH~aYCNIUI3u0gjGF89fm0zmNtjVDolY-1-sJPfCMsv-mDcjgGjCbT-hUWUHdjyh6VpDLus8-InKDyvqx3CFmj5u5XLXf~tdFQJBSZJep5Cv~KHjBfOwmgheGpdRQKVeE6TnKni2P-5FNQJhsOsNn0lVIiUBHvjfg__')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div className="relative z-10 w-full max-w-lg rounded-xl bg-white/10 p-8 shadow-lg backdrop-blur-lg">
        <h2 className="text-center text-3xl font-semibold text-white font-[Montserrat]">
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
            <button className="w-full border-b-2 border-white px-4 py-2 text-center text-white">
              REGISTER
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-white">
              First Name
            </label>
            <input
              type="text"
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white/20 px-4 py-2 text-white placeholder-white outline-none backdrop-blur-md focus:border-white focus:ring-white"
              placeholder="First Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Last Name
            </label>
            <input
              type="text"
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white/20 px-4 py-2 text-white placeholder-white outline-none backdrop-blur-md focus:border-white focus:ring-white"
              placeholder="Last Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white/20 px-4 py-2 text-white placeholder-white outline-none backdrop-blur-md focus:border-white focus:ring-white"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Phone Number
            </label>
            <input
              type="tel"
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white/20 px-4 py-2 text-white placeholder-white outline-none backdrop-blur-md focus:border-white focus:ring-white"
              placeholder="Phone Number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white/20 px-4 py-2 text-white placeholder-white outline-none backdrop-blur-md focus:border-white focus:ring-white"
              placeholder="Password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Confirm Password
            </label>
            <input
              type="password"
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white/20 px-4 py-2 text-white placeholder-white outline-none backdrop-blur-md focus:border-white focus:ring-white"
              placeholder="Confirm Password"
            />
          </div>
        </div>

        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#201A2A] py-2 text-white hover:bg-[#3A3255]">
          <FcGoogle size={20} />
          Sign in with Google
        </button>

        <p className="mt-4 text-center text-sm text-white">
          Already have an account?{" "}
          <Link href="/login">
            <span className="font-semibold cursor-pointer text-[white] hover:underline">
              Login
            </span>
          </Link>
        </p>

        <button className="mt-4 w-full rounded-lg bg-[#201A2A] py-2 text-white hover:bg-[#3A3255]">
          Register
        </button>
      </div>
    </div>
  );
}
