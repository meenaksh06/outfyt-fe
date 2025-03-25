import Head from "next/head";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaTwitter,
} from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Bodoni&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="w-full h-screen flex flex-col">
        <div className="relative flex-1 overflow-hidden">
          <img
            src="https://s3-alpha-sig.figma.com/img/e32b/62d7/bc8235aca965371b9a3c8fc9726f3e9e?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AcoA6baUSkpc2Bd9~tpF75jTvtfYN55PXDhg7kjmbH9MKwY4A5K~It43dC4buGk82mCMMNBlu-VyN2VOk7OzM3iJrxpurobkBePIPi1ZM1qh9k9HXp1sXngV4ds-aFttUwzuSrWx5zMxdQANsNUqoA4Moa7K4usRAt9utz3j2H6CJqcb7M828vaI4cV2Knaut1PpVU8axUb1K1I9eJHEP59XFVZN7XjW60QbmfJHke-9a4PYiMkTueoXMQULXf38bB5QxLQUNPAJHr2Ae84ycSbhDdCyMLqhFnaXuR8TmpdGrdpG-TuM0TOzJ5R1HxUD1-T3kZDHm9i4BvlvVR4bmg__" // Replace with your image path
            alt="Outfyt Image"
            className="absolute inset-0 w-full h-full object-contain"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-7xl font-bold font-[Libre_Bodoni]">OUTFYT</h1>
            <div className="w-20 h-[2px] bg-white my-6"></div>
            <button className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition">
              Shop Now
            </button>
          </div>
        </div>

        <footer className="bg-[#1E1C24] text-white w-full">
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-lg font-bold uppercase">NEED HELP</h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a href="#" className="text-sm hover:text-gray-400">
                      CONTACT US
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm hover:text-gray-400">
                      RETURN AND REFUNDS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm hover:text-gray-400">
                      FAQ’S
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm hover:text-gray-400">
                      MY ACCOUNT
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold uppercase">COMPANY</h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a href="#" className="text-sm hover:text-gray-400">
                      ABOUT US
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm hover:text-gray-400">
                      CAREERS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm hover:text-gray-400">
                      OUTFYT ARMY
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold uppercase">FOLLOW US</h3>

                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex gap-4 w-full">
                    <a
                      href="#"
                      className="p-2 rounded bg-white hover:opacity-75"
                    >
                      <FaFacebookF className="text-[#1877F2] w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded bg-white hover:opacity-75"
                    >
                      <FaInstagram className="text-pink-500 w-6 h-6" />
                    </a>
                  </div>

                  <div className="flex gap-4 w-full mt-2">
                    <a
                      href="#"
                      className="p-2 rounded bg-white hover:opacity-75"
                    >
                      <FaSnapchatGhost className="text-yellow-400 w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded bg-white hover:opacity-75"
                    >
                      <FaTwitter className="text-black w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
