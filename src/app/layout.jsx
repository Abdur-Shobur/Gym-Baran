import Nav from '@/component/nav/Nav'
import './globals.css'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={poppins.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
