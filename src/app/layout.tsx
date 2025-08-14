import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
//
import "./globals.css";
import theme from "../theme";
import TanStackProviders from "./tanstack-providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resource Explorer App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ToastContainer
          style={{
            fontSize: 16,
            zIndex: 1500,
            fontFamily: "Public Sans, Serif",
          }}
          theme="colored"
          autoClose={5000}
          position="top-right"
          hideProgressBar={true}
          closeOnClick={true}
        />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <TanStackProviders>{children}</TanStackProviders>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
