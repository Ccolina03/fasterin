import "../styles/globals.css"
import Banner from "../../fastito/components/Banner"
import Header from "../../fastito/components/Header"

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
