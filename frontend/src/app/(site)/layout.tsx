import '../../styles/globals.css';
import '../../styles/containers.css';
import '../../styles/layouts.css';
import { Inter } from 'next/font/google'
import Head from "next/head";
import TheHeader from './header';
import MainFooter from './footer';


const inter = Inter({ subsets: ['latin'] })


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
       <Head>
        <link rel="shortcut icon" href="/heart-icon.ico" />
      </Head>
      <body className={inter.className}>
      <TheHeader />

      <main>{children}</main>
      <MainFooter />
        </body>
    </html>
  )
}
