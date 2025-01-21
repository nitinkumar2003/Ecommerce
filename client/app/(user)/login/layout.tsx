import type { Metadata } from "next";
import LoginLayout from "./LoginLayout";
import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

export const metadata:Metadata={
    title:"Nk Ecommerce login",
    description:''
}

export default function Layout({children}:Readonly<{children:React.ReactNode}>){
    return (
        <html lang="en">
                <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
       
        <LoginLayout>
        {children}
        </LoginLayout>

        </body>

        </html>
    )
}