import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "./components/PageTransition"; // Importando a animação

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Roberto móveis",
  description: "",
};



export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className="relative">
      <head>
        <link rel="icon" href="/fav.png" />
      </head>
        {/* Vídeo de fundo global */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/video.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>

        {/* Conteúdo principal com transição */}
        <PageTransition>
          <main className="relative z-10">{children}</main>
        </PageTransition>
      </body>
    </html>
  );
}
