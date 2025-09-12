import HeaderLight from "@/components/header-light";
import HeaderDark from "@/components/header-dark";
import Footer from "@/components/footer";
import "./globals.css";

export default function RootLayout ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> )
{
  return (
    <>
      <html lang="en">
        <head>
          {/* Google Fonts */ }
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Newsreader:ital,wght@0,400;0,700;1,400&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className="bg-[#EEEDE4] min-h-screen overflow-x-hidden">
          <HeaderDark />
          { children }
          <Footer />
        </body>
      </html>
    </>
  );
}
