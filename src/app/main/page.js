import Link from "next/link";
import Head from "next/head";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "../../components/ui/menubar";

import Footer from "../../app/footer/page";

export default function MainPage() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Bodoni&family=Roboto?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="w-screen h-screen overflow-hidden relative">
        <Menubar className="bg-[#99A5CB] h-20 gap-10  top-0 left-0 w-full z-50 rounded-none border-none">
          <MenubarMenu>
            <MenubarTrigger>
              <img
                src="/logo.png"
                alt="Logo"
                className="h-16 w-auto object-contain ml-10"
              />
            </MenubarTrigger>
            <MenubarTrigger className="hover:bg-[#11141B] hover:text-white transition text-1xl">
              HOME
            </MenubarTrigger>
            <MenubarTrigger className="hover:bg-[#11141B] hover:text-white transition">
              CATEGORIES
            </MenubarTrigger>
            <MenubarTrigger className="hover:bg-[#11141B] hover:text-white transition">
              SHOP
            </MenubarTrigger>
            <MenubarTrigger className="hover:bg-[#11141B] hover:text-white transition">
              ABOUT US
            </MenubarTrigger>
            <MenubarTrigger className="flex flex-col items-center gap-1 hover:bg-[#11141B] hover:text-white transition ml-auto">
              <FaShoppingCart className="w-6 h-6" />
              {/* <p className="text-xs">CART</p> */}
            </MenubarTrigger>
            <MenubarTrigger className="flex flex-col items-center gap-1 hover:bg-[#11141B] hover:text-white transition">
              <FaSearch className="w-6 h-6" />
              {/* <p className="text-xs">SEARCH</p> */}
            </MenubarTrigger>

            <Link href="/login">
              <MenubarTrigger className="flex flex-col items-center gap-1 hover:bg-[#11141B] hover:text-white transition">
                <FaUser className="w-6 h-6" />
                {/* <p className="text-xs">PROFILE</p> */}
              </MenubarTrigger>
            </Link>
          </MenubarMenu>
        </Menubar>

        <div className="w-screen h-screen relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/096d/b9af/83cda44664ce8b713a6ab1d96d868a2c?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=heTq-szKgfqHZ2lHdqaOS9fxGkeCSVt2CnC~SK5Jo6~nGKgcMjK6t0oaRzWdsU7h0q3LG5Etf7Gtx8m~vdzuzCPbLy8sKIddnQENqknKS9n7XbQm9kdQ2WqbeKVfrFFS4kNFkoGNeyZ2~Xko5mffEjYDwod2-1S8wLgnDZZ6qWtPxp-RoA4vlaZDnGsjADhtuOr7~JsVqgQeU5Q~M~Wi7acFr31oFohVOhMduDqS8CGUleqMDuPnHOI6wwYpQ46bDkbIfo4JlxYfWvB12XHa7SOk1J2b6efRIIrLHC8TKcez0JwuSAG99YlB3uWyFOe~~LXU2f89J~Qo5bdf5u35HQ__"
            alt="Image"
            className="w-full h-full"
          />

          <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 z-10">
            <button className="px-8 py-4 border-7 border-white text-white hover:bg-white hover:text-black transition text-5xl font-bold">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <p className="flex justify-center font-[Libre_Bodoni] text-6xl font-extralight p-6">
        NEW ARRIVALS
      </p>

      <div className="flex items-center justify-center w-full">
        <div className="w-12 h-[2px] bg-[#454545]"></div>{" "}
        <div className="w-64 h-[4px] bg-[#454545] mx-2"></div>{" "}
        <div className="w-12 h-[2px] bg-[#454545]"></div>{" "}
      </div>

      <div className="flex justify-center items-center gap-3 px-10 py-10">
        <img
          src="https://s3-alpha-sig.figma.com/img/11b3/ad80/b58a6b7f5a88980aa4615d6e380395e5?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s7EITGb3-8GtR4zV1lh0zLtqm8RjEvK3cFXyvPoLQyfzSceSlZdud8ptALfLPn0mNpXT-INipaIPevjhdMBdmzCHw1~aec-V9pdmCt8mE~oH01rT-w6vDXBH6c7FIfODNa9E1ctCay7zuQArij7TjefdyoK-AGWBuslxLvAYNKG1uGOmbVPcX4ZbxToz1ZYiEgR0lt4bRBOvkXTDRUaBwJTefcYMyY7psqUBw5CtC4VaKjz3o2iJl9szpgVEs4OOYxQ25vfTfTQJhiI07d31t9qiV7kd62ZXg9JSRFWIxGiB8e8OgdaT1FPYdAZWl~o4HoUGwnqMQ~Ueo1ts4rBSTQ__"
          alt="Image"
          className="w-1/3 h-auto object-cover"
        />
        <img
          src="https://s3-alpha-sig.figma.com/img/46b6/390a/de4ded019ad0e832c21119717741850d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tfR9xIkiLORi-uNZvgqo-PDin8Y-KQFsusxqLX7sguYuLLh-7XaG6Nr797lyYDXnJ5tLqvGHTwzlE5K4~ymSRRcmaaSJF279xZw~Q4MxFDtY8NwQINzxEJ3LMkBBoyL-QuF6xeTZd~Vtat8313~8cFlgFHakJOjbPITOoO4tyq5m9NaYFoiSEqB2qLSGWbTCgBiRhJkFVnWL~-U2gWRENhUP7ykgmtt11sUoXVr5~yQQMFd~Pca0pepywBNPCZWTcJ7QpqwjVue80ZlWhvMO0Un2odAW5D2bdyYYY3xELnl7Wfp5~K224qUhdJgfSrVxRD3rE2aGDBB4sY5xhQHT6w__"
          alt="Image"
          className="w-1/3 h-auto object-cover"
        />
        <img
          src="https://s3-alpha-sig.figma.com/img/bbeb/8607/7cc63107e1850d2fee97bc9c43598dd9?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J8esJgFWQJBqgYnJRNzIOGi2vi1G0KC1MHffmSlWa-Iue5PTUmIytKzUobO1FmC5lJ32gBJny50jU6oZhKYRVh2LuDdOTYGVI7b6WU~G4RhoDw9cCaG~VmE8f1tS-TUAI1oJ14O74Iej5TtLdhqnvxCWPGqwFAjlO-EedQaO9Gowh2C~heNmt~dtjKFOkHuGGjC4WeBWV1PiPSzImgzraGrsg4HvI~ebmVP1q3Tl-6rWsyEhn8eCLYdJLuW0jNojSAGzlnGdI0NLlHk3Q5~F3ai1oTsb2T9wZTOyzUlNXRZZzRN0LjqMlrg-DgKy685P6uH0uWZj~hwPaIZVwe-WmA__"
          alt="Image"
          className="w-1/3 h-auto object-cover"
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full py-5">
        <div className="flex items-center w-full max-w-screen-lg">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <div className="flex-1 h-[4px] bg-[#454545] mx-2"></div>{" "}
          <div className="w-2 h-2 bg-black rounded-full"></div>{" "}
        </div>

        <div className="w-1/2 h-[2px] bg-[#454545] mt-4"></div>
      </div>

      <div className="flex justify-center items-start gap-20 px-10 py-16 bg-white">
        <div className="flex flex-col items-center max-w-xs text-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/7009/4837/39b3b7a3f1ff9bdd96822673b90f5e9f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=N~vTFHzWyIRHBwhSaknsgr5HhA6U-E3Eei-sUVOrtAU1eDxOONbkX3C3tjoAw4g3bagaWG2rCR-372x-QtzhVns~Xpi1HrqchtJ5RPNSc241ulm1xHtFb9FAAPg~tM~kkxZrdgw5tHdJZNMkID~AnJ2WFYPTifdbS2s1CcpGPcQNjmbdExtC6u0bLLoPk8BDDvwGHPB~2w-JDHmAetsS5EzN9XdNlodLS~tnmRSUXRT5wb223omNYGWG9ixHBqAKSSCdp28B7CZZ60rNj0gUrRUNMEMgpNgcfYN0bFWRgV-tojCUOoNpDjqziZ-6kVE1a--s3NbA4lCR8Sp-IfiAJQ__"
            alt="Premium Quality"
            className="w-32 h-32 mb-6"
          />
          <p className="text-2xl font-bold">PREMIUM QUALITY</p>
          <p className="text-gray-600 leading-relaxed mt-3">
            We prioritize quality fabrics and craftsmanship to ensure
            long-lasting comfortable pieces.
          </p>
        </div>

        <div className="flex flex-col items-center max-w-xs text-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/c8b3/5d37/55cf9d85defa2b173056e87a56c6af90?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cpy6h7PF8RLVHYK-44YBnWqRET8kHelz7qA07GZA6Nw~h1y93Y8ShpcDd3pYpH9S6uPx2VpaTKtCpY9pZELGZidcxdEiN5lC2Fo7~q-XPJ6k6sJRX3YJHtTeC1O6ayjoGdES36fPqrx6tTaY6YFrLIn-kBWOecNP~HyIwvvn3ZI1RojfdFNRYL11j30xKDOdiTfKD--WV1749~J4oZMAjRkh8BBSfI33vxAPB8Ho10UgGb7QnaEKv~OWgg3bGhFHyFKwRfSnUVzOeA-QHyG6lCUm5z~N0ycr7HplsaLwUEomlty3o7ioHaaOfkeud03hsg9FUKVrg-8uwvONyp~ObQ__"
            alt="Timeless Style"
            className="w-32 h-32 mb-6"
          />
          <p className="text-2xl font-bold">TIMELESS STYLE</p>
          <p className="text-gray-600 leading-relaxed mt-3">
            Our minimal designs are versatile and timeless, effortlessly
            elevating your style from casual days to formal events.
          </p>
        </div>

        <div className="flex flex-col items-center max-w-xs text-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/dd7a/dedd/ed82fd46535f621910535e2d01c9dc70?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A7p8gU2tZTgCdMUT5P2-SWL38W7zO6hDtOS0vAU~NexRvtVtcCXvzYmAqWE1NFAlSkSWQSH1M8lHfufkLSSQjY11wNhna~rYyt~iwuiBWLCE682mEB57C52LLQx1k37V8U-RVrogpynlQh7BmLlOZtlv~xFAIPZq1sz0r9vpsgqgdT6NRI8r-GN5AkeAjpbwXg5nO8Ue7etMswnpn0ijv8wKnLB7k5SbXnsrezxeIDGGxliELi~iJLtPcvnzmPMHdpV7Bib3EbdDK~8db4uVfLv5fH~uc8l2~w9tMMK8kLdHMqAcLeoQl74ENWE5gOUVus-aLkACanjVBcsY7gXhmQ__"
            alt="Affordable Luxury"
            className="w-32 h-32 mb-6"
          />
          <p className="text-2xl font-bold">AFFORDABLE LUXURY</p>
          <p className="text-gray-600 leading-relaxed mt-3">
            High-quality fashion doesn’t have to break the bank, as our
            affordable prices make stylish dressing accessible to all.
          </p>
        </div>
      </div>

      <div className="bg-white p-10 py-1">
        <div className="bg-[#99A5CB] py-6">
          <p className="font-[Libre_Bodoni] text-[#11141B] text-6xl text-center">
            CATEGORIES
          </p>
          <div className="flex justify-center items-center mt-2">
            <div className="w-12 h-[1.5px] bg-[#11141B]"></div>
            <div className="w-64 h-[3px] bg-[#11141B] mx-2"></div>
            <div className="w-12 h-[1.5px] bg-[#11141B]"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="relative">
            <img
              src="https://s3-alpha-sig.figma.com/img/eaa2/4863/9256300a3898afec8996adb3f250bc9d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=G52bQn~QtLwN-w6HMrdea9-jAH7g~oRP4HTjcCqSDa4wDdtfVvFq~-5Wz8qkG1lv1Ttcy8NFQCIs9EPWpFM440Kr3iklBcKLQe~D49wFmEEl6FOsV9oI9f4pOfy7F3Afvsj6CcJEfSUHHnbq7SjLG1YGgAairhe7qIaXfxpNGLeImTinGtUXRO09t6rRBiA7TrN5L3ylJUPgZHWraPt6hY1PiU8kqCvBavHYK4zbYHpEda5Ghkp1gFrTa8hNplg~4q6w-uz5s-uDfDlKsuko6Ugh6EXBpu5MlzcNtebrgmRhXnlTbSC7DAXnMvKR4t2gm6rezUjE17DHYkmQ23lzoQ__"
              alt="Men"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 text-lg font-bold">
              MEN
            </div>
          </div>

          <div className="relative">
            <img
              src="https://s3-alpha-sig.figma.com/img/240e/d1f6/915784132ebb9ea59e7fddc0bd17d4d1?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bZV9DWupOU6C7oKXUfihUnhTzCD8b~3IRFtlSK5lvYVp4codOPb4WmheCs-VT8xw7crAZkFpxPRygwUg09qMKk9zA80n4yyU2phi6ZB5zAExMGEUBtCamt8YRi0BUo9Om1~Qx-JdoniXvMptLLY9eGbzOdzZhQwvY9d7SSQTzaZjIZF~d6RRMbYrztPv7yxzRqD609B2H6CsdoHzIx4VbHrGydc2R4p6rKmVriRwiCX7PY0mmC0VA4SQhipqTVjuulgzg4lcRmY67w8AxJLltoRRdHUNipDepjOsdc3lDhpNe09bIfNHzycckQ32Rw61h0eW8rfv4p7gpmYMfgu5Og__"
              alt="Women"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 text-lg font-bold">
              WOMEN
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}


