"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f2f2f2] text-[#333] px-6 py-5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <h3 className="text-[#232029] font-bold mb-2">NEED HELP</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#">Contact Us</Link>
            </li>
            <li>
              <Link href="#">Returns & Refunds</Link>
            </li>
            <li>
              <Link href="#">FAQs</Link>
            </li>
            <li>
              <Link href="#">My Account</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#232029] font-bold mb-2">COMPANY</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
            <li>
              <Link href="#">Gift Vouchers</Link>
            </li>
            <li>
              <Link href="#">Community</Link>
            </li>
            <li>
              <Link href="#">Initiatives</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#232029] font-bold mb-2">MORE INFO</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#">T&C</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Sitemap</Link>
            </li>
            <li>
              <Link href="#">Get Notified</Link>
            </li>
            <li>
              <Link href="#">Blogs</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#232029] font-bold mb-2">FOLLOW US</h3>
          <ul className="space-y-2">
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="w-15 h-15 rounded-full bg-[#3b5998] flex items-center justify-center text-white"
              >
                F
              </a>
              <a
                href="#"
                className="w-15 h-15 rounded-full bg-[#E1306C] flex items-center justify-center text-white"
              >
                I
              </a>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="w-15 h-15 rounded-full bg-[#FFFC00] flex items-center justify-center text-black"
              >
                S
              </a>
              <a
                href="#"
                className="w-15 h-15 rounded-full bg-black flex items-center justify-center text-white"
              >
                X
              </a>
            </div>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 flex flex-col sm:flex-row justify-between items-center px-2">
        <div className="flex items-center space-x-6 mb-4 sm:mb-0">
          <div className="border rounded-lg px-4 py-2 text-sm text-[#666] bg-white shadow">
            <div>💰 COD Available</div>
          </div>
          <div className="border rounded-lg px-4 py-2 text-sm text-[#666] bg-white shadow">
            <div>🔄 30 Days Easy Returns</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
