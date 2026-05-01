import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Fortify Productions | LED Screen Rental & Stage Lighting Services in Ghana",
  description:
    "Professional LED screen rental and stage lighting services in Ghana. Based in Accra, we provide premium audio-visual equipment for events, corporate functions, weddings, and productions. Book your equipment today!",
  keywords: [
    "LED screen rental Ghana",
    "stage lighting Ghana",
    "event equipment rental Accra",
    "LED screen rental Ghana",
    "audio visual equipment Ghana",
    "production equipment rental",
    "event lighting services Accra",
    "LED screen hire Ghana",
    "stage lighting hire Accra",
    "AV equipment rental Ghana",
    "fortify productions",
    "event production services Ghana",
    "corporate event equipment Ghana",
    "wedding lighting Ghana",
    "conference equipment rental",
    "Madina Accra event services",
    "Ghana production company",
    "rental equipment Ghana",
    "professional lighting Ghana",
    "event staging Ghana",
  ],
  creator: "Fortify Productions",
  publisher: "Fortify Productions",
  robots: "index, follow",
  themeColor: "#000000",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Fortify Productions | LED Screen Rental & Stage Lighting in Ghana",
    description:
      "Professional LED screen rental and stage lighting services in Ghana. Premium audio-visual equipment for all your event needs in Accra and beyond.",
    siteName: "Fortify Productions",
    type: "website",
    locale: "en_GH",
    url: "https://fortifyproductions.com",
    images: [
      {
        url: "/og-image.png",
        width: 1800,
        height: 945,
        alt: "Fortify Productions - LED Screen Rental & Stage Lighting Services Ghana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortify Productions | LED Screen Rental & Stage Lighting Ghana",
    description:
      "Professional LED screen rental and stage lighting services in Ghana. Premium equipment for events, weddings, and corporate functions.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://fortifyproductions.com",
  },
  metadataBase: new URL("https://fortifyproductions.com"),
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
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
