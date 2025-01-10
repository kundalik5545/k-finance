import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import HeaderBar from "@/components/header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
// import MobileNav from "@/components/MobileNav";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "k-finance",
  description: "Track All Finance. Get AI Insigth and much more. ",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-[#e5e7eb]`}>
          {/* header/ Navbar */}
          <header className="header">
            <HeaderBar />
          </header>

          {/* Main Section */}
          <main className="min-h-screen w-full" id="main-section">
            {children}
          </main>

          <Toaster richColors />

          {/* footer */}
          <footer
            className="footer w-full bg-black text-white pb-4 md:mb-0 rounded-2xl"
            id="footer"
          >
            <Footer />
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
