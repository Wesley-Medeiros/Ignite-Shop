import "./global.scss"
import { Roboto } from 'next/font/google'
import Logo from "../assets/Logo.svg"
import Image from "next/image"
import '../styles/pages/layout.scss'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'], variable: '--Robot'})

export const metadata = {
  title: 'Ignite Shop',
  description: 'Projeto Ignite',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header>
        <Image
          src={Logo}
          alt="Landscape picture"
        />
        </header>
        {children}
        </body>
    </html>
  )
}
