import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fortify Production",
  description:
    "Fortify Production - Building resilient and secure digital solutions",
  keywords: ["production", "fortify", "security", "digital solutions"],
  viewport: "width=device-width, initial-scale=1",
  creator: "Fortify Team",
  publisher: "Fortify Production",
  robots: "index, follow",
  themeColor: "#ffffff",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Fortify Production",
    description: "Building resilient and secure digital solutions",

    siteName: "Fortify Production",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1800,
        height: 945,
        alt: "Fortify Production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortify Production",
    description: "Building resilient and secure digital solutions",
    images: ["/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body data-barba="wrapper">
        <div className="content_container">{children}</div>
      </body>
    </html>
  );
}
