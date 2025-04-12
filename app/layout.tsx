import { Metadata } from "next/types";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fortify Production",
  description: "Fortify Production",
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
