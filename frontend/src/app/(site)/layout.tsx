import '../../styles/globals.css';
import '../../styles/containers.css';
import '../../styles/layouts.css';
import TheHeader from './header';
import MainFooter from './footer';
import {Josefin_Sans} from "next/font/google";


const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300','400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-josefin'
});


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
