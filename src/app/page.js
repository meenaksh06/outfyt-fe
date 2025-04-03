import Head from "next/head";
import Link from "next/link";

import Footer from "../app/footer/page";

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
            src="/image2.png"
            alt="Outfyt Image"
            className="w-full h-full overflow-hidden"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-9xl font-bold font-[Libre_Bodoni] pt-40">
              OUTFYT
            </h1>
            <div className="w-70 h-[2px] bg-white my-6"></div>
            <Link href="/main">
              <button className="px-30 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition text-4xl mt-4 hover:cursor-pointer">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
