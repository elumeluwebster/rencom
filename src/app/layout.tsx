import Footer from "@/components/footer";
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
    <html lang="en">
      <body className="bg-[#EEEDE4] ">
        {children}
        <Footer />
      </body>
    </html>
  );
}
