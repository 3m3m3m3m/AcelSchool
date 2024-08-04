import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./shared-components/header";
import Footer from "./shared-components/footer";
import HeaderMobile from "./shared-components/header-mobile";
import FooterMobile from "./shared-components/footer-mobile";

export const metadata: Metadata = {
  title: "School of Accel",
  description: "School of Accel website",
  metadataBase: new URL("https://accelerateordie.org"),
  keywords: ["ACCELERATE", "DIE"],
  authors: [
    { name: "ACCELERATE" },
    { name: "ACCELERATE", url: "https://accelerateordie.org" },
  ],
  openGraph: {
    siteName: "ACCELERATE",
    title: "ACCELERATE OR DIE ",
    description: "ACCELERATE OR DIE website",
    url: "https://accelerateordie.org",
    type: "website",
    images: "https://accelerateordie.org/img/accelerateordie-thumbnail-min.png",
  },
  twitter: {
    site: "https://accelerateordie.org",
    card: "summary_large_image",
    title: "ACCELERATE OR DIE",
    description: "ACCELERATE OR DIE website",
    images: "https://accelerateordie.org/img/accelerateordie-thumbnail-min.png",
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "favicon-light.svg",
        href: "favicon-light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "favicon-dark.svg",
        href: "favicon-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "";
  const isMobile =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );
  return (
    <html lang="en">
      <body className={isMobile ? "mobile" : "desktop"}>
        {isMobile ? <HeaderMobile /> : <Header />}
        {children}
        {isMobile ? <FooterMobile /> : <Footer />}
      </body>
    </html>
  );
}
