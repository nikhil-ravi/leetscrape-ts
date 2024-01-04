import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/nav-bar";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.leetcode.com"
  ),
  title: {
    default: "ScuffedCode",
    template: `%s | ${process.env.NEXT_PUBLIC_AUTHOR_NAME}`,
  },
  description: "This is a scuffed version of Leetcode with my own solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    title: process.env.NEXT_PUBLIC_AUTHOR_NAME,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-white text-black dark:bg-[#111010] dark:text-white"
    >
      <body className="mx-4 mb-40 mt-8 flex max-w-2xl flex-col antialiased md:flex-row lg:mx-auto">
        <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
          <Navbar />
          <article className="prose-quoteless prose prose-neutral dark:prose-invert">
            {children}
          </article>
        </main>
      </body>
    </html>
  );
}
