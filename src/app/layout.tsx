import type { Metadata } from "next";
import "./globals.css";
import  Header  from "@/components/layout/Header";
import  Footer  from "@/components/layout/Footer";
import { Providers } from "@/components/providers/Providers";

export const metadata: Metadata = {
  title: "K-POP DEMON HUNTERS | Phoenix",
  description: "Landing page officielle du groupe Phoenix",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="text-black" style={{ backgroundColor: '#E6E4D6' }}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
