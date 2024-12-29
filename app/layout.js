import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import HeaderBar from "@/components/header";
import Footer from "@/components/Footer";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import MobileNav from "@/components/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "k-finance",
  description: "Track All Finance. Get AI Insigth and much more. ",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-[#f5f5f8]`}>
          {/* header/ Navbar */}
          <header className="header">
            <HeaderBar />
          </header>

          {/* Main Section */}
          <main className="min-h-screen" id="main-section">
            {children}
          </main>
          <Toaster richColors />

          {/* Mobile nav at bottom */}
          <MobileNav />
          {/* footer */}
          <footer
            className="footer bg-black text-white pb-4 md:mb-0"
            id="footer"
          >
            <Footer />
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
