import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import localFont from "next/font/local";
import { Metadata } from "next";

const myFont = localFont({
  src: "../../public/HousttelySignature-GOonZ.ttf",
  variable: "--font-house",
});

export const metadata: Metadata = {
  title: {
    default: "Fortify Productions | LCD Screen Rental & Stage Lighting Ghana",
    template: "%s | Fortify Productions",
  },
  description:
    "Professional LCD screen rental and stage lighting services in Ghana. Premium audio-visual equipment for events in Accra and throughout Ghana.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={myFont.variable}>
      <body data-barba="wrapper">
        <div className="content_container">
          <HeaderComponent />
          {children}
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
