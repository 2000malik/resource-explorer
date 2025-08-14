import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
//
import "./globals.css";
import theme from "../theme";
import TanStackProviders from "./tanstack-providers";

const FiraSansText = Fira_Sans({
  subsets: ["latin"],
  weight: "400",
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
      <body className={`${FiraSansText.className} `}>
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
