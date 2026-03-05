"use client";

import { usePathname } from "next/navigation";
import Menu from "./components/Menu/menu";
import { RemedioProvider } from "./store/remediosStore";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();

  const isLoginPage = pathname === "/";

  return (
    <>
    <html lang="pt-br">
      <body>

        {/* só mostra o menu se NÃO for login */}
        {!isLoginPage && <Menu />}


        <RemedioProvider>
          {children}
        </RemedioProvider>

      </body>
    </html>
    </>
  );
}