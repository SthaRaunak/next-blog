import "./globals.css";
import { inter } from "./font.js";
import Navbar from "@/components/Navbar/Navbar.js";
import Footer from "@/components/Footer/Footer.js";

export const metadata = {
  title: {
    default: "Next.js 14 HomePage",
    template: "%s | Next.js 14",
  },
  description: "Next.js starter app description",
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} container`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
