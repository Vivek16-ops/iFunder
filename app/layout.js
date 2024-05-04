import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sessionprovider from "./components/Sessionprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "iFunder",
  description: "Platform to get funding for your work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Sessionprovider>
          {<Navbar />}
          <div className="min-h-[90vh]">
            {children}
          </div>
          {<Footer />}
        </Sessionprovider>
      </body>
    </html>
  );
}
