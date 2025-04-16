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

      <div className="w-full min-h-screen flex flex-col">
        <div className="relative h-screen overflow-hidden">
          <img
            src="/image2.png"
            alt="Outfyt Image"
            className="w-full h-full "
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-8 gap-y-6 pt-60 sm:pt-70">
            <h1 className="text-7xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold font-[Libre_Bodoni]">
              OUTFYTT
            </h1>

            <div className="w-60 sm:w-28 md:w-40 h-[2px] bg-white"></div>

            <Link href="/main">
              <button className="px-6 sm:px-10 md:px-20 py-2 sm:py-3 border-5 border-white text-white hover:bg-white hover:text-black transition text-4xl sm:text-2xl md:text-4xl">
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
