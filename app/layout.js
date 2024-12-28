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

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "k-finance",
  description: "Track All Finance. Get AI Insigth and much more. ",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* header/ Navbar */}
          <header className="header">
            <HeaderBar />
          </header>

          {/* Main Section */}
          <main className="min-h-screen" id="main-section">
            {children}
          </main>
          <Toaster richColors />

          {/* footer */}
          <footer className="footer bg-black text-white" id="footer">
            <Footer />
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
