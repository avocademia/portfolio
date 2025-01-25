import type { Metadata } from "next";
import "./globals.scss";


export const metadata: Metadata = {
  title: "Jotham J. Ogeya",
  description: "Software Developer portfolio for Jotham Jami",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='body'>
        {children}
      </body> 
    </html>
  );
}
