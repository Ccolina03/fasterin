import "../styles/globals.css"
import Banner from "../../fasterin/components/Banner"
import Header from "../../fasterin/components/Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>

      <head />
      <body> <Header/>
      <Banner/>{children}</body>
    </html>
  )
}
