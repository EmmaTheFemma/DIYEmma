import '../../styles/globals.css';
import '../../styles/containers.css';
import '../../styles/layouts.css';
import Head from "next/head";
import TheHeader from './header';
import MainFooter from './footer';
import {Josefin_Sans} from '@next/font/google';


const josefin = Josefin_Sans({
  weight:['400'],
  preload: false //Want to try and make it true.
});


const links = [
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <TheHeader />

        <main>{children}</main>

        <MainFooter />
      </body>
    </html>
  )
}
