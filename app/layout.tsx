import { ThemeProvider } from "./provider"
import { Inter } from "next/font/google";
import localFont from '@next/font/local'
import type { Metadata } from "next";
import "./globals.css";

const clash = localFont({
  src: [
    {
      path: '../public/fonts/Clash Grotesk/Fonts/OTF/ClashGrotesk-Medium.otf',
      weight: '500'
    },
  ],
  variable: '--font-clash'
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dave Boku",
  description: "Dave Boku. CS & Math @ Colby College. Software Engineer with a Product Mind. Building Things Big and Small.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} ${clash.variable}`}>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
