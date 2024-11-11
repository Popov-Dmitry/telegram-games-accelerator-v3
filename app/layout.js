import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { joinClassNames } from "@/utils/join-class-names";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

const sf = localFont({
  src: "../SF-Pro-Rounded-Semibold.otf",
  variable: "--font-sf",
  display: "swap"
});

const paralucent = localFont({
  src: "../paralucent-demi-bold.otf",
  variable: "--font-paralucent",
  display: "swap"
});

export const metadata = {
  title: "Telegram Gaming Accelerator",
  description: "Telegram Gaming Accelerator"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Telegram Gaming Accelerator</title>
        <meta property="og:title" content="Telegram Gaming Accelerator" />
        <meta
          property="og:description"
          content="Lead the next wave of Telegram games"
        />
        <meta property="og:url" content="https://www.gaming.tg/" />
        <meta property="og:image" content="https://www.gaming.tg/og.png" />
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body
        className={joinClassNames(
          inter.variable,
          interTight.variable,
          sf.variable,
          paralucent.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
