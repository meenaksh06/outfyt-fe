"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#232029] text-white">
      <div className="flex justify-between px-16 py-6">
        <div className="text-lg">NEED HELP</div>
        <div className="text-lg font-semibold -translate-x-[150px]">COMPANY</div>
        <div className="text-lg font-semibold -translate-x-[300px]">FOLLOW US</div>
      </div>

      <div className="bg-white text-black px-16 py-8 pt-3 grid grid-cols-3 gap-10">
        <div className="flex flex-col gap-2">
          <Link href="#" className="hover:underline">CONTACT US</Link>
          <Link href="#" className="hover:underline">RETURN AND REFUNDS</Link>
          <Link href="#" className="hover:underline">FAQ’S</Link>
          <Link href="#" className="hover:underline">MY ACCOUNT</Link>
        </div>

        <div className="flex flex-col gap-4">
          <Link href="#" className="hover:underline">ABOUT US</Link>
          <Link href="#" className="hover:underline">CAREERS</Link>
          <Link href="#" className="hover:underline">OUTFYT ARMY</Link>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61573891667487" className="p-2 rounded hover:opacity-75">
              <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" className="w-10 h-10" />
            </a>
            <a href="https://www.instagram.com/outfytofficial/?hl=en" className="p-2 rounded hover:opacity-75">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-10 h-10" />
            </a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="p-2 rounded hover:opacity-75">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png" alt="Twitter" className="w-10 h-10" />
            </a>
            <a href="https://www.threads.net/@outfytofficial?xmt=AQGziKYqq6AXeIZysrDhZGdUdRTHq8m1pXn-OUDj9yNmb8Q" className="p-2 rounded hover:opacity-75">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Threads" className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
