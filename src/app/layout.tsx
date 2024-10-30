import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeToggle } from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GenZ Dictionary",
  description: "Learn the latest GenZ slang and expressions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-purple-400 to-indigo-600 p-4 sm:p-6 md:p-8">
          <header className="mb-8 flex justify-between items-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              GenZ Dictionary 📚
            </h1>
            <ThemeToggle />
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
