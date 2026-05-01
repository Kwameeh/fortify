import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Fortify Productions - LED Screen Rental Ghana",
  description:
    "Contact Fortify Productions for LED screen rental and stage lighting services in Ghana. Located in Madina, Accra. Call us at 0249458249 or email fortifyproductions.gh@gmail.com",
  keywords: [
    "contact fortify productions",
    "LED screen rental contact Ghana",
    "event equipment rental contact Accra",
    "stage lighting services contact",
    "Fortify Productions phone number",
    "Madina event services contact",
  ],
  openGraph: {
    title: "Contact Fortify Productions | LED Screen Rental Ghana",
    description:
      "Get in touch with Fortify Productions for professional LED screen rental and stage lighting services in Ghana.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

