import Head from "next/head";
import Link from "next/link";

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
            src="https://s3-alpha-sig.figma.com/img/e32b/62d7/bc8235aca965371b9a3c8fc9726f3e9e?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HzKoV3aZ6sN0XzHXIuHdm4rk3UQ7ItLzbJfy~aDcDI6bIOY~sLsVdYRGzAh1qpe9maCUAVAwpJwhRAu9g4b7x6~1Nyfwn9Zc4JUhh51y6PUAkhrIpUmh8sIlwrAaP89WojmbDIL4sZ~95AqgkA7yoaqjOJsDEZfc8tcNsF5Jd0oRgwJIGhzVD4po61RJHWe1bKNn-uCDSci6mYBSLwoJ2LlBVDPJ7YDeQKqXN-6k9E5pbS3HYsHB0uodsbDDZqCSF3FrjJD--NJhMVgwlaXw2bEGoa7mrOClymEM-Hs3apljYyh-zIXZyfwSdUI8j3P~zFFWeJZQgh9IV~Lvfkktew__"
            alt="Outfyt Image"
            className="absolute inset-0 w-full h-full object-contain"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-7xl font-bold font-[Libre_Bodoni]">OUTFYT</h1>
            <div className="w-20 h-[2px] bg-white my-6"></div>
            <Link href="/main">
              <button className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-[#232029] text-white">
          <div className="flex justify-between px-16 py-6">
            <div className="text-lg">NEED HELP</div>
            <div
              className="text-lg font-semibold"
              style={{ transform: "translateX(-100px)" }}
            >
              COMPANY
            </div>
            <div
              className="text-lg font-semibold"
              style={{ transform: "translateX(-200px)" }}
            >
              FOLLOW US
            </div>
          </div>

          <div className="bg-[#A3ABCD] text-black px-16 py-8 grid grid-cols-3 gap-50">
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:underline">
                CONTACT US
              </a>
              <a href="#" className="hover:underline">
                RETURN AND REFUNDS
              </a>
              <a href="#" className="hover:underline">
                FAQ’S
              </a>
              <a href="#" className="hover:underline">
                MY ACCOUNT
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <a href="#" className="hover:underline">
                ABOUT US
              </a>
              <a href="#" className="hover:underline">
                CAREERS
              </a>
              <a href="#" className="hover:underline">
                OUTFYT ARMY
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61573891667487"
                  className="p-2 rounded hover:opacity-75"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                    alt="Facebook"
                    className="w-10 h-10"
                  />
                </a>
                <a
                  href="https://www.instagram.com/outfytofficial/?hl=en"
                  className="p-2 rounded hover:opacity-75"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                    alt="Instagram"
                    className="w-10 h-10"
                  />
                </a>
              </div>

              <div className="flex gap-4">
                <a href="#" className="p-2 rounded hover:opacity-75">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png"
                    alt="Twitter"
                    className="w-10 h-10"
                  />
                </a>
                <a
                  href="https://www.threads.net/@outfytofficial?xmt=AQGziKYqq6AXeIZysrDhZGdUdRTHq8m1pXn-OUDj9yNmb8Q"
                  className="p-2 rounded hover:opacity-75"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
                    alt="Threads"
                    className="w-10 h-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
