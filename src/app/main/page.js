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
            src="https://s3-alpha-sig.figma.com/img/096d/b9af/83cda44664ce8b713a6ab1d96d868a2c?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JTQrk0nJzvtaYwkAUADi4RVEGLPf0QBvB8zbahKlm-RNMPlomgL64WfSxyvo5IlFHHQ9AhFX3xyRil~F6zJueb4-LESKunEpoW4EHuy1uh26ysyXU4ZVboP8U1nEGxeK6SJ9H~CAMmwFBemNooavfSzMh1hQu~4dsimyzt3dUySK2qP8en-jW8iX9t9bs0WfVOMIuEB1asZHbQxTUqjcZTXlpX1WpDUoTITzqJsQxSSoGPIdfc7TwdPZb55z-GUjwrdW71~J-miZSEh400bPnMF~xQZsGsI3Lt4mI7M4k2jzzNo8664b1UiWSfIRRh3Rb1wF0B6sA388K5~iVnCOhg__"
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
          src="https://s3-alpha-sig.figma.com/img/11b3/ad80/b58a6b7f5a88980aa4615d6e380395e5?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=b40JzsCrkAbTrsb5Qacfbw2CkCPJfzvuBBfvTFv~zKxz8fw~dbcozED-fEW5fQeVYB49uxwOfcmpj-Jtg-~m4F5RE-BTW4kP51bp4kRj9QG-yXrjPgv-ojr0Pp1XSYcpj62FdTokD9R5nyYuk1ZUQP4jYeLMhN9wgikIeDk11ImxjTXp11b59eI~-I2j8ndqavrYIKf9FL5sAqHD480~eu5N9ZzGbg~cUowRApYa2gn5vX1aF72nFzS1aJRI9TISIktisg0N29e7DW8lKKrmSTkytEzCLBurE5zV4pBQKlfBfY1a1S36eQUmsUy8-HBjDfe13AKPrq4nnbquBUVN1Q__"
          alt="Image"
          className="w-1/3 h-auto object-cover"
        />
        <img
          src="https://s3-alpha-sig.figma.com/img/46b6/390a/de4ded019ad0e832c21119717741850d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Em576anugpF-bN4e7Lypr0D0YchlWw0ideO5F9U4QqtC2bWEI1PUDRxBZ-Mcj3X5dYzLK4BsmykHsTEM5X5TKY3HZla~TQm51JQpV3qHoXZOLOBzz9WJ~E9coMaxQo8UIQUT9qZBKYRBwGKW~0ECe2N1ft3SXv8qCrsbfDBDueEFhkieINj9CzxmW7lE03MYb~bQ5CHRNFTudDQ3fahO-2DTgW3jiByFiDv09-EpnXc3n5amNue305NXR8spFl9x7jFEZCg4olpgVpALEeegMI3lSdQnwG1BOIs1x2iZmq4aPW0iev0phmC9b9EDtmh03HwjrkSOJn1w58pd00m5lA__"
          alt="Image"
          className="w-1/3 h-auto object-cover"
        />
        <img
          src="https://s3-alpha-sig.figma.com/img/bbeb/8607/7cc63107e1850d2fee97bc9c43598dd9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cedFDPbIKOKE-iDqTh5LYuwNVXFidpUL46ZtPpCoSlYnaEwjLiPzw5S4KQW2egB3ueXSsoYqno9N4fdQ~u2-FDf7A8nRLx6SMo219V0mACVb7aId03NWrrLd~qcft7ENsxJg3facXPys6bc5xlcTlBf7aaTn45rPd8xQPgd45mmyKEx4WBkAvSG5KdsCoCYCsj0c8CrHkCMuVZX8D-0ByQWsE958WoRi2BV5sYVeDo-QeC~SRSmyVrw3nlU5GYQ~1J5vZ8BPN77dqFOx-mqkk20vFJsBHTrrOprFCilhTm1wjU9m0ES1Mx-9vwLoGZWQt1bJw1tkwFZVnHGJ96pICQ__"
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
              src="https://s3-alpha-sig.figma.com/img/eaa2/4863/9256300a3898afec8996adb3f250bc9d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YoaE27zex7W0bIdUcfRszn8OguEPVVpDWFmOgCMveC~8gURTPkgC1w0YqZrpSAdTHs0HLLq1f7sIR7kRgpmo7~p1SPDk7IKMIZdAY7f~AyBlZKgr~xI5aazPr7BBd2EA~3SO-W6HRPbFQMVY7AysEy-ONPN~W8bM5pA54VIGVBDdHqUkoWGZA3wq6nH616OjYxTVkhbXFPK5XJpEOg6MxyTGm1B968DQKs~k2WiYHeFccFEmlIjuIf~gLI6-RJ7FCFxoQWK~zFz1yy7tlbihJz~FO0ydF~JTXLkDdqHNhQyzV1BAv75J4uy0W6fim~jTYK67ZRPMZ-BE0Xj1ULSUew__"
              alt="Men"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 text-lg font-bold">
              MEN
            </div>
          </div>

          <div className="relative">
            <img
              src="https://s3-alpha-sig.figma.com/img/240e/d1f6/915784132ebb9ea59e7fddc0bd17d4d1?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hrkC4I4CRs-JFZ2PVbH1pR5DHZOca-36C~Y-lDmPCNc9rbEOWiFK2T98zv1PwLXnxGKy3RHemfdjY9ad3jd8hdrNvZ2u5E2hEcylHqDF~vH3gbRxqpMjACG-2pZ~dM3Xim5THXqgQBPTIUMiW7RMecwd7-fq7BQeuFXtl-zyQdyzXzefy~dW2cQfGN1K~QgobxksoZR7nVx2pE-RTCHCb5cSjRhEvkR4WLS0Azi4JV018wezevdB3GVpfQ-QmGFLLd8RLQp4yA5iTmJkTPrRy9uqe9mEsG0iJCE4NpuZ4p4szMNql3ec3QnGv4tx8gJ3MHzZjDPS7Cu~5dYA840wcg__"
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
