import Footer from "@/components/footer";
import "@/styles/fonts.css";
import "./globals.css";
import { Lobster, Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["400"] });
const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lobster", // 👈 defines the CSS variable Tailwind will use
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head>
          {/* Google Fonts */}
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Newsreader:ital,wght@0,400;0,700;1,400&display=swap"
            rel="stylesheet"
          /> */}
        </head>
        <body className="bg-[#EEEDE4]">
          {/* <HeaderLight /> */}
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
