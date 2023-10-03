import "./globals.css";
import { Bebas_Neue } from "next/font/google";

import NavigationBar from "./components/UI/NavigationBar";
import Footer from "./components/UI/Footer";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebas.className} bg-vs-gray`}>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
