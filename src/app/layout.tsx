import type { Metadata } from "next";
import { Russo_One, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const JetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const russoOne = Russo_One({
  variable: "--font-russo-one",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Guitech Informática | Assistência Técnica",
  description: "Assistência técnica especializada em notebooks e computadores. Serviços de manutenção, reparo e suporte técnico com qualidade e confiança.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${russoOne.variable} ${JetBrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
