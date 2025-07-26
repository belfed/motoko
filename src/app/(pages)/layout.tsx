import type { Metadata } from "next";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import ShellSidebar from "@/components/layout/shell-sidebar";

import "../globals.css";
import { ThemeProvider } from "@/components/layout/theme/theme-provider";

export const metadata: Metadata = {
  title: "Motoko",
  description: "A modern Kakeibo app for mindful budgeting and expense tracking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SidebarProvider>
            <ShellSidebar />
            <main>
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
