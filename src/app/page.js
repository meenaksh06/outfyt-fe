import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Head from "next/head";

import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "@/components/ui/footer";
import LaunchUI from "@/components/logos/launch-ui";
import Link from "next/link";
// import X from "@/components/logos/x";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Bodoni&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <a href="https://s3-alpha-sig.figma.com/img/e32b/62d7/bc8235aca965371b9a3c8fc9726f3e9e?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AcoA6baUSkpc2Bd9~tpF75jTvtfYN55PXDhg7kjmbH9MKwY4A5K~It43dC4buGk82mCMMNBlu-VyN2VOk7OzM3iJrxpurobkBePIPi1ZM1qh9k9HXp1sXngV4ds-aFttUwzuSrWx5zMxdQANsNUqoA4Moa7K4usRAt9utz3j2H6CJqcb7M828vaI4cV2Knaut1PpVU8axUb1K1I9eJHEP59XFVZN7XjW60QbmfJHke-9a4PYiMkTueoXMQULXf38bB5QxLQUNPAJHr2Ae84ycSbhDdCyMLqhFnaXuR8TmpdGrdpG-TuM0TOzJ5R1HxUD1-T3kZDHm9i4BvlvVR4bmg__">
              <div style={{ position: "relative", width: "100%" }}>
                <img
                  src="https://s3-alpha-sig.figma.com/img/e32b/62d7/bc8235aca965371b9a3c8fc9726f3e9e?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AcoA6baUSkpc2Bd9~tpF75jTvtfYN55PXDhg7kjmbH9MKwY4A5K~It43dC4buGk82mCMMNBlu-VyN2VOk7OzM3iJrxpurobkBePIPi1ZM1qh9k9HXp1sXngV4ds-aFttUwzuSrWx5zMxdQANsNUqoA4Moa7K4usRAt9utz3j2H6CJqcb7M828vaI4cV2Knaut1PpVU8axUb1K1I9eJHEP59XFVZN7XjW60QbmfJHke-9a4PYiMkTueoXMQULXf38bB5QxLQUNPAJHr2Ae84ycSbhDdCyMLqhFnaXuR8TmpdGrdpG-TuM0TOzJ5R1HxUD1-T3kZDHm9i4BvlvVR4bmg__"
                  alt="Image"
                  style={{ width: "auto" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    fontSize: "3rem",
                    fontWeight: "bold",
                    color: "red",
                    fontFamily: "'Libre Bodoni', serif",
                  }}
                >
                  OUTFYT
                </div>
              </div>
            </a>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <footer className="bg-background w-full px-4">
        <div className="max-w-container mx-auto">
          <Footer className="border-t pt-8">
            <FooterContent className="sm:grid-cols-2 md:grid-cols-3">
              <FooterColumn>
                <h3 className="text-md pt-1 font-semibold ">Need Help</h3>
                <a href="#" className="text-muted-foreground text-sm">
                  Contact Us
                </a>
                <a href="#" className="text-muted-foreground text-sm">
                  Return & Refunds
                </a>
                <a href="#" className="text-muted-foreground text-sm">
                  FAQ's
                </a>
                <a href="#" className="text-muted-foreground text-sm">
                  My Account
                </a>
              </FooterColumn>
              <FooterColumn>
                <h3 className="text-md pt-1 font-semibold">Company</h3>
                <a href="#" className="text-muted-foreground text-sm">
                  About Us
                </a>
                <a href="#" className="text-muted-foreground text-sm">
                  Careers
                </a>
                <a href="#" className="text-muted-foreground text-sm">
                  Blog
                </a>
              </FooterColumn>

              <FooterColumn>
                <h3 className="text-md pt-1 font-semibold">Follow Us</h3>
                <a
                  href="YOUR_INSTAGRAM_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // fill="currentColor"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.3.1 2.2.3 3 .6.8.3 1.5.8 2.1 1.5.7.7 1.2 1.3 1.5 2.1.3.8.5 1.7.6 3 .1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.3-.3 2.2-.6 3-.3.8-.8 1.5-1.5 2.1-.7.7-1.3 1.2-2.1 1.5-.8.3-1.7.5-3 .6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.3-.1-2.2-.3-3-.6-.8-.3-1.5-.8-2.1-1.5-.7-.7-1.2-1.3-1.5-2.1-.3-.8-.5-1.7-.6-3-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.3.3-2.2.6-3 .3-.8.8-1.5 1.5-2.1.7-.7 1.3-1.2 2.1-1.5.8-.3 1.7-.5 3-.6 1.3-.1 1.7-.1 4.9-.1zm0-2.2C8.7 0 8.3 0 7 .1 5.7.1 4.6.4 3.6.7c-1 .4-1.8.9-2.6 1.7-.8.8-1.4 1.6-1.7 2.6-.3 1-.6 2.1-.7 3.4C0 8.3 0 8.7 0 12s0 3.7.1 5c.1 1.3.4 2.4.7 3.4.4 1 .9 1.8 1.7 2.6.8.8 1.6 1.4 2.6 1.7 1 .3 2.1.6 3.4.7 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.4-.4 3.4-.7 1-.4 1.8-.9 2.6-1.7.8-.8 1.4-1.6 1.7-2.6.3-1 .6-2.1.7-3.4.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.4-2.4-.7-3.4-.4-1-.9-1.8-1.7-2.6-.8-.8-1.6-1.4-2.6-1.7-1-.3-2.1-.6-3.4-.7C15.7 0 15.3 0 12 0zm0 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-10.9c0 .8-.7 1.4-1.4 1.4s-1.4-.7-1.4-1.4.7-1.4 1.4-1.4 1.4.7 1.4 1.4z" />
                  </svg>
                </a>
                <a
                  href="YOUR_FACEBOOK_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.894-4.788 4.662-4.788 1.325 0 2.464.098 2.794.143v3.24h-1.918c-1.504 0-1.796.716-1.796 1.766v2.31h3.587l-.467 3.622h-3.12v9.294h6.116c.732 0 1.324-.592 1.324-1.324v-21.351c0-.733-.592-1.325-1.324-1.325z" />
                  </svg>
                </a>
                <a
                  href="YOUR_THREADS_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    width="20"
                    height="20"
                  ></svg>
                </a>
              </FooterColumn>

              <FooterColumn>
                <h3 className="text-md pt-1 font-semibold">Legal</h3>
                <a href="#" className="text-muted-foreground text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted-foreground text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-muted-foreground text-sm">
                  Cookie Policy
                </a>
              </FooterColumn>
            </FooterContent>
          </Footer>
        </div>
      </footer>
    </>
  );
}
